import { useState, useEffect } from 'react';

export function useCanRunWebGL() {
  const [canRun, setCanRun] = useState(false);

  useEffect(() => {
    // Don't run on mobile (saves CPU, battery, data)
    if (window.innerWidth < 768) return;

    // Check if WebGL is available
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return;

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setCanRun(true);
  }, []);

  return canRun;
}
