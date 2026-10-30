import type { Metadata } from "next";
import SasiruLakdham from "@/src/components/SasiruLakdham";

export const metadata: Metadata = {
  title: "Sasiru Lakdham | Quality Assurance Executive",
  description:
    "Professional portfolio of Sasiru Lakdham, a quality assurance and quality control professional experienced in food manufacturing, food packaging, laboratory testing, internal auditing and food safety.",
  keywords: [
    "Sasiru Lakdham",
    "Quality Assurance Executive",
    "Quality Control Executive",
    "Laboratory In-Charge",
    "Food Safety",
    "HACCP",
    "FSSC 22000",
    "Sri Lanka",
  ],
  openGraph: {
    title: "Sasiru Lakdham | Quality Assurance Professional",
    description:
      "Explore Sasiru Lakdham's experience in quality assurance, quality control, laboratory operations and food safety.",
    type: "profile",
    firstName: "Sasiru",
    lastName: "Lakdham",
  },
};

export default function Page() {
  return <SasiruLakdham />;
}
