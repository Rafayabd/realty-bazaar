import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Have a property to sell?</h2>
            <p className="text-muted-foreground">List your property for free & connect with clients faster</p>
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <div className="bg-blue-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-white text-4xl">🏠</div>
              </div>
              <div className="text-sm text-muted-foreground">Sell your property with confidence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
