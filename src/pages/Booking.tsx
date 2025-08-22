import { useEffect, useMemo, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import { api } from "@/lib/api"

const Booking = () => {
  const location = useLocation() as { state?: any }
  const navigate = useNavigate()
  const { user } = useAuth()
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    vehicleModel: "",
    serviceType: "",
    timeSlot: "",
    address: "",
    notes: ""
  })
  
  const { toast } = useToast()

  // Prefill from auth and navigation state
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      name: prev.name || user?.name || "",
      email: prev.email || user?.email || "",
      serviceType: location.state?.serviceType || prev.serviceType,
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!date || !formData.timeSlot) {
      toast({ title: "Missing details", description: "Please select a date and time slot.", variant: "destructive" })
      return
    }

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        vehicleType: formData.vehicleType,
        vehicleModel: formData.vehicleModel,
        serviceType: formData.serviceType,
        date: date.toISOString(),
        timeSlot: formData.timeSlot,
        address: formData.address,
        notes: formData.notes,
      }
      const created = await api.authPost<any>('/bookings', payload)
      toast({
        title: "Booking Confirmed!",
        description: `Reference: ${String(created._id).slice(-8).toUpperCase()}`,
      })
      navigate('/dashboard')
    } catch (err: any) {
      toast({ title: 'Booking failed', description: err?.message || 'Please try again', variant: 'destructive' })
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Service</h1>
            <p className="text-xl text-muted-foreground">
              Schedule your vehicle maintenance with Wheelyfix Automotive
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Service Booking Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Vehicle Type</Label>
                    <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange("vehicleType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="bike">Bike</SelectItem>
                        <SelectItem value="scooter">Scooter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="vehicleModel">Vehicle Model</Label>
                    <Input
                      id="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                      placeholder="e.g., Honda City, Yamaha R15"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Service Type</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Service</SelectItem>
                      <SelectItem value="comprehensive">Comprehensive Service</SelectItem>
                      <SelectItem value="ac">AC Service</SelectItem>
                      <SelectItem value="battery">Battery Service</SelectItem>
                      <SelectItem value="brake">Brake Service</SelectItem>
                      <SelectItem value="suspension">Suspension Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>Time Slot</Label>
                    <Select value={formData.timeSlot} onValueChange={(value) => handleInputChange("timeSlot", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9-12">9:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="12-15">12:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="15-18">3:00 PM - 6:00 PM</SelectItem>
                        <SelectItem value="18-21">6:00 PM - 9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Service Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your address for pickup/drop service"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any specific requirements or issues?"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Book Service
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Booking