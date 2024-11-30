import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732793675/Untitled_design__1_-removebg-preview_l2rolw.png"
        alt="Model Canvas"
        width={50}
        height={50}
        className="w-12 h-12"
      />
      <div>
        <span className="text-xl font-bold" style={{
          background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>Model</span>
        <span className="block text-xl font-bold" style={{
          background: "linear-gradient(90deg, #8751f4, #ad5ec7, #c665aa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>Canvas</span>
      </div>
    </div>
  )
}

