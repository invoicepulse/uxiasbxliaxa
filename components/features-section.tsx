'use client'

'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function FeaturesSection() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      
      const rect = imageRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)))
      const tiltDegree = 24 * (1 - scrollProgress)
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${tiltDegree}deg)`
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-20 overflow-hidden relative">
      {/* Curved lines background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
                <svg
          width="100%"
          height="100%"
          viewBox="0 0 1774 1154"
          preserveAspectRatio="none"
          fill="none"
          
        >
          <path
            d="M-500 279.975C186.725 215.844 304.399 161.29 425.797 116.958C541.875 74.5635 676.891 22.9148 800.31 63.5881C861.382 83.7096 900.854 140.416 930.645 194.647C1011.19 341.307 1052.36 544.351 1220.36 617.628C1279.52 643.452 1346.76 646.788 1410.07 634.629C1585.09 601.165 1779.47 416.844 1755.21 222.946C1745.96 148.916 1701.27 88.1213 1642.22 46.1567C1579.23 1.39452 1486.24 13.7687 1417.51 39.8082C1346.76 66.601 1284.52 111.901 1223.02 156.233C1113.97 234.997 1003.31 313.116 910.004 410.495C816.695 507.874 740.835 626.989 716.683 760.307C703.171 834.552 706.15 910.304 704.235 985.517C703.277 1024.47 695.191 1060.3 668.06 1089.68C628.694 1132.5 566.133 1139.6 511.552 1136.91C372.492 1130.13 234.497 1070.74 110.12 1011.34C75.7544 994.986 41.6013 977.877 -500 959.262"
            stroke="url(#paint0_linear_236_133)"
            strokeWidth="32"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_236_133"
              x1="569.953"
              y1="596.559"
              x2="1632.98"
              y2="519.52"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7E4FFF" />
              <stop offset="1" stopColor="#CE68A2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        ref={imageRef}
        className="max-w-4xl mx-auto transition-all duration-1000 flex justify-center relative"
        style={{
          willChange: 'transform',
          transformOrigin: 'center bottom'
        }}
      >
        <Image
          src="https://res.cloudinary.com/dvgtcyyzh/image/upload/v1732858661/Add_a_little_bit_of_body_text__2_-removebg_kpbike.png"
          alt="AI Models Interface"
          width={600}
          height={460}
          priority
          quality={100}
        />
      </div>
    </section>
  )
}

