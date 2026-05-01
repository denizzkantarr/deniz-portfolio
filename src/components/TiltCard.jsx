import { useRef } from 'react';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const shine = shineRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 65%)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const shine = shineRef.current;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    shine.style.background = 'transparent';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt ${className}`}
      style={{ transition: 'transform 0.18s ease', willChange: 'transform' }}
    >
      <div ref={shineRef} className="card-shine" />
      {children}
    </div>
  );
};

export default TiltCard;
