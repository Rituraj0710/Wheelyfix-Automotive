import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Essential Car Maintenance Tips for Indian Roads",
      excerpt: "Learn how to keep your car in perfect condition while navigating challenging Indian road conditions.",
      image: "/placeholder.svg",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      category: "Car Care",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Bike Service: When and Why You Need It",
      excerpt: "Understanding the importance of regular bike servicing and how it extends your vehicle's life.",
      image: "/placeholder.svg",
      author: "Priya Sharma",
      date: "2024-01-12",
      category: "Bike Care",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Top 10 Warning Signs Your Car Needs Immediate Attention",
      excerpt: "Don't ignore these critical warning signs that indicate your car needs professional service.",
      image: "/placeholder.svg",
      author: "Amit Singh",
      date: "2024-01-10",
      category: "Car Care",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Monsoon Vehicle Care: Protecting Your Ride",
      excerpt: "Essential tips to protect your vehicle during the monsoon season in India.",
      image: "/placeholder.svg",
      author: "Sneha Patel",
      date: "2024-01-08",
      category: "Seasonal Care",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Electric vs Petrol: Which is Better for Indian Cities?",
      excerpt: "A comprehensive comparison of electric and petrol vehicles for urban Indian driving.",
      image: "/placeholder.svg",
      author: "Vikram Reddy",
      date: "2024-01-05",
      category: "Industry News",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "DIY Basic Car Maintenance You Can Do at Home",
      excerpt: "Simple maintenance tasks every car owner can perform to save money and time.",
      image: "/placeholder.svg",
      author: "Meera Joshi",
      date: "2024-01-03",
      category: "DIY Tips",
      readTime: "5 min read"
    }
  ]

  const categories = ["All", "Car Care", "Bike Care", "Seasonal Care", "Industry News", "DIY Tips"]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Wheelyfix Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert insights, tips, and guides for vehicle maintenance and care
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={blogs[0].image} 
                alt={blogs[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <Badge className="mb-3">{blogs[0].category}</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {blogs[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {blogs[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogs[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blogs[0].date).toLocaleDateString()}
                </div>
                <span>{blogs[0].readTime}</span>
              </div>
              <Button>
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog) => (
            <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">{blog.category}</Badge>
                <h3 className="text-xl font-semibold line-clamp-2">{blog.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {blog.author}
                  </div>
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blogs