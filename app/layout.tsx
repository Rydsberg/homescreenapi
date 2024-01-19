import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";

const mplus = M_PLUS_1p({ subsets: ["latin", "latin-ext"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Informationsskärmar - Rydsberg",
  icons: ["favicon.png"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='sv'>
      <Head>
        <link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css' />
      </Head>
      <Script src='https://cdn.jsdelivr.net/npm/luxon@1.21.1/build/global/luxon.min.js'></Script>
      <body className={mplus.className}>{children}</body>
    </html>
  );
}
