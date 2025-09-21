export function PartnersSection() {
  const partners = [
    { name: "REAL", logo: "/real-company-logo.jpg" },
    { name: "Cargill", logo: "/cargill-company-logo.jpg" },
    { name: "PROPERT", logo: "/propert-company-logo.jpg" },
    { name: "BUILD", logo: "/build-company-logo.jpg" },
    { name: "CHASE", logo: "/chase-bank-logo.png" },
    { name: "Rental", logo: "/rental-company-logo.jpg" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Partners</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
