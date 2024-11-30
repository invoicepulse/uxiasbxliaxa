import Link from 'next/link'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="bg-black py-12 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-600">
              Experience the future of AI with our multi-model platform. Made with ❤️ by Model Canvas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-600 hover:text-purple-600">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
              <li><Link href="/support" className="text-gray-600 hover:text-purple-600">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-purple-600">Terms & Conditions</Link></li>
              <li><Link href="/do-not-sell" className="text-gray-600 hover:text-purple-600">Do Not Sell My Data</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-600">
          <p>&copy; 2023 Model Canvas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

