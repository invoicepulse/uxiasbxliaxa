import { BookText, Globe, ImageIcon, History, Download, Languages } from 'lucide-react'

const features = [
  {
    icon: BookText,
    title: 'Prompt Library',
    description: 'Forget about writing your own prompt, use the prompt templates and supercharge your workflow.'
  },
  {
    icon: Globe,
    title: 'Real-time web search',
    description: 'Our Real-time web search AI Bot provides instant, live search results directly within the AI chat playground.'
  },
  {
    icon: ImageIcon,
    title: 'Image Generation',
    description: 'Generate Image instantly from multiple models, create visuals from text descriptions or templates.'
  },
  {
    icon: History,
    title: 'History',
    description: 'All of the models can recall previous topic, so you can continue your conversation at any point of time.'
  },
  {
    icon: Download,
    title: 'Import content',
    description: 'Effortlessly import PDFs, images, and documents. Use AI to ask questions, extract information, and summarize documents.'
  },
  {
    icon: Languages,
    title: 'Multilingual support',
    description: 'ChatGPT, and Gemini can understand and respond in over 100 languages.'
  }
]

export function AdditionalFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
         <span className="inline-block" style={{
            background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-500 group
                backdrop-blur-sm bg-white/5 border-2 border-gray-500/30
                hover:bg-gradient-to-r hover:from-[#65a9f0] hover:via-[#d552d8] hover:to-[#f896ab]`}
            >
              <div className="mb-6">
                <feature.icon className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

