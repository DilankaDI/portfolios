import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://professionalhub.space"),

  title: {
    default: "ProHub | Professional Profiles & Business Identities",
    template: "%s | ProHub",
  },

  description:
    "ProHub creates professional online profiles, modern CVs, ATS-friendly resumes, and dedicated business pages designed to help people and businesses build a stronger digital identity.",

  keywords: [
    "ProHub",
    "professional profiles",
    "professional CV",
    "ATS-friendly CV",
    "ATS-friendly resume",
    "modern CV",
    "online professional profile",
    "business profile",
    "business page",
    "online business presence",
    "professional identity",
    "digital identity",
  ],

  authors: [
    {
      name: "ProHub",
      url: "https://professionalhub.space",
    },
  ],

  creator: "ProHub",
  publisher: "ProHub",

  alternates: {
    canonical: "https://professionalhub.space",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://professionalhub.space",
    siteName: "ProHub",
    title: "ProHub | Professional Profiles & Business Identities",
    description:
      "Professional profiles, modern CVs, ATS-friendly resumes, and business pages built to create a stronger digital identity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ProHub | Professional Profiles & Business Identities",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ProHub | Professional Profiles & Business Identities",
    description:
      "Professional profiles, modern CVs, ATS-friendly resumes, and business pages built for the web.",
    images: ["/og-image.png"],
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

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}