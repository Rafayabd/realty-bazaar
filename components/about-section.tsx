import { Check } from "lucide-react"

export function AboutSection() {
  const features = [
    "Smart search technology",
    "Instant property alerts",
    "Local market insights",
    "Professional photography",
    "Comprehensive property reports and results in housing market, advanced and analytics",
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">We are the best in the housing market</h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <div className="bg-blue-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-white text-4xl">👨‍💼</div>
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block">FOR SALE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
