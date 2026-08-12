import { Chapter2020 } from "@/components/Chapter2020";
import { ChapterBoiMare } from "@/components/ChapterBoiMare";
import { ChapterLocalFoodMart } from "@/components/ChapterLocalFoodMart";
import { ChapterGoaTractors } from "@/components/ChapterGoaTractors";
import { ChapterMba } from "@/components/ChapterMba";
import { ChapterWildHeart } from "@/components/ChapterWildHeart";
import { ChapterToday } from "@/components/ChapterToday";
import { ChapterTopTrip } from "@/components/ChapterTipTrip";
import { CinematicHero } from "@/components/CinematicHero";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        <CinematicHero />
        <section className="question" id="about-me" aria-label="Portfolio introduction">
          <p>Every chapter you are about to experience happened because I kept asking one question.</p>
          <h2>How can this be done better?</h2>
          <p>That question changed my life.</p>
        </section>
        <Chapter2020 />
        <ChapterLocalFoodMart />
        <ChapterBoiMare />
        <ChapterTopTrip />
        <ChapterGoaTractors />
        <ChapterMba />
        <ChapterWildHeart />
        <ChapterToday />
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
