import type { Metadata } from "next";
import SampleOne from "@/src/app/portfolio-samples/sample1/SampleOne";

export const metadata: Metadata = {
  title: "Shehan Perera | Assistant Manager - Guest Relations",
  description:
    "Professional portfolio of Shehan Perera, an experienced hospitality professional specializing in guest relations, front-office operations and guest experience.",
  keywords: [
    "Shehan Perera",
    "Guest Relations Manager",
    "Assistant Manager Guest Relations",
    "Hospitality Professional",
    "Sri Lanka Hospitality",
  ],
  openGraph: {
    title: "Shehan Perera | Hospitality Professional",
    description:
      "Professional portfolio of Shehan Perera, Assistant Manager - Guest Relations.",
    type: "profile",
    images: [
      {
        url: "/samples/portfolios/sample1.jpg",
        width: 1200,
        height: 1200,
        alt: "Shehan Perera | Assistant Manager - Guest Relations",
      },
    ],
  },
};

export default function Page() {
  return <SampleOne />;
}