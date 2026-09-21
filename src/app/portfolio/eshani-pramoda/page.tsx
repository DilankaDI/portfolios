import type { Metadata } from "next";
import EshaniPramoda from "@/src/components/EshaniPramoda";

export const metadata: Metadata = {
  title: "Eshani Pramoda | Assistant Manager - Guest Relations",
  description:
    "Professional portfolio of Eshani Pramoda, an experienced hospitality professional specializing in guest relations, front-office operations and guest experience.",
  keywords: [
    "Eshani Pramoda",
    "Guest Relations Manager",
    "Assistant Manager Guest Relations",
    "Hospitality Professional",
    "Sri Lanka Hospitality",
  ],
  openGraph: {
    title: "Eshani Pramoda | Hospitality Professional",
    description:
      "Professional portfolio of Eshani Pramoda, Assistant Manager - Guest Relations.",
    type: "profile",
    images: [
      {
        url: "/images/eshani-pramoda/eshani-pramoda.png",
        width: 1200,
        height: 1200,
        alt: "Eshani Pramoda",
      },
    ],
  },
};

export default function Page() {
  return <EshaniPramoda />;
}