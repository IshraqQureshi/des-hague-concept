import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://deshague.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Des Hague | CEO, Author, Investor & Leadership Strategist",
  description:
    "Des Hague is a CEO, investor, author, advisor and leadership strategist focused on building businesses, developing leaders and creating lasting impact.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Des Hague | CEO, Author, Investor & Leadership Strategist",
    description:
      "Des Hague is a CEO, investor, author, advisor and leadership strategist focused on building businesses, developing leaders and creating lasting impact.",
    url: siteUrl,
    siteName: "Des Hague",
    images: ["/images/portrait-studio-blue.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Des Hague | CEO, Author, Investor & Leadership Strategist",
    description:
      "Des Hague is a CEO, investor, author, advisor and leadership strategist focused on building businesses, developing leaders and creating lasting impact.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
