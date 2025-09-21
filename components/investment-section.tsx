import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InvestmentSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-foreground mb-8">High-demand projects to invest now</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <img src="/modern-office-building-construction.jpg" alt="Project Real One 01" className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Project Real One 01</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    High-rise commercial building with modern amenities and prime location.
                  </p>
                  <div className="text-primary font-semibold">Starting from $500K</div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <img src="/residential-complex-construction.png" alt="Project Real One 02" className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Project Real One 02</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Luxury residential complex with world-class facilities and amenities.
                  </p>
                  <div className="text-primary font-semibold">Starting from $750K</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right CTA */}
          <div className="bg-gray-900 rounded-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Get matched with local real estate agents</h3>
            <p className="text-gray-300 mb-6 text-sm">
              Connect with experienced agents in your area who know the market inside and out.
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90">Find agents →</Button>
            <div className="mt-6">
              <img
                src="/real-estate-agent-with-house-model.jpg"
                alt="Real estate agent"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
