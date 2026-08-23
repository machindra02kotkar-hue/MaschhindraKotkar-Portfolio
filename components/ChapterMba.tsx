"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Load the original JPEGs directly from the public GitHub repository.
const GITHUB_IMAGE_BASE =
  "https://raw.githubusercontent.com/machindra02kotkar-hue/MaschhindraKotkar-Portfolio/main/public/industry";

const galleryFiles = [
  { src: `${GITHUB_IMAGE_BASE}/Industry1.jpeg`, alt: "MBA group photo at Sainath Industries, Gujarat" },
  { src: `${GITHUB_IMAGE_BASE}/Industry2.jpeg`, alt: "MBA group photo at Kruti Industries, Ahmedabad, Gujarat" },
  { src: `${GITHUB_IMAGE_BASE}/Industry3.jpeg`, alt: "MBA group photo at Amul Butter Plant, Gandhinagar, Gujarat" },
  { src: `${GITHUB_IMAGE_BASE}/Industry4.jpeg`, alt: "MBA group photo at Aatapi Park, Vadodara, Gujarat" },
];

const rankSupStyle = {
  display: "inline-block",
  marginLeft: "0.14em",
  fontSize: "0.42em",
  lineHeight: 1,
  verticalAlign: "super",
  fontWeight: 700,
  letterSpacing: "0.03em",
};

const projectNameStyle = {
  marginTop: "14px",
  paddingTop: "12px",
  borderTop: "1px solid rgba(105, 77, 180, .35)",
  color: "#6b4bb5",
};

export function ChapterMba() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.from(section.querySelectorAll(".mba-label, .mba-title, .mba-copy, .rank-card, .tour-gallery, .tour-stat, .mba-quote"), {
      y: 45,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: { trigger: section, start: "top 70%", end: "top 25%", scrub: true },
    });
    gsap.to(section.querySelector(".mba-pin"), {
      y: 22,
      rotate: 4,
      scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
    });
  }, { scope: root });

  return <section ref={root} className="mba-chapter">
    <div className="mba-pin" aria-hidden="true">✦</div>
    <div className="mba-intro">
      <span className="mba-label">Chapter 06 / 2024–2026</span>
      <h2 className="mba-title">Learning<br />to Lead.</h2>
      <p className="mba-copy">The classroom gave me frameworks. Team projects and responsibility taught me how to turn them into outcomes with people.</p>
    </div>

    <div className="rank-grid">
      <article className="rank-card">
        <span>TEAM PROJECT</span>
        <strong>1<sup style={rankSupStyle}>st</sup></strong>
        <p>out of 7 teams</p>
        <p style={projectNameStyle}>in Data Analysis Project</p>
      </article>

      <article className="rank-card">
        <span>TEAM PROJECT</span>
        <strong>1<sup style={rankSupStyle}>st</sup></strong>
        <p>out of 10 teams</p>
        <p style={projectNameStyle}>in Marketing Project</p>
      </article>

      <div className="sticky-note">LEADERSHIP<br />IS A TEAM<br />SPORT</div>
    </div>

    <div className="tour">
      <div>
        <span className="mba-label">Beyond the classroom</span>
        <h3>Planning every detail before the journey began.</h3>
        <p>Leading an industrial tour meant coordinating people, permissions, travel, and real-world learning—not just arranging a trip.</p>
      </div>

      <div className="tour-gallery-column">
        <div className="tour-gallery" style={{ marginBottom: "clamp(28px, 4vw, 46px)" }}>
          <div className="tour-gallery-heading">
            <span className="mba-label">Industry visit / group moments</span>
            <span>GUJARAT / 2025</span>
          </div>

          <div className="industry-photo-grid">
            {galleryFiles.map((image) => (
              <figure key={image.src} className="industry-photo-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="tour-stats">
          <div className="tour-stat"><strong>26</strong><span>Students</span></div>
          <div className="tour-stat"><strong>4</strong><span>Industries</span></div>
          <div className="tour-stat"><strong>6</strong><span>Days</span></div>
        </div>
      </div>
    </div>

    <p className="mba-quote">Leadership is planning every detail<br /><em>before anyone notices it.</em></p>
  </section>;
}
