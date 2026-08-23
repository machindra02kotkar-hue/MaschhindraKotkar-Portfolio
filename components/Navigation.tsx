import styles from "./Navigation.module.css";

const chapters = [
  { number: "01", name: "The Beginning / 2020", href: "#chapter-01" },
  { number: "02", name: "Local Food Mart Online Order", href: "#chapter-02" },
  { number: "03", name: "Boi Mare", href: "#chapter-03" },
  { number: "04", name: "Tip Trip", href: "#chapter-04" },
  { number: "05", name: "Goa Tractors", href: "#chapter-05" },
  { number: "06", name: "MBA / Goa Business School", href: "#chapter-06" },
  { number: "07", name: "WildHeart", href: "#chapter-07" },
  { number: "08", name: "Today", href: "#chapter-08" },
];

export function Navigation() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="nav-mark" href="#top">MK</a>

      <div className="nav-links">
        <a href="#about-me">About Me</a>

        <div className={styles.projectsMenu}>
          <a
            className={styles.projectsTrigger}
            href="#chapter-02"
            aria-haspopup="true"
          >
            Projects
            <span className={styles.chevron} aria-hidden="true">▼</span>
          </a>

          <div className={styles.dropdown} role="menu" aria-label="Portfolio chapters">
            {chapters.map((chapter) => (
              <a
                key={chapter.number}
                className={styles.dropdownLink}
                href={chapter.href}
                role="menuitem"
              >
                {chapter.number} / {chapter.name}
              </a>
            ))}
          </div>
        </div>

        <a href="#contact">Contact</a>
        <a href="/maschhindra-kotkar-resume-2026.pdf" download>Resume</a>
      </div>
    </nav>
  );
}
