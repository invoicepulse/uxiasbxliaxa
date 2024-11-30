'use client'

import { useState } from 'react'
import { Toast } from './ui/toast'

export function ContactForm() {
  const [showToast, setShowToast] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show the success message
    setShowToast(true)
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gradient-to-r from-[#65a9f0] via-[#d552d8] to-[#f896ab] text-white rounded-md hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>

      <Toast
        show={showToast}
        message="We will reply in 24-48 hours."
        onClose={() => setShowToast(false)}
      />
    </form>
  )
}
