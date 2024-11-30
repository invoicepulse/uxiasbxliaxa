'use client';

import dynamic from 'next/dynamic';

const IntercomSetup = dynamic(() => import('./IntercomSetup'), { ssr: false });

export default function IntercomWrapper() {
  return <IntercomSetup />;
}
