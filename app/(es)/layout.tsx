import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { siteConfig } from "@/lib/config";
import "../globals.css";
import "../extensions.css";

const baloo = Baloo_2({ subsets: ["latin"], variable: "--font-baloo", display: "swap" });
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  icons: { icon: "/logo/favicon.png", shortcut: "/logo/favicon.png", apple: "/logo/favicon.png" },
};

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${baloo.variable} ${nunito.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <Header locale="es" />
        <div id="main-content">{children}</div>
        <Footer locale="es" />
        <CookieConsent locale="es" />
      </body>
    </html>
  );
}
