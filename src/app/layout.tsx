import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://www.buonoodre.com";

export const metadata: Metadata = {
  title: "Buon Odore | Luxury Home Fragrance Manufacturer & B2B Global Export",
  description:
    "Official international export portal for Buon Odore. Premium reed diffusers, scented candles, and ambient scents. Scalable wholesale supply, IFRA compliant, worldwide distribution.",
  applicationName: "Buon Odore",
  keywords: [
    "Buon Odore",
    "luxury home fragrance manufacturer",
    "reed diffuser wholesale",
    "soy candle manufacturer",
    "room spray exporter",
    "B2B fragrance supplier",
    "home fragrance exporter Turkey",
    "IFRA compliant fragrance",
  ],
  authors: [{ name: "Buon Odore Export Division" }],
  category: "Luxury Home Fragrance Manufacturing",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Buon Odore | Luxury Home Fragrance Manufacturer & B2B Global Export",
    description:
      "Official international export portal for Buon Odore. Premium reed diffusers, scented candles, and ambient scents. Scalable wholesale supply, IFRA compliant, worldwide distribution.",
    url: BASE_URL,
    siteName: "Buon Odore",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buon Odore — Luxury Home Fragrances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buon Odore | Luxury Home Fragrance Manufacturer & B2B Global Export",
    description:
      "Official international export portal for Buon Odore. Premium reed diffusers, scented candles, and ambient scents. Scalable wholesale supply, IFRA compliant, worldwide distribution.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-[#070708] text-[#f4f4f6]">
        {children}
      </body>
    </html>
  );
}
