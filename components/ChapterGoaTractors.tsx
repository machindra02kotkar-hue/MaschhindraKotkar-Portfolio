"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const results = [
  ["₹10L", "Sales from a campaign in three months"],
  ["250+", "Sher Tiller campaign leads"],
  ["150+", "Additional leads after relaunch"],
  ["40%", "Higher engagement through creator content"],
];

export function ChapterGoaTractors() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.from(section.querySelectorAll(".goa-label, .goa-title, .goa-copy, .campaign-card, .result-card"), { y: 50, opacity: 0, stagger: .1, scrollTrigger: { trigger: section, start: "top 72%", end: "top 28%", scrub: true } });
    gsap.to(section.querySelector(".tractor-wheel"), { rotate: 360, scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: root });

  return <section ref={root} className="goa-tractors">
    <div className="tractor-wheel" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
    <div className="goa-top"><span className="goa-label">Chapter 05 / 2022–2024</span><h2 className="goa-title">Turning Strategy<br />Into Results.</h2><p className="goa-copy">At Goa Tractors, ideas met the real world: audiences, budgets, campaigns, leads, sales, and accountability.</p></div>
    <div className="campaigns"><article className="campaign-card"><span>01 / Generator campaign</span><h3>My first major marketing campaign.</h3><p>From campaign concept to execution, the work proved that strategy becomes meaningful when it creates business impact.</p></article><article className="campaign-card"><span>02 / Sher Tiller</span><h3>The campaign became so successful, we had to pause it.</h3><p>Demand outpaced the team&apos;s ability to respond—then the campaign returned and generated more leads.</p></article><article className="campaign-card"><span>03 / Creator campaign</span><h3>Content designed to perform.</h3><p>Influencer-led communication helped build stronger engagement than competing content.</p></article></div>
    <div className="results">{results.map(([number, label]) => <div className="result-card" key={number}><strong>{number}</strong><span>{label}</span></div>)}</div>
    <p className="goa-quote">Marketing isn&apos;t about creating content.<br /><em>It&apos;s about creating impact.</em></p>
  </section>;
}
