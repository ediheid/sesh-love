import { useEffect, useRef, useState } from 'react';

interface LoadInProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

const LoadIn = ({ children, index = 0, className = '' }: LoadInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'load-in' : ''} ${className}`}
      style={{ '--i': index } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default LoadIn;
