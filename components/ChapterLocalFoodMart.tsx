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
        <div className="food-copy-column">
          <span className="food-eyebrow">Chapter 02 / First venture</span>

          <h2 className="food-title">
            Local Food
            <br />
            Mart
            <br />
            Online
            <br />
            Order.
          </h2>

          <p className="food-copy">
            The answer was not another store. It was a way for local stores
            to meet people where they already were—on social media.
          </p>

          <div className="food-card">
            <span className="food-idea-label">THE IDEA</span>
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

      <style jsx global>{`
        .food-mart {
          min-height: 100svh;
          display: grid;
          place-items: center;
          overflow: hidden;
          padding: 120px clamp(24px, 10vw, 180px);
          background: #f5ede0;
          color: #3b2f25;
        }

        .food-content {
          width: min(100%, 1120px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) 320px;
          gap: clamp(70px, 12vw, 150px);
          align-items: center;
        }

        .food-copy-column {
          min-width: 0;
        }

        .food-eyebrow,
        .food-card span {
          font-family: var(--font-display);
          color: #9a7048;
          font-size: 11px;
          letter-spacing: .17em;
          text-transform: uppercase;
        }

        .food-title {
          margin: 18px 0 30px;
          font-family: var(--font-display);
          font-size: clamp(4.2rem, 7.2vw, 7.7rem);
          font-weight: 400;
          letter-spacing: -.105em;
          line-height: .78;
          color: #30241d;
        }

        .food-copy {
          max-width: 560px;
          margin: 0;
          font-size: clamp(1rem, 1.45vw, 1.2rem);
          line-height: 1.65;
          color: #6a5949;
        }

        .food-card {
          max-width: 500px;
          margin-top: 42px;
          padding: 24px 0 0;
          border-top: 1px solid #d7c4aa;
        }

        .food-card p {
          margin: 13px 0 0;
          font-size: .92rem;
          line-height: 1.6;
          color: #6a5949;
        }

        .food-instagram {
          display: inline-block;
          margin-top: 24px;
          padding-bottom: 7px;
          border-bottom: 1px solid #9a7048;
          color: #76583f;
          font-size: .9rem;
        }

        .phone {
          width: 250px;
          height: 490px;
          justify-self: center;
          padding: 13px;
          border: 8px solid #3b3028;
          border-radius: 38px;
          background: #3b3028;
          box-shadow: 20px 24px 0 rgba(59, 48, 40, .13);
          transform-origin: center;
        }

        .phone-top {
          width: 70px;
          height: 7px;
          margin: 0 auto 14px;
          border-radius: 99px;
          background: #a47c51;
        }

        .phone-screen {
          display: grid;
          align-content: start;
          gap: 12px;
          height: 438px;
          padding: 32px 20px;
          border-radius: 21px;
          background: #eadcc8;
          color: #3b3028;
        }

        .phone-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 8px;
        }

        .phone-logo {
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          object-fit: contain;
          border-radius: 9px;
        }

        .phone-screen span {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          line-height: .95;
          letter-spacing: -.035em;
          color: #3b3028;
        }

        .phone-screen i {
          display: block;
          height: 45px;
          border-radius: 7px;
          background: #cdb087;
        }

        .phone-screen i:nth-of-type(2) {
          width: 72%;
        }

        .phone-screen i:nth-of-type(3) {
          width: 83%;
        }

        @media (max-width: 760px) {
          .food-mart {
            min-height: auto;
            padding: 105px 24px 95px;
          }

          .food-content {
            grid-template-columns: 1fr;
            gap: 58px;
          }

          .food-title {
            font-size: clamp(3.5rem, 15vw, 5.5rem);
          }

          .food-copy {
            max-width: 100%;
          }

          .phone {
            width: 210px;
            height: 412px;
          }

          .phone-screen {
            height: 359px;
          }
        }
      `}</style>
    </section>
  );
}
