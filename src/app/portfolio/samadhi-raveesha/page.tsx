import type { Metadata } from "next";
import SamadhiRaveesha from "@/src/components/SamadhiRaveesha";

export const metadata: Metadata = {
  title: "Samadhi Raveesha | Hospitality & Public Relations Professional",
  description:
    "Professional portfolio of Samadhi Raveesha, a hospitality professional specializing in public relations, guest experience, and operational support.",
  keywords: [
    "Samadhi Raveesha",
    "Hospitality Management",
    "Public Relations Professional",
    "STEi Institute Alumni",
    "Guest Services Specialist",
    "Sri Lanka Hospitality",
  ],
  openGraph: {
    title: "Samadhi Raveesha | Hospitality & Public Relations Professional",
    description:
      "Professional portfolio of Samadhi Raveesha, specializing in guest services, team coordination, and public relations.",
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