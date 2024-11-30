'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setShowPopup(true)
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-[#8751f4] to-[#c665aa] rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Going to AWS re:invent? Let's Connect.
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg flex-grow max-w-md"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Thanks for Subscribing!</h3>
            <p className="text-gray-600">We'll keep you updated with the latest news and offers.</p>
          </div>
        </div>
      )}
    </section>
  )
}

