import type { Metadata } from "next";
import Script from "next/script";
import { DM_Mono, Manrope } from "next/font/google";
import "./globals.css";
import "./toptrip.css";
import "./boimare.css";
import "./goatractors.css";
import "./mba.css";
import "./wildheart.css";
import "./today.css";

const display = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://maschhindra-kotkar-portfolio.vercel.app"),
  title: "Maschhindra — The Story of a Problem Solver",
  description: "A cinematic portfolio by Maschhindra.",
  openGraph: {
    title: "Maschhindra — The Story of a Problem Solver",
    description: "A cinematic portfolio by Maschhindra.",
    url: "https://maschhindra-kotkar-portfolio.vercel.app",
    siteName: "Maschhindra",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maschhindra — The Story of a Problem Solver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maschhindra — The Story of a Problem Solver",
    description: "A cinematic portfolio by Maschhindra.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
return (
  <html
    lang="en"
    className={`${display.variable} ${body.variable}`}
    suppressHydrationWarning
  >
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-S1DR6B8R5H"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-S1DR6B8R5H');
      `}
    </Script>

<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "clarity", "y15195knb8");
  `}
</Script>

    <body suppressHydrationWarning>
      {children}
    </body>
  </html>
);
}
