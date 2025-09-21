import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PropertiesSection } from "@/components/properties-section"
import { CalculatorSection } from "@/components/calculator-section"
import { DealsSection } from "@/components/deals-section"
import { InvestmentSection } from "@/components/investment-section"
import { AgentsSection } from "@/components/agents-section"
import { CTASection } from "@/components/cta-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PropertiesSection />
      <CalculatorSection />
      <DealsSection />
      <InvestmentSection />
      <AgentsSection />
      <CTASection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
