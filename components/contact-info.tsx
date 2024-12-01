'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <MapPin className="h-6 w-6 text-indigo-600" />
        <div>
          <h3 className="text-lg font-medium">Our Location</h3>
          <p className="text-gray-600">123 AI Street, Silicon Valley, CA 94025</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="h-6 w-6 text-indigo-600" />
        <div>
          <h3 className="text-lg font-medium">Phone Number</h3>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Mail className="h-6 w-6 text-indigo-600" />
        <div>
          <h3 className="text-lg font-medium">Email Address</h3>
          <p className="text-gray-600">contact@modelcanvas.ai</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
