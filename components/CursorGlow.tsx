"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let frame = 0;
    let targetX = -200;
    let targetY = -200;
    let currentX = targetX;
    let currentY = targetY;

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "190px",
        height: "190px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 999,
        opacity: 0.9,
        background:
          "radial-gradient(circle, rgba(125,211,255,.20) 0%, rgba(125,211,255,.11) 28%, rgba(125,211,255,.045) 52%, transparent 72%)",
        filter: "blur(8px)",
        mixBlendMode: "screen",
      }}
    />
  );
}
