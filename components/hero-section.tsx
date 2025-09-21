import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Find a perfect home you'll love
              </h1>
              <p className="text-lg text-muted-foreground">
                We provide a complete service for the sale, purchase or rental of real estate.
              </p>
            </div>

            {/* Search form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="City" className="pl-10 bg-muted border-0" />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="bg-muted border-0">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-muted border-0">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-100k">$0 - $100k</SelectItem>
                    <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                    <SelectItem value="500k+">$500k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                <Search className="w-4 h-4 mr-2" />
                Search Property
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              src="/modern-apartment-building-with-balconies.jpg"
              alt="Modern apartment building"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
