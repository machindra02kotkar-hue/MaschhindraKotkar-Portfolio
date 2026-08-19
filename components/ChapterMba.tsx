"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const industryGallery = "data:image/webp;base64,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";

export function ChapterMba() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.from(section.querySelectorAll(".mba-label, .mba-title, .mba-copy, .rank-card, .tour-gallery, .tour-stat, .mba-quote"), { y: 45, opacity: 0, stagger: .1, scrollTrigger: { trigger: section, start: "top 70%", end: "top 25%", scrub: true } });
    gsap.to(section.querySelector(".mba-pin"), { y: 22, rotate: 4, scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: root });

  return <section ref={root} className="mba-chapter">
    <div className="mba-pin" aria-hidden="true">✦</div>
    <div className="mba-intro"><span className="mba-label">Chapter 06 / 2024–2026</span><h2 className="mba-title">Learning<br />to Lead.</h2><p className="mba-copy">The classroom gave me frameworks. Team projects and responsibility taught me how to turn them into outcomes with people.</p></div>
    <div className="rank-grid"><article className="rank-card"><span>TEAM PROJECT</span><strong>1<sup>st</sup></strong><p>out of 7 teams</p></article><article className="rank-card"><span>TEAM PROJECT</span><strong>1<sup>st</sup></strong><p>out of 10 teams</p></article><div className="sticky-note">LEADERSHIP<br />IS A TEAM<br />SPORT</div></div>
    <div className="tour">
      <div><span className="mba-label">Beyond the classroom</span><h3>Planning every detail before the journey began.</h3><p>Leading an industrial tour meant coordinating people, permissions, travel, and real-world learning—not just arranging a trip.</p></div>
      <div>
        <div className="tour-gallery" style={{ marginBottom: "clamp(28px, 4vw, 46px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span className="mba-label">Industry visit / group moments</span>
            <span style={{ fontSize: "10px", letterSpacing: ".12em", color: "#7a65b8" }}>GUJARAT / 2025</span>
          </div>
          <div style={{ overflow: "hidden", border: "1px solid rgba(70,52,100,.22)", boxShadow: "8px 8px 0 rgba(70,52,100,.10)", background: "#f8f4eb" }}>
            <img src={industryGallery} alt="Group photos from the MBA industrial visit to Gujarat" style={{ display: "block", width: "100%", height: "clamp(145px, 16vw, 220px)", objectFit: "cover" }} />
          </div>
        </div>
        <div className="tour-stats"><div className="tour-stat"><strong>26</strong><span>Students</span></div><div className="tour-stat"><strong>4</strong><span>Industries</span></div><div className="tour-stat"><strong>6</strong><span>Days</span></div></div>
      </div>
    </div>
    <p className="mba-quote">Leadership is planning every detail<br /><em>before anyone notices it.</em></p>
  </section>;
}
