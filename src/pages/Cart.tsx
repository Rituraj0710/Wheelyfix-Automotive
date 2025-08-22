import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

declare global {
  interface Window { Razorpay?: any }
}

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Engine Oil - 5W30",
      price: 899,
      image: "/placeholder.svg",
      quantity: 2,
      category: "Oil & Lubricants"
    },
    {
      id: "2", 
      name: "Brake Pads Set",
      price: 1299,
      image: "/placeholder.svg",
      quantity: 1,
      category: "Brake Parts"
    },
    {
      id: "3",
      name: "Air Filter",
      price: 349,
      image: "/placeholder.svg", 
      quantity: 1,
      category: "Filters"
    }
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id))
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 99
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + shipping + tax

  const navigate = useNavigate()

  const [paymentsEnabled, setPaymentsEnabled] = useState<boolean>(false)

  // Check payment config on mount to decide visibility/enabled state of Pay Now
  useEffect(() => {
    fetch('/api/payments/config')
      .then(r => r.json())
      .then(d => setPaymentsEnabled(Boolean(d?.enabled)))
      .catch(() => setPaymentsEnabled(false))
  }, [])

  const loadRazorpay = () =>
    new Promise<boolean>((resolve) => {
      if (window.Razorpay) return resolve(true)
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })

  const handlePayment = async () => {
    const ok = await loadRazorpay()
    if (!ok) {
      toast({ title: 'Payment error', description: 'Failed to load payment SDK', variant: 'destructive' })
      return
    }

    try {
      // Create order on backend (amount in paise)
      const orderResp = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
        credentials: 'include',
        body: JSON.stringify({ amount: total * 100 }),
      })
      const orderData = await orderResp.json()
      if (!orderResp.ok) throw new Error(orderData?.message || 'Unable to create order')

      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Wheelyfix',
        description: 'Parts and Services',
        order_id: orderData.orderId,
        handler: async function (response: any) {
          try {
            const verifyResp = await fetch('/api/payments/verify', {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
              },
              credentials: 'include',
              body: JSON.stringify(response),
            })
            if (!verifyResp.ok) throw new Error('Verification failed')
            toast({ title: 'Payment successful', description: 'Thank you! Your order has been placed.' })
          } catch (e) {
            toast({ title: 'Verification error', description: (e as any).message, variant: 'destructive' })
          }
        },
        theme: { color: '#fb923c' },
        prefill: {},
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (e: any) {
      toast({ title: 'Payment error', description: e.message || 'Something went wrong', variant: 'destructive' })
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b81a_1px,transparent_1px),linear-gradient(to_bottom,#94a3b81a_1px,transparent_1px)] bg-[size:16px_24px]" />
        <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      <Header />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <Card className="border-0 shadow-md bg-gradient-to-br from-muted to-background">
              <CardContent className="py-12 text-center">
                <h3 className="text-xl font-semibold mb-4">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">Add some parts to get started</p>
                <Button>Continue Shopping</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="transition-shadow hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <Badge variant="secondary" className="mt-1">
                            {item.category}
                          </Badge>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                                className="w-16 text-center"
                                min="0"
                              />
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xl font-bold">₹{item.price * item.quantity}</span>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <Card className="border-0 shadow-lg bg-gradient-to-b from-primary/5 to-accent/10">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>₹{shipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (18%)</span>
                      <span>₹{tax}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      {paymentsEnabled && (
                        <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 md:hidden" size="lg" onClick={handlePayment}>
                          Pay Now
                        </Button>
                      )}
                      <Button variant="outline" className="w-full" onClick={() => navigate('/services')}>
                        Continue Shopping
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                {/* Desktop: Pay Now button placed below the order summary card */}
                <div className="hidden md:block mt-4">
                  {paymentsEnabled && (
                    <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90" size="lg" onClick={handlePayment}>
                      Pay Now
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky checkout bar on mobile to ensure visibility */}
      {cartItems.length > 0 && paymentsEnabled && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t z-50 p-3">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
            <div>
              <div className="text-xs text-muted-foreground">Total</div>
              <div className="text-lg font-bold">₹{total}</div>
            </div>
            <Button size="lg" className="flex-1 bg-gradient-to-r from-primary to-accent text-white hover:opacity-90" onClick={handlePayment}>
              Pay Now
            </Button>
          </div>
        </div>
      )}

      {/* Floating Pay Now button removed; desktop button lives below summary card */}

      <Footer />
    </div>
  )
}

export default Cart