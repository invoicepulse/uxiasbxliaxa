'use client';

import { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function IntercomSetup() {
  useEffect(() => {
    Intercom({
      app_id: 'l003qwre',
    });
  }, []);

  return null;
}
