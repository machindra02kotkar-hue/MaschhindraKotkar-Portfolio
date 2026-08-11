const links = [
  { label: "About Me", href: "#about-me" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/maschhindra-kotkar-resume-2026.pdf", download: true },
];

export function Navigation() {
  return <nav className="site-nav" aria-label="Primary navigation"><a className="nav-mark" href="#top">M/</a><div className="nav-links">{links.map((link) => <a href={link.href} download={link.download} key={link.label}>{link.label}</a>)}</div></nav>;
}
