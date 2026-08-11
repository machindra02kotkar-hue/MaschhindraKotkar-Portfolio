"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const roles = ["Entrepreneur", "Marketing Strategist", "Researcher", "Brand Builder", "Leader", "Problem Solver"];

export function ChapterToday() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.from(section.querySelectorAll(".today-label, .today-title, .role, .today-quote"), { y: 42, opacity: 0, stagger: .09, scrollTrigger: { trigger: section, start: "top 70%", end: "top 25%", scrub: true } });
    gsap.to(section.querySelectorAll(".orbit-dot"), { rotate: 360, transformOrigin: "50% 50%", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: root });

  return <section ref={root} className="today">
    <div className="orbit-dot one" aria-hidden="true" /><div className="orbit-dot two" aria-hidden="true" /><div className="orbit-dot three" aria-hidden="true" />
    <div className="today-inner"><span className="today-label">Today / The journey continues</span><h2 className="today-title">Every experience shaped how I solve problems today.</h2><div className="roles">{roles.map((role) => <span className="role" key={role}>{role}</span>)}</div><p className="today-quote">I don&apos;t just market products.<br /><em>I build solutions.</em></p></div>
  </section>;
}
