"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "./GoaProofOfWork.module.css";

gsap.registerPlugin(ScrollTrigger);

type Campaign = {
  number: string;
  title: string;
  category: string;
  result: string;
  href: string;
  href2?: string;
  embed?: "facebook-post" | "facebook-video" | "instagram";
  embed2?: "facebook-video";
  mark: string;
};

const campaigns: Campaign[] = [
  {
    number: "01",
    title: "Generator Campaign",
    category: "SALES IMPACT",
    result: "Planned & executed by me. Generated ₹10 lakh+ in sales within three months of joining Goa Tractors.",
    href: "https://www.facebook.com/100067240053517/posts/588838653367465/",
    embed: "facebook-post",
    mark: "₹10L+",
  },
  {
    number: "02",
    title: "Sher Tiller — Lead Campaign",
    category: "LEAD GENERATION",
    result: "Planned & executed by me. The first run generated 250+ leads. Response became more than the team could immediately follow up with, so I took it down. After one week, I relaunched it and generated 150+ additional leads.",
    href: "https://www.facebook.com/goatractors.in/videos/672304788044890/",
    embed: "facebook-video",
    mark: "250+",
  },
  {
    number: "03",
    title: "South Maharashtra Campaigns",
    category: "SALES IMPACT",
    result: "Scratch Card + Sher / STIHL Tiller campaigns planned and executed by me for South Maharashtra. Both campaigns received a strong response and actually drove sales.",
    href: "https://www.facebook.com/goatractors.in/videos/259687266402530/",
    href2: "https://www.facebook.com/goatractors.in/videos/1018698946663863/",
    embed: "facebook-video",
    embed2: "facebook-video",
    mark: "SALES",
  },
  {
    number: "04",
    title: "Goa — Sher Tiller + Fogger",
    category: "AWARENESS + SALES",
    result: "Two Goa campaigns planned and executed by me. The Sher Tiller campaign increased sales, while the Fogger campaign built awareness and helped increase fogger sales.",
    href: "https://www.facebook.com/share/v/14mSdxUUUhz/",
    href2: "https://www.facebook.com/share/v/1BbmxbNNGt/",
    embed: "facebook-video",
    embed2: "facebook-video",
    mark: "GOA",
  },
  {
    number: "05",
    title: "Influencer Collaboration",
    category: "CREATOR CONTENT",
    result: "Planned and executed creator collaboration that delivered 250K+ views and 40% higher views than competitors.",
    href: "https://www.instagram.com/reel/DK7GdxQSfra/",
    embed: "instagram",
    mark: "250K+",
  },
];

const impact = [
  ["₹10L+", "Sales from the generator campaign"],
  ["250+", "Leads from the first Sher Tiller run"],
  ["150+", "Additional leads after the relaunch"],
  ["40%", "Higher views than competitors"],
];

function CampaignEmbed({ campaign }: { campaign: Campaign }) {
  const renderEmbed = (kind: Campaign["embed"], href: string) => {
    if (kind === "instagram") {
      const match = href.match(/instagram\.com\/reel\/([^/]+)/);
      const shortcode = match?.[1];
      if (!shortcode) return null;
      return (
        <iframe
          className={styles.socialFrame}
          src={`https://www.instagram.com/reel/${shortcode}/embed/`}
          title={`${campaign.title} Instagram proof`}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }

    const plugin = kind === "facebook-post" ? "post" : "video";
    const embedUrl = `https://www.facebook.com/plugins/${plugin}.php?href=${encodeURIComponent(href)}&show_text=false&width=520`;
    return (
      <iframe
        className={`${styles.socialFrame} ${plugin === "post" ? styles.postFrame : styles.videoFrame}`}
        src={embedUrl}
        title={`${campaign.title} Facebook proof`}
        loading="lazy"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  };

  return (
    <div className={styles.proofMedia}>
      <div className={styles.mediaGlow} />
      <div className={styles.mediaGrid} />
      <div className={styles.mediaNumber}>{campaign.number}</div>
      <div className={styles.mediaResult}>{campaign.mark}</div>
      <div className={styles.embedViewport}>{renderEmbed(campaign.embed, campaign.href)}</div>
      {campaign.embed2 && campaign.href2 && (
        <div className={styles.secondaryEmbed}>{renderEmbed(campaign.embed2, campaign.href2)}</div>
      )}
      <span className={styles.mediaLabel}>PROOF OF WORK</span>
    </div>
  );
}

export function GoaProofOfWork() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = root.current;
    if (!section) return;

    gsap.from(section.querySelectorAll(`.${styles.intro} > *`), {
      y: 50,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 78%", toggleActions: "play none none reverse" },
    });

    gsap.from(section.querySelector(`.${styles.revenue}`), {
      x: 70,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: section.querySelector(`.${styles.topGrid}`), start: "top 80%", toggleActions: "play none none reverse" },
    });

    gsap.from(section.querySelectorAll(`.${styles.card}`), {
      y: 90,
      opacity: 0,
      rotate: (index: number) => (index % 2 === 0 ? -1.2 : 1.2),
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: section.querySelector(`.${styles.grid}`), start: "top 84%", toggleActions: "play none none reverse" },
    });

    gsap.from(section.querySelectorAll(`.${styles.impactItem}`), {
      y: 55,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: section.querySelector(`.${styles.impact}`), start: "top 86%", toggleActions: "play none none reverse" },
    });

    section.querySelectorAll(`.${styles.card}`).forEach((card) => {
      const visual = card.querySelector(`.${styles.proofMedia}`);
      if (visual) {
        gsap.to(visual, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    });
  }, { scope: root });

  return (
    <div ref={root} className={styles.proof}>
      <div className={styles.topGrid}>
        <div className={styles.intro}>
          <span className={styles.kicker}>Proof of Work / The campaigns behind the results</span>
          <h3 className={styles.title}>The work tells the rest.</h3>
          <p className={styles.copy}>Every campaign below was planned and executed by me. These are the campaigns behind the results — not just claims on a portfolio.</p>
        </div>

        <div className={styles.revenue}>
          <span className={styles.revenueLabel}>Business Growth / During My Time at Goa Tractors</span>
          <strong>₹8 Cr <em>→</em> ₹12 Cr</strong>
          <p>During my time at Goa Tractors, the company’s revenue grew from ₹8 crore to ₹12 crore.</p>
          <div className={styles.revenueGraph} aria-hidden="true"><span /><i /><b /><em /></div>
        </div>
      </div>

      <div className={styles.archiveHeader}>
        <span className={styles.archiveLine} />
        <span>CAMPAIGN ARCHIVE</span>
        <span className={styles.archiveLine} />
      </div>

      <div className={styles.grid}>
        {campaigns.map((campaign) => (
          <article className={styles.card} key={campaign.number}>
            <CampaignEmbed campaign={campaign} />
            <div className={styles.body}>
              <div className={styles.cardTop}><span>{campaign.number}</span><span>{campaign.category}</span></div>
              <h4>{campaign.title}</h4>
              <p>{campaign.result}</p>
              <div className={styles.proofRow}>
                <a className={styles.link} href={campaign.href} target="_blank" rel="noreferrer">View campaign proof ↗</a>
                {campaign.href2 && <a className={styles.link} href={campaign.href2} target="_blank" rel="noreferrer">Second proof ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.impact}>
        <div className={styles.impactIntro}><span>IMPACT</span><strong>AT A GLANCE</strong></div>
        {impact.map(([number, label], index) => (
          <div className={styles.impactItem} key={number}>
            <span className={styles.impactIndex}>0{index + 1}</span>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
