"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ChapterTopTrip() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.from(section.querySelectorAll(".trip-label, .trip-title, .trip-copy, .trip-ui, .trip-reflection"), { y: 48, opacity: 0, stagger: .12, scrollTrigger: { trigger: section, start: "top 70%", end: "top 25%", scrub: true } });
    gsap.to(section.querySelectorAll(".route-dot"), { x: 24, yoyo: true, repeat: -1, stagger: .3, duration: 1.3, ease: "sine.inOut" });
  }, { scope: root });

  return <section ref={root} className="tip-trip">
    <div className="trip-grid"><div><span className="trip-label">Chapter 04 / Dreaming beyond the map</span><h2 className="trip-title">What if AI could plan your perfect vacation?</h2><p className="trip-copy">TopTrip.in was an intelligent travel platform we began building to generate personalized journeys around each traveller&apos;s preferences.</p><div className="trip-tags"><span>Machine Learning</span><span>Personalised Trips</span><span>Travel Planning</span></div></div><div className="trip-ui" aria-label="TopTrip travel planning interface"><div className="trip-ui-top"><span className="toptrip-brand"><img src="/toptrip-logo.png" alt="TopTrip logo" />TOPTRIP.IN</span><i>AI trip builder</i></div><div className="route"><div className="route-dot" /><div className="route-line" /><div className="route-dot" /><div className="route-line" /><div className="route-dot" /></div><div className="trip-place"><strong>GOA</strong><span>3 nights · beach stay</span></div><div className="trip-place"><strong>UDAIPUR</strong><span>2 nights · city discovery</span></div><div className="trip-place"><strong>JAIPUR</strong><span>2 nights · local culture</span></div></div></div>
    <div className="trip-reflection"><span>THE PIVOT</span><p>Then AI changed everything. The future arrived faster than expected.</p><h3>Innovation also means knowing <em>when to pivot.</em></h3></div>
  </section>;
}
