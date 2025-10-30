import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FadeInSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
