import { Card, CardContent } from "@/components/ui/card"
import { Home, Calculator, Shield, Scale } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Home Loans",
    description: "Get pre-qualified for a home loan in minutes",
  },
  {
    icon: Calculator,
    title: "Property Valuation",
    description: "Find out how much your property is worth",
  },
  {
    icon: Shield,
    title: "Property Insurance",
    description: "Protect your investment with comprehensive coverage",
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Expert legal advice for all your property needs",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Explore property related services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Get started with buying, selling and renting on the go.
          </button>
        </div>
      </div>
    </section>
  )
}
