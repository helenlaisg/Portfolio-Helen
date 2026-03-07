import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let columns = Math.floor(width / 20);
    let drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Theme colors
    let bgFade = 'rgba(10, 10, 10, 0.05)';
    let textColor = '#00BFFF';

    const updateColors = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        bgFade = 'rgba(245, 247, 250, 0.2)'; // Light fade (needs to be stronger to clear text)
        textColor = '#007ACC'; // Darker blue
      } else {
        bgFade = 'rgba(10, 10, 10, 0.05)';
        textColor = '#00BFFF';
      }
    };

    // Initial check
    updateColors();

    // Observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateColors();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    const draw = () => {
      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = textColor;
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = Math.floor(Math.random() * 2); // 0 or 1
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 70);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Update columns and drops on resize
      const newColumns = Math.floor(width / 20);
      if (newColumns > columns) {
        for (let i = columns; i < newColumns; i++) {
          drops[i] = Math.random() * (height / 20);
        }
      }
      columns = newColumns;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.3,
        pointerEvents: 'none'
      }}
    />
  );
};

export default MatrixBackground;