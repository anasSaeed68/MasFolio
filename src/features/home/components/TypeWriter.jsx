import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const TypeWriter = ({
  text,
  tag = "p",
  className = "",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    if (!element) return;

    const state = {
      progress: 0,
    };

    const ctx = gsap.context(() => {
      gsap.to(state, {
        progress: text.length,

        duration: text.length * 0.025,

        ease: "none",

        onUpdate: () => {
          const count = Math.floor(state.progress);

          element.textContent = text.slice(0, count);
        },
      });
    }, element);

    return () => {
      ctx.revert();
    };
  }, [text]);

  const Tag = tag;

  return (
    <Tag className={`${className} relative`}>
      <span ref={textRef} />

      <span
        className="
          inline-block
          font-extrabold
          text-xl
          animate-bounce
          border-b-6
          border-b-white
          rounded-2xl
          bg-green-400
          text-transparent
        "
      >
        |
      </span>
    </Tag>
  );
};