"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "./GoaProofOfWork.module.css";

gsap.registerPlugin(ScrollTrigger);

const campaigns = [
  { number: "01", title: "Generator Campaign", result: "₹10 lakh+ in sales within three months of joining.", href: "https://www.facebook.com/100067240053517/posts/588838653367465/?app=fbl", mark: "₹10L+", platform: "FACEBOOK", accent: "SALES IMPACT", featured: true },
  { number: "02", title: "Sher Tiller — Lead Campaign", result: "250+ leads in the first run. The response became more than the team could immediately follow up with, so I took the campaign down and relaunched it after one week — generating 150+ additional leads.", href: "https://www.facebook.com/goatractors.in/videos/672304788044890/?app=fbl", mark: "250+", platform: "FACEBOOK", accent: "LEAD GENERATION" },
  { number: "03", title: "Scratch Card Campaign", result: "Planned and executed for South Maharashtra; the promotion successfully drove sales.", href: "https://www.facebook.com/goatractors.in/videos/259687266402530/?app=fbl", mark: "SALES", platform: "FACEBOOK", accent: "SOUTH MAHARASHTRA" },
  { number: "04", title: "Sher + STIHL Tiller Campaign", result: "Planned and executed for South Maharashtra; generated a strong response and drove sales.", href: "https://www.facebook.com/goatractors.in/videos/1018698946663863/?app=fbl", mark: "SALES", platform: "FACEBOOK", accent: "SOUTH MAHARASHTRA" },
  { number: "05", title: "Sher Tiller + Fogger — Goa", result: "Two Goa campaigns planned and executed by me: one increased Sher Tiller sales; the other combined fogger awareness with sales and helped increase fogger sales.", href: "https://www.facebook.com/share/v/14mSdxUUUhz/", href2: "https://www.facebook.com/share/v/1BbmxbNNGt/", mark: "GOA", platform: "FACEBOOK × 2", accent: "AWARENESS + SALES" },
  { number: "06", title: "Influencer Collaboration", result: "Planned and executed creator collaboration that delivered 250K+ views and 40% higher views than competitors.", href: "https://www.instagram.com/reel/DK7GdxQSfra/?igsh=MWtubWF3ZHBoNzh4cw==", mark: "250K+", platform: "INSTAGRAM", accent: "40% HIGHER" },
];

const impact = [
  ["₹10L+", "Sales from the generator campaign"],
  ["250+", "Leads from the first Sher Tiller run"],
  ["150+", "Additional leads after the relaunch"],
  ["40%", "Higher views than competitors"],
];

export function GoaProofOfWork() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = root.current;
    if (!section) return;

    gsap.from(section.querySelectorAll(`.${styles.intro} > *`), {
      y: 55,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 78%", toggleActions: "play none none reverse" },
    });

    gsap.from(section.querySelectorAll(`.${styles.impactCard}`), {
      y: 90,
      opacity: 0,
      scale: 0.92,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: section.querySelector(`.${styles.impact}`), start: "top 82%", toggleActions: "play none none reverse" },
    });

    const cards = section.querySelectorAll(`.${styles.card}`);
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 90,
        rotate: index % 2 === 0 ? -2 : 2,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
      });

      const visual = card.querySelector(`.${styles.mediaInner}`);
      if (visual) {
        gsap.to(visual, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    });

    gsap.fromTo(section.querySelector(`.${styles.revenue}`),
      { y: 90, opacity: 0, scale: 0.94 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: section.querySelector(`.${styles.revenue}`), start: "top 82%", toggleActions: "play none none reverse" } }
    );

    gsap.to(section.querySelector(`.${styles.scan}`), { yPercent: 900, duration: 2.8, repeat: -1, ease: "none" });
    gsap.to(section.querySelector(`.${styles.orbit}`), { rotate: 360, duration: 18, repeat: -1, ease: "none" });
  }, { scope: root });

  return (
    <div ref={root} className={styles.proof}>
      <div className={styles.intro}>
        <span className={styles.kicker}>Proof of Work / The campaigns behind the results</span>
        <h3 className={styles.title}>The numbers tell one story.<br /><em>The work tells the rest.</em></h3>
        <p className={styles.copy}>Every campaign below was planned and executed by me. These are the campaigns behind the results — not just claims on a portfolio.</p>
      </div>

      <div className={styles.impact}>
        <div className={styles.impactHead}><span>IMPACT / AT A GLANCE</span><i>SCROLL TO EXPLORE</i></div>
        <div className={styles.impactGrid}>
          {impact.map(([number, label]) => <div className={styles.impactCard} key={number}><strong>{number}</strong><span>{label}</span></div>)}
        </div>
      </div>

      <div className={styles.signal} aria-hidden="true"><span /><span /><span /><b>CAMPAIGN ARCHIVE</b></div>

      <div className={styles.grid}>
        {campaigns.map((campaign) => (
          <article className={`${styles.card} ${campaign.featured ? styles.featured : ""}`} key={campaign.number}>
            <div className={styles.media}>
              <div className={styles.mediaInner}>
                <span className={styles.platform}>{campaign.platform}</span>
                <span className={styles.cardNumber}>{campaign.number}</span>
                <div className={styles.visualLines}><i /><i /><i /><i /></div>
                <div className={styles.bigMark}>{campaign.mark}</div>
                <span className={styles.accent}>{campaign.accent}</span>
              </div>
              <span className={styles.scan} />
              <span className={styles.orbit} />
            </div>
            <div className={styles.body}>
              <span className={styles.label}>Campaign {campaign.number}</span>
              <h4>{campaign.title}</h4>
              <p><strong>Planned &amp; executed by me.</strong> {campaign.result}</p>
              <div className={styles.proofRow}>
                <a className={styles.link} href={campaign.href} target="_blank" rel="noreferrer">View campaign proof ↗</a>
                {campaign.href2 && <a className={styles.link} href={campaign.href2} target="_blank" rel="noreferrer">Second proof ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.revenue}>
        <div className={styles.revenueCopy}>
          <span className={styles.revenueLabel}>Business Growth / During My Time at Goa Tractors</span>
          <strong>₹8 Cr <em>→</em> ₹12 Cr</strong>
          <p>During my time at Goa Tractors, the company’s revenue grew from ₹8 crore to ₹12 crore.</p>
        </div>
        <div className={styles.revenueOrb} aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}
