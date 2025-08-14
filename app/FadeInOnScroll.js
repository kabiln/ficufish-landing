

import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

// A reusable component to apply a fade-in effect on scroll
const FadeInOnScroll = ({ children, className = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(entries => {
      // Check if the element is intersecting (i.e., in the viewport)
      if (entries[0].isIntersecting) {
        setVisible(true);
        // We only want to observe once, so we can stop observing after the first intersection
        observer.unobserve(domRef.current);
      }
    });

    // Start observing the current DOM node
    observer.observe(domRef.current);

    // Clean up the observer when the component unmounts
    return () => observer.unobserve(domRef.current);
  }, []); // Empty dependency array ensures this effect runs only once

  // Tailwind CSS classes for the fade-in effect
  // 'opacity-0 translate-y-10' is the starting state (hidden, slightly below position)
  // 'opacity-100 translate-y-0' is the ending state (visible, original position)
  // 'transition-all duration-1000 ease-out' defines the animation properties
  const animationClasses = `
    transition-all duration-1000 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    ${className}
  `;

  return (
    <div
      className={animationClasses}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;