"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const insights = ["Cleanliness", "Peace", "Verified reviews", "Trust"];

export function ChapterWildHeart() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const section = root.current;
    if (!section) return;
    gsap.from(section.querySelectorAll(".wild-label, .wild-title, .wild-copy, .survey-card, .insight"), { y: 45, opacity: 0, stagger: .1, scrollTrigger: { trigger: section, start: "top 70%", end: "top 25%", scrub: true } });
    gsap.fromTo(section.querySelectorAll(".chart-bar"), { scaleY: .15 }, { scaleY: 1, stagger: .12, transformOrigin: "bottom", scrollTrigger: { trigger: section, start: "top 60%", end: "top 25%", scrub: true } });

    // Count the survey response up from 0 when it enters the viewport.
    section.querySelectorAll<HTMLElement>(".wild-counter").forEach((counter) => {
      const target = Number(counter.dataset.value || 0);
      const progress = { value: 0 };

      gsap.to(progress, {
        value: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = String(Math.round(progress.value));
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 88%",
          once: true,
        },
      });
    });
  }, { scope: root });

  return <section ref={root} className="wild-heart">
    <div className="wild-grid"><div><span className="wild-label">Chapter 07 / 2026</span><h2 className="wild-title">Understanding<br />People.</h2><p className="wild-copy">For WildHeart Stays, research became the starting point: listen closely, see the patterns, and let real customer expectations shape the strategy.</p></div><div className="survey-card"><span>SURVEY RESPONSES</span><strong className="wild-counter" data-value="220">0</strong><div className="chart"><i className="chart-bar" /><i className="chart-bar" /><i className="chart-bar" /><i className="chart-bar" /><i className="chart-bar" /><i className="chart-bar" /></div><small>Customer insight study</small></div></div>
    <div className="findings"><div><span className="wild-label">What the data revealed</span><h3>The best marketing decisions begin with listening.</h3></div><div className="insights">{insights.map((insight, index) => <div className="insight" key={insight}><b>0{index + 1}</b><span>{insight}</span><i>✓</i></div>)}</div></div>
    <p className="wild-quote">Data doesn&apos;t replace intuition.<br /><em>It sharpens it.</em></p>
  </section>;
}
