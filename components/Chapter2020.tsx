"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Chapter2020() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;

      if (!section) return;

      /* --------------------------------
         YEAR
      -------------------------------- */
      gsap.fromTo(
        section.querySelector(".year"),
        {
          xPercent: 20,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      /* --------------------------------
         MAIN STORY
      -------------------------------- */
      gsap.from(
        section.querySelectorAll(
          ".chapter-label, .chapter-story h2, .chapter-story > p:not(.chapter-question)"
        ),
        {
          y: 40,
          opacity: 0,
          stagger: 0.14,
          scrollTrigger: {
            trigger: section,
            start: "top 64%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      /* --------------------------------
         WHAT IF QUESTION
         Plays only once
      -------------------------------- */
      gsap.fromTo(
        section.querySelector(".chapter-question"),
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "38% center",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      /* --------------------------------
         TRANSITION STAR
      -------------------------------- */
      const star = section.querySelector(".orbit-star");

      /* Find the phone in Chapter 02 */
      const phone = document.querySelector(".food-mart .phone");

      if (star && phone) {
        /*
         * Keep the star visible at the beginning.
         */
        gsap.set(star, {
          opacity: 1,
          scale: 1,
          rotation: 0,
        });

        /*
         * Hide the Chapter 02 phone initially.
         */
        gsap.set(phone, {
          opacity: 0,
          scale: 0.82,
        });

        /*
         * Calculate where the phone is on screen.
         * The star will travel toward this position.
         */
        const starRect = star.getBoundingClientRect();
        const phoneRect = phone.getBoundingClientRect();

        const targetX =
          phoneRect.left +
          phoneRect.width / 2 -
          (starRect.left + starRect.width / 2);

        const targetY =
          phoneRect.top +
          phoneRect.height / 2 -
          (starRect.top + starRect.height / 2);

        /*
         * STAR JOURNEY
         *
         * The star:
         * 1. rolls
         * 2. travels downward
         * 3. gets smaller
         * 4. reaches the phone
         * 5. disappears
         */
        const starAnimation = gsap.to(star, {
          x: targetX,
          y: targetY,
          rotation: 1440,
          scale: 0.25,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "65% center",
            end: "bottom top",
            scrub: true,
          },
        });

        /*
         * PHONE APPEARS AS THE STAR ARRIVES
         */
        gsap.to(phone, {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "bottom 70%",
            end: "bottom 35%",
            scrub: true,
          },
        });

        /*
         * Refresh calculations after everything loads.
         */
        ScrollTrigger.refresh();

        return () => {
          starAnimation.kill();
        };
      }
    },
    {
      scope: root,
    }
  );

  return (
    <section ref={root} className="chapter">
      <div className="chapter-sticky">

        {/* 2020 */}
        <span className="year">2020</span>

        {/* STORY */}
        <div className="chapter-story">

          <span className="chapter-label">
            Chapter 01 / The beginning
          </span>

          <h2>
            When the World Stopped.
          </h2>

          <p>
            While pursuing my B.Com, I watched local businesses lose
            their customers—not because they lacked good products,
            but because people could no longer find them.
          </p>

          <p className="chapter-question">
            What if social media could become{" "}
            <em>their marketplace?</em>
          </p>

        </div>

        {/* ORBIT + STAR */}
        <div className="chapter-orbit">
          <span
            className="orbit-star"
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "8%",
              bottom: "8%",
              zIndex: 20,
              display: "block",
              fontSize: "34px",
              lineHeight: 1,
              color: "#ffffff",
              opacity: 1,
              visibility: "visible",
              pointerEvents: "none",
            }}
          >
            ★
          </span>
        </div>

      </div>
    </section>
  );
}