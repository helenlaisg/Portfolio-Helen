import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const DecryptedImage = ({ src, alt, width = "300px", height = "300px", className = "", style = {} }) => {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    
    // Set canvas dimensions to match container
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const chars = "0123456789ABCDEF@#$%&HELEN";
    
    let animationId;
    let frameCount = 0;

    // Theme colors
    let bgFade = 'rgba(10, 10, 10, 0.1)';
    let textColor = '#00BFFF';

    const updateColors = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        bgFade = 'rgba(255, 255, 255, 0.1)'; // Light trail for light mode
        textColor = '#007ACC'; // Darker blue for better contrast
      } else {
        bgFade = 'rgba(10, 10, 10, 0.1)'; // Dark trail for dark mode
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
      // Semi-transparent background to create trail effect
      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = textColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      frameCount++;
      
      // Stop the animation loop after it's fully revealed (handled by CSS transition delay)
      // We want the canvas to run for a bit, then we fade it out via CSS class/state
      if (frameCount < 300) { // Run for ~5 seconds max
        animationId = requestAnimationFrame(draw);
      }
    };

    animationId = requestAnimationFrame(draw);

    // Trigger reveal after 2 seconds
    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 2000);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(revealTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={className}
      style={{ 
        position: 'relative', 
        width: width, 
        height: height, 
        overflow: 'hidden', 
        borderRadius: '20px',
        boxShadow: isRevealed ? '0 0 30px rgba(0, 191, 255, 0.4)' : 'none',
        transition: 'box-shadow 1s ease, background 0.3s ease',
        background: 'var(--color-bg-secondary)', // Use theme variable instead of hardcoded black
        ...style
      }}
    >
      {/* The actual image */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: isRevealed ? 1 : 0,
          filter: isRevealed ? 'none' : 'grayscale(100%) blur(5px)',
          transform: isRevealed ? 'scale(1)' : 'scale(1.1)',
          transition: 'opacity 1.5s ease, filter 1.5s ease, transform 1.5s ease',
          borderRadius: 'inherit'
        }}
      />

      {/* The matrix overlay canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          opacity: isRevealed ? 0 : 1,
          transition: 'opacity 1.5s ease',
          pointerEvents: 'none',
          borderRadius: 'inherit'
        }}
      />
      
      {/* Decorative border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: '2px solid rgba(0, 191, 255, 0.3)',
        borderRadius: 'inherit',
        zIndex: 20,
        pointerEvents: 'none'
      }}></div>
    </div>
  );
};

export default DecryptedImage;