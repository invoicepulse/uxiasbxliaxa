'use client'

import { Code2, Webhook, Boxes } from 'lucide-react'
import Image from 'next/image'

export function BenefitsSection() {
  const benefits = [
    {
      icon: Code2,
      title: 'Unified Interface',
      description: 'Our\'s is the only unified AI Interface tool brings together all your favorite chat models into one seamless platform. No more juggling between different AI systems—easily manage and interact with multiple chatbots from a single interface.'
    },
    {
      icon: Webhook,
      title: 'API Access',
      description: 'Pixa\'s LLM API offers advanced summarization, text generation, and question-answering. Easily integrate with support for JSON, HTML, Markdown, and plain text, enhancing your applications with powerful language tools.'
    },
    {
      icon: Boxes,
      title: 'Pre-built Tools',
      description: 'Pixa offers pre-built AI integrations for diverse creative tasks including image, video, music, and PDF generation, simplifying advanced feature integration into your apps.'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="inline-block" style={{
            background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Experience</span> all the benefits of AI
        </h2>
        
        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-500 group
                backdrop-blur-sm bg-white/5 border-2 border-gray-500/30
                hover:bg-gradient-to-r hover:from-[#65a9f0] hover:via-[#d552d8] hover:to-[#f896ab]`}
            >
              <div className="mb-6">
                <benefit.icon className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Horizontal Card */}
        <div className="w-full rounded-2xl transition-all duration-500 group
          backdrop-blur-sm bg-white/5 border-2 border-gray-500/30
          hover:bg-gradient-to-r hover:from-[#65a9f0] hover:via-[#d552d8] hover:to-[#f896ab]">
          <div className="flex flex-col md:flex-row items-center p-8 gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732875070/ai-models-2_hcsbpd.png"
                alt="AI Models"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                Multiple AI Models Support
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                Access and integrate with multiple leading AI models through our unified interface. 
                Our platform supports a wide range of language models, making it easy to leverage 
                the power of different AI capabilities for your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
