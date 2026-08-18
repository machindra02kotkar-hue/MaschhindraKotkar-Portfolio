import styles from "./GoaProofOfWork.module.css";

const campaigns = [
  { number: "01", title: "Generator Campaign", result: "₹10 lakh+ in sales within three months of joining.", href: "https://www.facebook.com/100067240053517/posts/588838653367465/?app=fbl", mark: "₹10L" },
  { number: "02", title: "Sher Tiller — Lead Campaign", result: "250+ leads in the first run. The response volume exceeded the team’s immediate follow-up capacity, so I took the campaign down and relaunched it after one week — generating 150+ additional leads.", href: "https://www.facebook.com/goatractors.in/videos/672304788044890/?app=fbl", mark: "250+" },
  { number: "03", title: "Scratch Card Campaign", result: "Planned and executed for South Maharashtra; the promotion successfully drove sales.", href: "https://www.facebook.com/goatractors.in/videos/259687266402530/?app=fbl", mark: "SALES" },
  { number: "04", title: "Sher + STIHL Tiller Campaign", result: "Planned and executed for South Maharashtra; generated a strong response and drove sales.", href: "https://www.facebook.com/goatractors.in/videos/1018698946663863/?app=fbl", mark: "SALES" },
  { number: "05", title: "Sher Tiller + Fogger — Goa", result: "Two Goa campaigns planned and executed by me: one drove strong response and increased Sher Tiller sales; the other combined fogger awareness with sales and helped increase fogger sales.", href: "https://www.facebook.com/share/v/14mSdxUUUhz/", href2: "https://www.facebook.com/share/v/1BbmxbNNGt/", mark: "GOA" },
  { number: "06", title: "Influencer Collaboration", result: "Planned and executed creator collaboration that delivered 250K+ views and 40% higher views than competitors.", href: "https://www.instagram.com/reel/DK7GdxQSfra/?igsh=MWtubWF3ZHBoNzh4cw==", mark: "250K+" },
];

export function GoaProofOfWork() {
  return <div className={styles.proof}>
    <div className={styles.intro}>
      <span className={styles.kicker}>Proof of Work</span>
      <h3 className={styles.title}>The numbers tell one story.<br /><em>The work tells the rest.</em></h3>
      <p className={styles.copy}>Every campaign below was planned and executed by me. These are the campaigns behind the results — not just claims on a portfolio.</p>
    </div>
    <div className={styles.grid}>
      {campaigns.map((campaign) => <article className={styles.card} key={campaign.number}>
        <div className={styles.media}><div className={styles.mark}>{campaign.mark}</div></div>
        <div className={styles.body}>
          <span className={styles.label}>{campaign.number} / Campaign</span>
          <h4>{campaign.title}</h4>
          <p><strong>Planned &amp; executed by me.</strong> {campaign.result}</p>
          <a className={styles.link} href={campaign.href} target="_blank" rel="noreferrer">View campaign proof ↗</a>
          {campaign.href2 && <> <span> · </span><a className={styles.link} href={campaign.href2} target="_blank" rel="noreferrer">2nd proof ↗</a></>}
        </div>
      </article>)}
    </div>
    <div className={styles.revenue}>
      <span className={styles.revenueLabel}>Business context / During my tenure</span>
      <strong>₹8 Cr → ₹12 Cr</strong>
      <p>The company’s revenue grew from ₹8 crore to ₹12 crore during my tenure. This is presented as company-level business context alongside the campaigns I personally planned and executed.</p>
    </div>
  </div>;
}
