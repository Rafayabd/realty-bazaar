export function CalculatorSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Calculate the cost of your property</h2>
            <p className="text-muted-foreground">
              Built-in calculator to determine the monthly cost of your property. Get a detailed breakdown of all costs
              involved.
            </p>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <div className="bg-blue-100 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-white text-4xl">🧮</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary">$2,450</div>
                <div className="text-sm text-muted-foreground">Monthly Payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
