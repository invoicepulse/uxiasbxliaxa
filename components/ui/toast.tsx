'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  duration?: number
  show: boolean
  onClose: () => void
}

export function Toast({ message, duration = 3000, show, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [show, duration, onClose])

  if (!show) return null

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 transform transition-all duration-300 ease-in-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      )}
    >
      <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  )
}
