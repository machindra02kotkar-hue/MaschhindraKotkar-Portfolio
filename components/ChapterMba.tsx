"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const industryGallery = [
  { data: "/industry-data-final/1.txt", alt: "MBA group photo at Sainath Industries, Gujarat" },
  { data: "/industry-data-final/2.txt", alt: "MBA group photo at Kruti Industries, Ahmedabad, Gujarat" },
  { data: "/industry-data-final/3.txt", alt: "MBA group photo at Amul Butter Plant, Gandhinagar, Gujarat" },
  { data: "/industry-data-final/4.txt", alt: "MBA group photo at the Gujarat visit, Vadodara, Gujarat" },
];

export function ChapterMba() {
  const root = useRef<HTMLElement>(null);
  const [gallerySources, setGallerySources] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      industryGallery.map(async (image) => {
        const response = await fetch(image.data, { cache: "force-cache" });
        if (!response.ok) throw new Error(`Failed to load ${image.data}`);
        return `data:image/jpeg;base64,${(await response.text()).trim()}`;
      })
    ).then((sources) => {
      if (!cancelled) setGallerySources(sources);
    }).catch(() => {
      if (!cancelled) setGallerySources([]);
    });
    return () => { cancelled = true; };
  }, []);

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
          <div className="industry-photo-grid">
            {industryGallery.map((image, index) => (
              <figure key={image.data} className="industry-photo-card">
                {gallerySources[index] ? (
                  <img src={gallerySources[index]} alt={image.alt} loading="lazy" decoding="async" />
                ) : (
                  <div aria-hidden="true" style={{ width: "100%", aspectRatio: "16 / 9" }} />
                )}
              </figure>
            ))}
          </div>
        </div>
        <div className="tour-stats"><div className="tour-stat"><strong>26</strong><span>Students</span></div><div className="tour-stat"><strong>4</strong><span>Industries</span></div><div className="tour-stat"><strong>6</strong><span>Days</span></div></div>
      </div>
    </div>
    <p className="mba-quote">Leadership is planning every detail<br /><em>before anyone notices it.</em></p>
  </section>;
}
