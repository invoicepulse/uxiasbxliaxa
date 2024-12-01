import { AdditionalFeatures } from "@/components/additional-features"
import { BenefitsSection } from "@/components/benefits-section"
import { FeaturesSection } from "@/components/features-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function FeaturesPage() {
  return (
    <main>
      <FeaturesSection />
      <AdditionalFeatures />
      <BenefitsSection />
      <NewsletterSection />
    </main>
  )
}
