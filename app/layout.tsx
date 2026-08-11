import type { Metadata } from "next";
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
  title: "Maschhindra — The Story of a Problem Solver",
  description: "A cinematic portfolio by Maschhindra.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
