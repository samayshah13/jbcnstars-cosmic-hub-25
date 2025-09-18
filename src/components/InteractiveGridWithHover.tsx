import React, { useEffect, useRef, useState } from 'react';

const InteractiveGridWithHover = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            hsl(var(--primary) / ${isHovering ? '0.15' : '0'}) 0%, 
            hsl(var(--primary) / ${isHovering ? '0.08' : '0'}) 20%, 
            transparent 50%),
          linear-gradient(to right, hsl(var(--primary) / 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary) / 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px, 50px 50px, 50px 50px',
        animation: 'grid-move 20s linear infinite',
        transition: 'background 0.3s ease'
      }}
    >
      {/* Floating glow orb that follows mouse */}
      {isHovering && (
        <div
          className="absolute pointer-events-none z-10 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--accent) / 0.1) 30%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(20px)',
            transform: 'scale(1.2)',
          }}
        />
      )}
    </div>
  );
};

export default InteractiveGridWithHover;