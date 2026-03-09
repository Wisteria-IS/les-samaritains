import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Outfit, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
// ThemeSwitcher removed but kept in codebase for future use
// import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

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
  title: "L'Oeuvre des Samaritains | Centre de distribution alimentaire",
  description:
    "L'Oeuvre des Samaritains est un centre de distribution alimentaire a Montreal qui aide les familles dans le besoin depuis 2002. Faire un don, devenir benevole.",
  keywords: [
    "banque alimentaire",
    "Montreal",
    "aide alimentaire",
    "benevole",
    "don",
    "Samaritains",
  ],
  authors: [{ name: "L'Oeuvre des Samaritains" }],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://lessamaritains.net",
    siteName: "L'Oeuvre des Samaritains",
    title: "L'Oeuvre des Samaritains | Centre de distribution alimentaire",
    description:
      "Aidez les familles de Montreal en faisant un don ou en devenant benevole.",
    images: [
      {
        url: "/logo.png",
        width: 180,
        height: 180,
        alt: "L'Oeuvre des Samaritains",
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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`
          ${plusJakartaSans.variable}
          ${inter.variable}
          ${outfit.variable}
          ${dmSans.variable}
          ${caveat.variable}
          antialiased
        `}
      >
        <ThemeProvider initialTheme="harvest">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
