'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    name: "Essential",
    price: "$9",
    description: "Essential AI tools for everyday use",
    features: [
      "1,000 AI powered chat messages",
      "30 premium image generations",
      "10 premium music generation",
      "Access to all premium AI models",
      "Early access to new features"
    ]
  },
  {
    name: "Advanced",
    price: "$17",
    description: "Advanced features for serious AI enthusiasts",
    features: [
      "5,000 AI powered chat messages",
      "100 premium image generations",
      "40 premium music generation",
      "Access to all premium AI models",
      "Early access to new features"
    ],
    recommended: true
  },
  {
    name: "Platinum",
    price: "$29",
    description: "Unlimited potential for power users",
    features: [
      "10,000 AI powered chat messages",
      "300 premium image generations",
      "100 premium music generations",
      "Access to all premium AI models",
      "Early access to new features"
    ]
  }
]

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Choose the right <span className="inline-block" style={{
            background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>plan</span> for you
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-500 group
                backdrop-blur-sm bg-white/5 border-2 ${plan.recommended ? 'border-purple-500' : 'border-gray-500/30'}
                hover:bg-gradient-to-r hover:from-[#65a9f0] hover:via-[#d552d8] hover:to-[#f896ab]`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-2 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Recommended
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-4xl font-bold mb-2 group-hover:text-white transition-colors">
                  {plan.price}<span className="text-lg font-normal">/mo</span>
                </h3>
                <p className="text-xl font-semibold mb-2">{plan.name}</p>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors" />
                    <span className="text-gray-600 group-hover:text-white/90 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://welcome.modelcanvas.site/"
                className="block w-full"
              >
                <button className="w-full py-3 rounded-lg border-2 border-gray-500/30 
                  text-gray-600 font-semibold transition-all duration-300
                  group-hover:border-white group-hover:text-white">
                  Choose plan
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
