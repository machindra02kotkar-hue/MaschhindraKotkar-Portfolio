"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const memes = [
  {
    title: "MAKE THEM PAUSE",
    id: "CeBcKFVvne6",
    url: "https://www.instagram.com/p/CeBcKFVvne6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "MAKE THEM SMILE",
    id: "CgCbu3zvhND",
    url: "https://www.instagram.com/p/CgCbu3zvhND/",
  },
  {
    title: "MAKE THEM SHARE",
    id: "DJincRrI5GR",
    url: "https://www.instagram.com/p/DJincRrI5GR/",
  },
];

export function ChapterBoiMare() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from(
        section.querySelectorAll(
          ".boi-label, .boi-title, .boi-copy, .meme-card, .boi-stat"
        ),
        {
          y: 60,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      gsap.to(section.querySelectorAll(".meme-card"), {
        rotate: (index) => (index % 2 ? 5 : -5),
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(section.querySelectorAll(".meme-card"), {
        y: (index) => index * 12,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="boi-mare">
      <div className="boi-intro">
        <div>
          <span className="boi-label">Chapter 03 / 2020</span>
          <h2 className="boi-title">
            The Art of
            <br />
            Making People Smile.
          </h2>
          <p className="boi-copy">
            While building Local Food Mart, I learned that businesses need
            more than products. They need attention—content people actually
            want to stop for, enjoy, and share.
          </p>
          <a
            className="boi-instagram"
            href="https://www.instagram.com/boi_mare/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit @boi_mare on Instagram ↗
          </a>
        </div>

        <div className="meme-stack">
          {memes.map((meme, index) => (
            <article className="meme-card" key={meme.id}>
              <div className="meme-card-header">
                <span>BOI_MARE</span>
                <a
                  href={meme.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${meme.title} on Instagram`}
                >
                  ↗
                </a>
              </div>

              <div className="meme-instagram">
                <iframe
                  src={`https://www.instagram.com/p/${meme.id}/embed/`}
                  title={`BOI_MARE - ${meme.title}`}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="meme-card-footer">
                <strong>{meme.title}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="boi-result">
        <p>
          With two friends, I built a meme community around humor and brand
          storytelling.
        </p>

        <img
          className="boi-logo"
          src="/boi-mare-logo.png"
          alt="Boi Mare logo"
        />

        <div className="boi-stat">
          <strong>5,000+</strong>
          <span>Followers reached</span>
        </div>

        <p className="boi-lesson">
          Marketing isn&apos;t only about selling.
          <br />
          <em>It&apos;s about making people stop scrolling.</em>
        </p>
      </div>

      <style jsx>{`
        .boi-instagram {
          display: inline-block;
          margin-top: 28px;
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid currentColor;
          padding-bottom: 5px;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .boi-instagram:hover {
          opacity: 0.65;
          transform: translateX(5px);
        }

        .meme-stack {
          position: relative;
          width: 360px;
          height: 430px;
          margin: 0 auto;
        }

        .meme-card {
          position: absolute;
          width: 235px;
          height: 330px;
          padding: 0;
          overflow: hidden;
          border: 3px solid #220a45;
          background: #fffdf4;
          box-shadow: 12px 12px 0 rgba(34, 10, 69, 0.24);
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.35s ease, filter 0.35s ease;
        }

        .meme-card:nth-child(1) {
          top: 0;
          left: 0;
          transform: rotate(-7deg);
          background: #fffdf4;
          z-index: 1;
        }

        .meme-card:nth-child(2) {
          top: 57px;
          right: 0;
          transform: rotate(6deg);
          background: #7ff5de;
          z-index: 2;
        }

        .meme-card:nth-child(3) {
          bottom: 0;
          left: 46px;
          transform: rotate(-2deg);
          background: #ffe15e;
          z-index: 3;
        }

        .meme-card-header {
          min-height: 40px;
          padding: 10px 13px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          border-bottom: 2px solid #220a45;
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .meme-card-header span {
          font-family: var(--font-display);
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .meme-card-header a {
          color: #220a45;
          text-decoration: none;
          font-size: 18px;
          line-height: 1;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .meme-card-header a:hover {
          transform: translate(3px, -3px);
          opacity: 0.65;
        }

        .meme-instagram {
          position: relative;
          width: 100%;
          height: 245px;
          overflow: hidden;
          background: #f5f1e8;
          flex: 1;
        }

        .meme-instagram iframe {
          position: absolute;
          top: 0;
          left: 50%;
          width: 100%;
          min-width: 100%;
          height: 100%;
          transform: translateX(-50%);
          border: 0;
          display: block;
          background: #fff;
        }

        .meme-card-footer {
          min-height: 48px;
          padding: 9px 13px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          border-top: 2px solid #220a45;
          background: inherit;
        }

        .meme-card-footer strong {
          max-width: 170px;
          font-family: var(--font-display);
          font-size: 1.15rem;
          line-height: 0.9;
          letter-spacing: -0.07em;
        }

        .meme-card:hover {
          z-index: 20;
          filter: brightness(1.03);
          box-shadow: 18px 18px 0 rgba(34, 10, 69, 0.27);
        }

        .boi-logo {
          width: 110px;
          height: 110px;
          object-fit: contain;
          justify-self: end;
        }

        @media (max-width: 900px) {
          .meme-stack {
            width: min(360px, 92vw);
            height: 400px;
          }

          .meme-card {
            width: 210px;
            height: 300px;
          }

          .meme-instagram {
            height: 215px;
          }
        }
      `}</style>
    </section>
  );
}
