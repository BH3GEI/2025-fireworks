import React, { useEffect, useRef } from 'react';

interface FireworkParticle {
  x: number;
  y: number;
  color: string;
  velocity: { x: number; y: number };
  alpha: number;
}

const Firework: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: FireworkParticle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createFirework = (x: number, y: number) => {
      const colors = ['#ff0', '#f0f', '#0ff', '#ff4444', '#44ff44'];
      const particleCount = 100;

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = 2 + Math.random() * 3;
        particles.push({
          x,
          y,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed,
          },
          alpha: 1,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        particle.velocity.y += 0.05; // gravity
        particle.alpha -= 0.006;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.alpha})`;
        ctx.fill();

        if (particle.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      if (Math.random() < 0.05) {
        createFirework(
          Math.random() * canvas.width,
          canvas.height - Math.random() * canvas.height * 0.5
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const hexToRgb = (hex: string): string => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
            result[3],
            16
          )}`
        : '255, 255, 255';
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default Firework;