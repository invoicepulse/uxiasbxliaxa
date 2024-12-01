import Image from 'next/image'

export function SubscriptionSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4">
          One <span className="inline-block" style={{
            background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Subscription</span> for it all
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Why pay for multiple expensive subscriptions when one subscription can do it all?
          Access multiple AI models and save 1000's of dollar per year.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732876337/multi-sub_dgiqyq.png"
              alt="Multiple Subscriptions"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1733000328/Untitled_design_2_i6xnwn.png"
              alt="Single Subscription"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="https://welcome.modelcanvas.site/"
            className="inline-block"
          >
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#65a9f0] via-[#d552d8] to-[#f896ab] text-white font-semibold hover:opacity-90 transition-opacity">
              Start Chat →
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection
