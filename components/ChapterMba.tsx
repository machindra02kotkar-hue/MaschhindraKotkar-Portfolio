"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const industryGallery = [
  { position: "0% 0%", alt: "MBA group photo at Sainath Industries, Gujarat" },
  { position: "100% 0%", alt: "MBA group photo at Kruti Industries, Ahmedabad, Gujarat" },
  { position: "0% 100%", alt: "MBA group photo at Amul Butter Plant, Gandhinagar, Gujarat" },
  { position: "100% 100%", alt: "MBA group photo at the Gujarat visit, Vadodara, Gujarat" },
];

export function ChapterMba() {
  const root = useRef<HTMLElement>(null);
  const [gallerySource, setGallerySource] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    fetch("/industry-gallery.b64", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load industry gallery");
        return response.text();
      })
      .then((base64) => {
        if (!cancelled) setGallerySource(`data:image/jpeg;base64,${base64.trim()}`);
      })
      .catch(() => {
        if (!cancelled) setGallerySource("");
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
            {industryGallery.map((image) => (
              <figure key={image.alt} className="industry-photo-card" style={{ margin: 0, overflow: "hidden", aspectRatio: "16 / 9", background: "#eee9df", border: "1px solid rgba(39,31,63,.18)", boxShadow: "10px 10px 0 rgba(39,31,63,.10)" }}>
                {gallerySource ? (
                  <div
                    role="img"
                    aria-label={image.alt}
                    style={{ width: "100%", height: "100%", backgroundImage: `url(${gallerySource})`, backgroundRepeat: "no-repeat", backgroundSize: "200% 200%", backgroundPosition: image.position, backgroundColor: "#eee9df" }}
                  />
                ) : (
                  <div aria-hidden="true" style={{ width: "100%", height: "100%" }} />
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
