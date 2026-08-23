import { Chapter2020 } from "@/components/Chapter2020";
import { ChapterBoiMare } from "@/components/ChapterBoiMare";
import { ChapterLocalFoodMart } from "@/components/ChapterLocalFoodMart";
import { ChapterGoaTractors } from "@/components/ChapterGoaTractors";
import { ChapterMba } from "@/components/ChapterMba";
import { ChapterWildHeart } from "@/components/ChapterWildHeart";
import { ChapterToday } from "@/components/ChapterToday";
import { ChapterTopTrip } from "@/components/ChapterTipTrip";
import { CinematicHero } from "@/components/CinematicHero";
import { CursorGlow } from "@/components/CursorGlow";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <CursorGlow />
      <Navigation />
      <main>
        <CinematicHero />
        <section className="question" id="about-me" aria-label="Portfolio introduction">
          <p
            className="about-intro"
            style={{
              fontSize: "clamp(.82rem, 1.35vw, 1.15rem)",
              color: "#4f6a86",
              fontWeight: 400,
              lineHeight: 1.55,
              marginBottom: "clamp(28px, 4vh, 46px)",
              maxWidth: "680px",
            }}
          >
            Hi, I’m Maschhindra Kotkar — an MBA graduate and marketer with 2 years of experience, driven by one simple instinct: to make things better.
          </p>
          <p>Every chapter you are about to experience happened because I kept asking one question.</p>
          <h2>How can this be done better?</h2>
          <p>That question changed my life.</p>
        </section>

        <div id="chapter-01"><Chapter2020 /></div>
        <div id="chapter-02"><ChapterLocalFoodMart /></div>
        <div id="chapter-03"><ChapterBoiMare /></div>
        <div id="chapter-04"><ChapterTopTrip /></div>
        <div id="chapter-05"><ChapterGoaTractors /></div>
        <div id="chapter-06"><ChapterMba /></div>
        <div id="chapter-07"><ChapterWildHeart /></div>
        <div id="chapter-08"><ChapterToday /></div>

        <section className="next-chapter" id="contact">
          <span id="resume">Let&apos;s connect</span>
          <h2>Let&apos;s build something meaningful.</h2>

          <div className="contact-links">
            <a
              className="contact-link"
              href="mailto:machindra02kotkar@gmail.com"
            >
              Email →
            </a>

            <a
              className="contact-link"
              href="https://wa.me/917448073402"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp →
            </a>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
