'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What AI models are supported?",
    answer: "We support all major AI models including GPT-4, Claude, Gemini, and many more. Our platform is constantly updated to include the latest and most powerful AI models available."
  },
  {
    question: "How does the pricing work?",
    answer: "We offer simple, transparent pricing with three tiers - Basic, Pro, and Enterprise. Each plan includes a set number of AI interactions, image generations, and music generations. You can upgrade or downgrade at any time."
  },
  {
    question: "Can I use the platform for commercial purposes?",
    answer: "Yes! All our plans support commercial use. The Enterprise plan is specifically designed for businesses needing higher usage limits and advanced features."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 email support for all users. Pro and Enterprise users also get priority support and access to our dedicated support team through live chat."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security very seriously. All data is encrypted in transit and at rest. We comply with GDPR and other major privacy regulations."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. We offer a pro-rated refund for unused time on annual plans."
  }
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked <span className="inline-block" style={{
            background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Questions</span>
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="backdrop-blur-sm bg-white/5 border-2 border-gray-500/30 rounded-2xl px-6
                data-[state=open]:bg-gradient-to-r data-[state=open]:from-[#65a9f0] data-[state=open]:via-[#d552d8] data-[state=open]:to-[#f896ab]"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline group-hover:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 group-hover:text-white/90">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection
