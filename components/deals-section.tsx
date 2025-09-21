import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react"

const deals = [
  {
    id: 1,
    image: "/luxury-living-room.png",
    price: "$2,095",
    originalPrice: "$2,500",
    discount: "16% off",
    title: "Comfortable House | 3 BHK",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 3,
    baths: 2,
    sqft: 1200,
    type: "House",
  },
  {
    id: 2,
    image: "/modern-apartment.png",
    price: "$1,860",
    originalPrice: "$2,200",
    discount: "15% off",
    title: "1 BHK Apartment | 1 BHK",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 1,
    baths: 1,
    sqft: 600,
    type: "Apartment",
  },
  {
    id: 3,
    image: "/cozy-bedroom.png",
    price: "$2,400",
    originalPrice: "$2,800",
    discount: "14% off",
    title: "2 BHK Apartment | 2 BHK",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 2,
    baths: 2,
    sqft: 900,
    type: "Apartment",
  },
  {
    id: 4,
    image: "/cottage-style-home-exterior.jpg",
    price: "$1,950",
    originalPrice: "$2,300",
    discount: "15% off",
    title: "Cottage | 2 BHK",
    location: "2861 62nd Ave, Oakland, CA 94605",
    beds: 2,
    baths: 1,
    sqft: 800,
    type: "Cottage",
  },
]

export function DealsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">We always offer best deals</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={deal.image || "/placeholder.svg"} alt={deal.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">{deal.discount}</Badge>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary">{deal.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{deal.originalPrice}</span>
                </div>
                <h3 className="font-semibold mb-2 text-sm">{deal.title}</h3>
                <div className="flex items-center text-muted-foreground text-xs mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="truncate">{deal.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="w-3 h-3 mr-1" />
                    <span>{deal.beds}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-3 h-3 mr-1" />
                    <span>{deal.baths}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-3 h-3 mr-1" />
                    <span>{deal.sqft}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
