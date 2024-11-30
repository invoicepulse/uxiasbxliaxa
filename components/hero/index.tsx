import Image from "next/image"

export function Hero() {
  return (
    <main className="relative text-center py-20">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] opacity-20">
        <Image
          src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732793675/Untitled_design__1_-removebg-preview_l2rolw.png"
          alt=""
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>
      
      {/* Gradient blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#8751f4] to-[#c665aa] rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-l from-[#8751f4] to-[#c665aa] rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 w-64 h-64 bg-gradient-to-l from-[#8751f4] to-[#c665aa] rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
      
      <h1 className="text-6xl md:text-7xl font-bold tracking-tight relative z-10">
        <span className="inline-block" style={{
          background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>Best</span>{" "}
        <span className="text-zinc-900">Of All</span>{" "}
        <span className="inline-block" style={{
          background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>AI Models</span>
        <br />
        <span className="text-zinc-900">In One Place</span>
      </h1>
      <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto relative z-10">
        Experience the future of text generation with our multi-model AI platform and
        create, iterate, and perfect your content with advanced language models.
      </p>
      
    </main>
  )
}
