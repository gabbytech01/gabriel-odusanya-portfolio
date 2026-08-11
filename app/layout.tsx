import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const accent = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielodusanya.cv"),

  title: {
    default: "Gabriel Odusanya | Application Security Engineer",
    template: "%s | Gabriel Odusanya",
  },

  description:
    "Gabriel Odusanya (GABBYTECH) is an Application Security Engineer specializing in web security, API security, penetration testing, threat modeling, DevSecOps, and secure software development.",

  keywords: [
    "Gabriel Odusanya",
    "GABBYTECH",
    "Application Security Engineer",
    "Application Security",
    "AppSec Engineer",
    "Cybersecurity Engineer",
    "API Security",
    "Web Application Security",
    "API Penetration Testing",
    "Web Penetration Testing",
    "Mobile Security",
    "Threat Modeling",
    "DevSecOps",
    "Secure SDLC",
    "Cybersecurity Nigeria",
    "Cybersecurity Africa",
    "Penetration Tester Nigeria",
  ],

  authors: [
    {
      name: "Gabriel Odusanya",
      url: "https://gabrielodusanya.cv",
    },
  ],

  creator: "Gabriel Odusanya",
  publisher: "Gabriel Odusanya",

  alternates: {
    canonical: "https://gabrielodusanya.cv",
  },

  openGraph: {
    title: "Gabriel Odusanya | Application Security Engineer",
    description:
      "Application Security Engineer specializing in web security, API security, penetration testing, threat modeling, DevSecOps, and secure software development.",
    url: "https://gabrielodusanya.cv",
    siteName: "Gabriel Odusanya",
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gabriel Odusanya | Application Security Engineer",
    description:
      "Application Security Engineer specializing in web security, API security, penetration testing, threat modeling, and DevSecOps.",
    site: "@gabbytech01",
    creator: "@gabbytech01",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable}`}
    >
      <body className="font-body bg-ivory text-ink antialiased">
        <div className="grain" aria-hidden="true" />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-ivory focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>

        {children}
      </body>
    </html>
  );
}