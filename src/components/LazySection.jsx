import React, { useEffect, useRef, useState } from "react";

export const LazySection = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.3,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: "300px", overflow: "hidden" }}>
      <div
        className="transform transition-all duration-500 opacity"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(50px)",
          //transition: "opacity 0.8s ease-out transform 0.8s ease-out ",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};
