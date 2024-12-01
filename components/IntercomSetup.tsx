'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: {
      api_base: string;
      app_id: string;
    };
    attachEvent?: (event: string, listener: () => void) => void;
  }
}

export default function IntercomSetup() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "l003qwre"
    };

    const initIntercom = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://widget.intercom.io/widget/l003qwre';
      document.body.appendChild(script);
    };

    if (document.readyState === 'complete') {
      initIntercom();
    } else if (window.attachEvent) {
      window.attachEvent('onload', initIntercom);
    } else {
      window.addEventListener('load', initIntercom, false);
    }

    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
}
