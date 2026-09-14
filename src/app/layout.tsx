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

export const metadata: Metadata = {
  title: "BUONO ODRE | Luxury Handcrafted Botanical Arrangements & Home Fragrances",
  description: "Exquisite B2B export catalog of custom handcrafted botanical arrangements with metallic crest details, luxury real-touch florals, and specialized home fragrances. Made in Turkey for international elite curators.",
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

