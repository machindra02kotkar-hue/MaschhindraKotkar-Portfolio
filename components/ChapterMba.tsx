use client;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const industryGallery = "data:image/webp;base64,UklGRv6RAQBXRUJQVlA4";

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
