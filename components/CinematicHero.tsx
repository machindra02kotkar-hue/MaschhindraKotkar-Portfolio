"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function CinematicHero() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline.from(".hero-name span", { yPercent: 125, opacity: 0, duration: 1.15, stagger: 0.07 })
      .from(".hero-subtitle, .hero-copy", { y: 15, opacity: 0, duration: .7, stagger: .12 }, "-=.45")
      .from(".scroll-cue", { opacity: 0, duration: .45 }, "-=.1")
      .to(".scroll-line", { scaleY: .25, yoyo: true, repeat: -1, duration: .8, ease: "sine.inOut" });
  }, { scope: root });

  return (
    <section ref={root} className="hero" id="top" style={{ background: "#071742" }}>
      <div
        className="stars"
        style={{
          opacity: 0.95,
          animationDuration: "4s",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 0,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "760px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(45, 105, 220, 0.24) 0%, rgba(45, 105, 220, 0.16) 34%, rgba(45, 105, 220, 0.07) 58%, transparent 78%)",
          filter: "blur(18px)",
          pointerEvents: "none",
        }}
      />
      <div className="hero-inner">
        <span className="eyebrow">A personal journey / 2026</span>
        <h1 className="hero-name" aria-label="Maschhindra">
          {"MASCHHINDRA".split("").map((letter, i) => <span key={i}>{letter}</span>)}
        </h1>
        <p className="hero-subtitle">The Story of a Problem Solver</p>
        <p className="hero-copy">Every journey starts with a single decision. Mine started by choosing to solve a problem instead of ignoring it.</p>
      </div>
      <div className="scroll-cue">
        <span>Scroll to begin</span>
        <i className="scroll-line" />
      </div>
    </section>
  );
}
