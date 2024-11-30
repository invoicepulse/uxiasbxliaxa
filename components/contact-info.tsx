import { Mail, MapPin } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-600">We'd love to hear from you. Here's how you can reach us...</p>
      </div>
      <div className="flex items-start space-x-3">
        <Mail className="w-5 h-5 text-purple-600 mt-1" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600">contact@modelcanvas.site</p>
          </div>
      </div>
      <div className="flex items-start space-x-3">
        <MapPin className="w-5 h-5 text-purple-600 mt-1" />
        <div>
          <h3 className="font-semibold">Address</h3>
          <p className="text-gray-600">
            68 Tanners Drive, Blakelands<br />
            Milton Keynes, MK14 5BP<br />
            United Kingdom
          </p>
        </div>
      </div>
    </div>
  )
}

