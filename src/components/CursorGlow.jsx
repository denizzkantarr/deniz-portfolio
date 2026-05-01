import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const move = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div ref={ref} className="cursor-glow" />;
};

export default CursorGlow;
