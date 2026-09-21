import type { Metadata } from "next";
import LashikalaMadhubhashini from "@/src/components/LashikalaMadhubhashini";

export const metadata: Metadata = {
  title: "Lashikala Madhubhashini | Assistant Manager - Guest Relations",
  description:
    "Professional portfolio of Lashikala Madhubhashini, an experienced hospitality professional specializing in guest relations, front-office operations and guest experience.",
  keywords: [
    "Lashikala Madhubhashini",
    "Guest Relations Manager",
    "Assistant Manager Guest Relations",
    "Hospitality Professional",
    "Sri Lanka Hospitality",
  ],
  openGraph: {
    title: "Lashikala Madhubhashini | Hospitality Professional",
    description:
      "Professional portfolio of Lashikala Madhubhashini, Assistant Manager - Guest Relations.",
    type: "profile",
    images: [
      {
        url: "/images/lashikala-madhubhashini/lashikala.jpeg",
        width: 1200,
        height: 1200,
        alt: "Lashikala Madhubhashini",
      },
    ],
  },
};

export default function Page() {
  return <LashikalaMadhubhashini />;
}