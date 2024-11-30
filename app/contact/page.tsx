import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { NewsletterSection } from "@/components/newsletter-section"

export default function ContactPage() {
  return (
    <main className="py-20">
      <h1 className="text-5xl font-bold text-center mb-16">
        Get in <span className="inline-block" style={{
          background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>Touch</span>
      </h1>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <NewsletterSection />
    </main>
  )
}

