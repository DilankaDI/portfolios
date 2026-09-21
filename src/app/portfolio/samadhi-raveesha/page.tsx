import type { Metadata } from "next";
import SamadhiRaveesha from "@/src/components/SamadhiRaveesha";

export const metadata: Metadata = {
  title: "Samadhi Raveesha | Hospitality & Public Relations Professional",
  description:
    "Professional portfolio of Samadhi Raveesha, a hospitality professional with experience in guest services, public relations, restaurant operations, inventory coordination, and international hospitality training in Singapore.",
  keywords: [
    "Samadhi Raveesha",
    "Hospitality Professional",
    "Hospitality Management",
    "Public Relations",
    "Guest Services",
    "Guest Experience",
    "Hospitality Operations",
    "STEi Institute",
    "Singapore Hospitality",
    "Sri Lanka Hospitality",
  ],
  openGraph: {
    title: "Samadhi Raveesha | Hospitality & Public Relations Professional",
    description:
      "Professional portfolio of Samadhi Raveesha, with hospitality training in Singapore and experience in guest services, restaurant operations, inventory coordination, and public relations.",
    type: "profile",
    images: [
      {
        url: "/images/samadhi-raveesha/samadhi-raveesha.png",
        width: 1200,
        height: 1200,
        alt: "Samadhi Raveesha",
      },
    ],
  },
};

export default function Page() {
  return <SamadhiRaveesha />;
}