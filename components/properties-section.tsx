import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Heart } from "lucide-react"

const properties = [
  {
    id: 1,
    image: "/luxury-house-exterior.jpg",
    price: "$7594",
    type: "House Properties",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 3,
    baths: 2,
    sqft: 1200,
  },
  {
    id: 2,
    image: "/modern-apartment-building.png",
    price: "$1920",
    type: "Condo Properties",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 2,
    baths: 1,
    sqft: 800,
  },
  {
    id: 3,
    image: "/townhouse-property.jpg",
    price: "$7500",
    type: "Townhouse",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 4,
    baths: 3,
    sqft: 1800,
  },
  {
    id: 4,
    image: "/single-family-home.png",
    price: "$2125",
    type: "Single Home",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 3,
    baths: 2,
    sqft: 1400,
  },
]

export function PropertiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">We've got properties for everyone</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.type}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                  <Badge variant="secondary" className="text-xs">
                    {property.type}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="truncate">{property.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
