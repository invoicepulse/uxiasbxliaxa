import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AdditionalFeatures } from "@/components/additional-features"
import { SubscriptionSection } from "@/components/subscription-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <BenefitsSection />
      <AdditionalFeatures />
      <SubscriptionSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  )
}

