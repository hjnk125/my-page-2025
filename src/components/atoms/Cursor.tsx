import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import useActiveCursor from '@/hooks/useActiveCursor';

const Cursor = () => {
  const { isActive } = useActiveCursor();

  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const circle = useRef(null);
  const size = isActive ? 100 : 30;

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const moveCircle = (x: number, y: number) => {
    const opacity = x > 0 && y > 0 ? 1 : 0;

    gsap.set(circle.current, {
      opacity,
      x,
      y,
      xPercent: -50,
      yPercent: -50,
    });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };

    moveCircle(mouse.current.x, mouse.current.y);
  };

  useEffect(() => {
    animate();
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circle}
      style={{
        width: size,
        height: size,
        transition: `height 0.3s ease-out, width 0.3s ease-out`,
      }}
      className="pointer-events-none fixed top-0 left-0 z-100 rounded-full bg-black mix-blend-difference invert"
    />
  );
};

export default Cursor;
