'use client'

import dynamic from 'next/dynamic'

const IntercomChat = dynamic(() => import('./Intercom'), {
  ssr: false,
})

export function IntercomProvider() {
  return <IntercomChat />
}
