import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Phone, Mail } from "lucide-react"

const agents = [
  {
    id: 1,
    name: "Cameron Williamson",
    title: "Licensed Property Selling Agent",
    image: "/professional-male-real-estate-agent.png",
    rating: 4.9,
    reviews: 125,
    phone: "+1 234 567 8900",
  },
  {
    id: 2,
    name: "Esther Howard",
    title: "Licensed Property Selling Agent",
    image: "/professional-female-real-estate-agent.png",
    rating: 4.8,
    reviews: 98,
    phone: "+1 234 567 8901",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    title: "Licensed Property Selling Agent",
    image: "/professional-female-real-estate-agent-smiling.jpg",
    rating: 4.9,
    reviews: 156,
    phone: "+1 234 567 8902",
  },
  {
    id: 4,
    name: "Robert Cooper",
    title: "Licensed Property Selling Agent",
    image: "/professional-male-real-estate-agent-suit.jpg",
    rating: 4.7,
    reviews: 89,
    phone: "+1 234 567 8903",
  },
]

export function AgentsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Top real estate agents</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-1">{agent.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{agent.title}</p>

                <div className="flex items-center justify-center mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{agent.rating}</span>
                  <span className="ml-1 text-sm text-muted-foreground">({agent.reviews})</span>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
