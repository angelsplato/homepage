import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angels Makuwerere's Home Page",
  description:
    "Personal homepage of Angels Makuwerere, a software engineer in Johannesburg working on backend systems and payments.",
  referrer: "no-referrer",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/37082400?v=4&s=64",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={serif.variable}>
      <body className={serif.className}>{children}</body>
    </html>
  );
}
