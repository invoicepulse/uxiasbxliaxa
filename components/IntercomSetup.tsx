'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
    intercomSettings: {
      api_base: string;
      app_id: string;
    };
  }
}

interface IntercomFunction extends Function {
  c?: (args: any) => void;
  q?: any[];
}

export default function IntercomSetup() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "l003qwre"
    };

    (function() {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i: IntercomFunction = function() {
          if (i.c) i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q!.push(args);
        };
        w.Intercom = i;

        function l() {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/l003qwre';
          var x = d.getElementsByTagName('script')[0];
          if (x && x.parentNode) {
            x.parentNode.insertBefore(s, x);
          }
        }

        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();

    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
}
