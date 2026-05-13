import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Outfit, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Fonts for Harvest theme
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fonts for Urban theme
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Accent font for Harvest theme
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Œuvre des Samaritains | Centre de distribution alimentaire",
  description:
    "L'Œuvre des Samaritains est un centre de distribution alimentaire à Montréal qui aide les familles dans le besoin depuis 2002. Faire un don, devenir bénévole.",
  keywords: [
    "banque alimentaire",
    "Montréal",
    "aide alimentaire",
    "bénévole",
    "don",
    "Samaritains",
  ],
  authors: [{ name: "L'Œuvre des Samaritains" }],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://lessamaritains.net",
    siteName: "L'Œuvre des Samaritains",
    title: "L'Œuvre des Samaritains | Centre de distribution alimentaire",
    description:
      "Aidez les familles de Montréal en faisant un don ou en devenant bénévole.",
    images: [
      {
        url: "/logo.png",
        width: 180,
        height: 180,
        alt: "L'Œuvre des Samaritains",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`
          ${plusJakartaSans.variable}
          ${inter.variable}
          ${outfit.variable}
          ${dmSans.variable}
          ${caveat.variable}
          antialiased
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
