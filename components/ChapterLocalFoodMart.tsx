"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ChapterLocalFoodMart() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = root.current;
    if (!section) return;

    gsap.from(
      section.querySelectorAll(
        ".food-eyebrow, .food-title, .food-copy, .food-card"
      ),
      {
        y: 48,
        opacity: 0,
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
          end: "top 28%",
          scrub: true,
        },
      }
    );

    gsap.to(section.querySelector(".phone"), {
      y: -48,
      rotate: 4,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: root });

  return (
    <section ref={root} className="food-mart" id="projects">
      <div className="food-content">

        <div>
          <span className="food-eyebrow">
            Chapter 02 / First venture
          </span>

          <h2 className="food-title">
            Local Food Mart
            <br />
            Online Order.
          </h2>

          <p className="food-copy">
            The answer was not another store. It was a way for local stores
            to meet people where they already were—on social media.
          </p>

          <div className="food-card">

            <span className="food-idea-label">
              THE IDEA
            </span>

            <p className="food-idea-text">
              Turn familiar social platforms into a simple, discoverable
              marketplace for local businesses.
            </p>

            <a
              className="food-instagram"
              href="https://www.instagram.com/lfm_oo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LFMOO Instagram page →
            </a>

          </div>
        </div>

        <div className="phone" aria-hidden="true">
          <div className="phone-top" />

          <div className="phone-screen">

            <div className="phone-brand">
              <img
                src="/LFMOO.jpg"
                alt="LFMOO logo"
                className="phone-logo"
              />

              <span>
                Local Food Mart
                <br />
                Online Order
              </span>
            </div>

            <i />
            <i />
            <i />

          </div>
        </div>

      </div>
    </section>
  );
}