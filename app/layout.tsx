import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "@/app/globals.css"
import { AutoScrollToTop } from "@/components/auto-scroll-to-top"
import { Metadata } from "next"
import IntercomWrapper from "@/components/IntercomWrapper"

const inter = Inter({ subsets: ["latin"] })
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "Model Canvas",
  description: "Model Canvas - AI Model Marketplace",
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`min-h-screen relative ${inter.className} ${plusJakarta.className}`}
        style={{
          background: "linear-gradient(135deg, #f5f0ff 0%, #fff1f8 100%)",
          fontFamily: `${inter.style.fontFamily}, ${plusJakarta.style.fontFamily}`,
        }}>
        {/* Background decorative lines */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, #8751f4 0px, #8751f4 1px, transparent 1px, transparent 60px)",
            }}
          />
          <div className="absolute left-0 top-0 w-full h-full opacity-20"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, #8751f4 0px, #8751f4 1px, transparent 1px, transparent 60px)",
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            {children}
          </div>
          <Footer />
        </div>
        <AutoScrollToTop />
        <IntercomWrapper />
      </body>
    </html>
  )
}
