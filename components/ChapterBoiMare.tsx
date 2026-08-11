"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const memes = ["MAKE THEM PAUSE", "MAKE THEM SMILE", "MAKE THEM SHARE"];

export function ChapterBoiMare() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.from(section.querySelectorAll(".boi-label, .boi-title, .boi-copy, .meme-card, .boi-stat"), {
      y: 60, opacity: 0, stagger: 0.1,
      scrollTrigger: { trigger: section, start: "top 70%", end: "top 25%", scrub: true },
    });
    gsap.to(section.querySelectorAll(".meme-card"), {
      rotate: (index) => index % 2 ? 5 : -5,
      scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
    });
  }, { scope: root });

  return <section ref={root} className="boi-mare">
    <div className="boi-intro">
      <div><span className="boi-label">Chapter 03 / 2020</span><h2 className="boi-title">The Art of<br />Making People Smile.</h2><p className="boi-copy">While building Local Food Mart, I learned that businesses need more than products. They need attention—content people actually want to stop for, enjoy, and share.</p><a className="boi-instagram" href="https://www.instagram.com/boi_mare?igsh=Nml6OW1yM3JncHdz" target="_blank" rel="noreferrer">Visit @boi_mare on Instagram ↗</a></div>
      <div className="meme-stack">{memes.map((meme, index) => <article className="meme-card" key={meme}><span>BOI_MARE</span><strong>{meme}</strong><i>{index === 0 ? "✦" : index === 1 ? "☺" : "↗"}</i></article>)}</div>
    </div>
      <div className="boi-result"><p>With two friends, I built a meme community around humor and brand storytelling.</p><img className="boi-logo" src="/boi-mare-logo.png" alt="Boi Mare logo" /><div className="boi-stat"><strong>5,000+</strong><span>Followers reached</span></div><p className="boi-lesson">Marketing isn&apos;t only about selling.<br /><em>It&apos;s about making people stop scrolling.</em></p></div>
  </section>;
}
