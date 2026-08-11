"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Chapter2020() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.fromTo(section.querySelector(".year"), { xPercent: 20, opacity: 0 }, { xPercent: 0, opacity: 1, scrollTrigger: { trigger: section, start: "top 78%", end: "top 25%", scrub: true } });
    gsap.from(section.querySelectorAll(".chapter-label, .chapter-story h2, .chapter-story p"), { y: 40, opacity: 0, stagger: .14, scrollTrigger: { trigger: section, start: "top 64%", end: "top 20%", scrub: true } });
    gsap.fromTo(section.querySelector(".chapter-question"), { y: 80, opacity: 0 }, { y: 0, opacity: 1, scrollTrigger: { trigger: section, start: "38% center", end: "65% center", scrub: true } });
    gsap.to(section.querySelector(".chapter-orbit"), { rotate: 180, scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: root });
  return <section ref={root} className="chapter"><div className="chapter-sticky"><span className="year">2020</span><div className="chapter-story"><span className="chapter-label">Chapter 01 / The beginning</span><h2>When the World Stopped.</h2><p>While pursuing my B.Com, I watched local businesses lose their customers—not because they lacked good products, but because people could no longer find them.</p><p className="chapter-question">What if social media could become <em>their marketplace?</em></p></div><div className="chapter-orbit" /></div></section>;
}
