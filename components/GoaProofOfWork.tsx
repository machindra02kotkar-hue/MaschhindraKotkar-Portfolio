import React from "react";

const campaigns = [
  { number: "01", title: "Generator Campaign", role: "Planned & executed by me", result: "₹10 lakh+ in sales within three months of joining", href: "https://www.facebook.com/100067240053517/posts/588838653367465/?app=fbl", mark: "₹" },
  { number: "02", title: "Sher Tiller — Lead Campaign", role: "Planned & executed by me", result: "250+ leads in the first run. The response volume exceeded the team's immediate follow-up capacity, so I paused the campaign and relaunched it after one week — generating 150+ additional leads.", href: "https://www.facebook.com/goatractors.in/videos/672304788044890/?app=fbl", mark: "250+" },
  { number: "03", title: "Scratch Card Campaign", role: "Planned & executed by me", result: "A promotional campaign for South Maharashtra that drove sales.", href: "https://www.facebook.com/goatractors.in/videos/259687266402530/?app=fbl", mark: "03" },
  { number: "04", title: "Sher + STIHL Tiller Campaign", role: "Planned & executed by me", result: "A South Maharashtra campaign that generated a strong response and drove sales.", href: "https://www.facebook.com/goatractors.in/videos/1018698946663863/?app=fbl", mark: "04" },
  { number: "05", title: "Sher Tiller — Goa", role: "Planned & executed by me", result: "A Goa-focused campaign that generated strong response and increased sales.", href: "https://www.facebook.com/share/v/14mSdxUUUhz/", mark: "GOA" },
  { number: "06", title: "Fogger Campaign — Goa", role: "Planned & executed by me", result: "Combined product awareness with sales promotion, helping increase fogger sales in Goa.", href: "https://www.facebook.com/share/v/1BbmxbNNGt/", mark: "GOA" },
  { number: "07", title: "Influencer Collaboration", role: "Planned & executed by me", result: "250K+ views and 40% higher views than competitors.", href: "https://www.instagram.com/reel/DK7GdxQSfra/?igsh=MWtubWF3ZHBoNzh4cw==", mark: "250K+" },
];

export function GoaProofOfWork() {
  return <div className="goa-proof">
    <div className="goa-proof-intro">
      <span className="goa-proof-kicker">Proof of Work</span>
      <h3 className="goa-proof-title">The numbers tell one story.<br /><em>The work tells the rest.</em></h3>
      <p className="goa-proof-copy">Every campaign below was planned and executed by me. These are the campaigns behind the results—not just claims on a portfolio.</p>
    </div>
    <div className="goa-proof-grid">
      {campaigns.map((campaign) => <article className="goa-proof-card" key={campaign.number}>
        <div className="goa-proof-media"><div className="goa-proof-media-mark">{campaign.mark}</div></div>
        <div className="goa-proof-body">
          <span>{campaign.number} / Campaign</span>
          <h4>{campaign.title}</h4>
          <p><strong>{campaign.role}.</strong> {campaign.result}</p>
          <a className="goa-proof-link" href={campaign.href} target="_blank" rel="noreferrer">View original campaign ↗</a>
        </div>
      </article>)}
    </div>
    <div className="goa-revenue">
      <span>Business context / During my tenure</span>
      <strong>₹8 Cr → ₹12 Cr</strong>
      <p>The company’s revenue grew from ₹8 crore to ₹12 crore during my tenure. The portfolio shows the campaigns I personally planned and executed that contributed to the marketing and sales engine.</p>
    </div>
  </div>;
}
