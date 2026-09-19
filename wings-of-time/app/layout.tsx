import type { Metadata } from "next";
import { Pinyon_Script, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wings of Time by Andrea Bailey",
    template: "%s | Wings of Time",
  },
  description:
    "A spellbinding historical romance of love, courage, and impossible choices across two eras. Available in paperback, hardback, and ebook.",
  keywords: [
    "Wings of Time",
    "Andrea Bailey",
    "historical romance",
    "WWII fiction",
    "time slip romance",
    "Lincolnshire fiction",
    "Lancaster bomber",
    "WAAF",
  ],
  authors: [{ name: "Andrea Bailey" }],
  openGraph: {
    title: "Wings of Time by Andrea Bailey",
    description:
      "One woman. Two eras. A love that refuses to belong to just one lifetime.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/cover-front.png",
        width: 638,
        height: 1188,
        alt: "Wings of Time book cover by Andrea Bailey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wings of Time by Andrea Bailey",
    description:
      "One woman. Two eras. A love that refuses to belong to just one lifetime.",
    images: ["/cover-front.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pinyon.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
