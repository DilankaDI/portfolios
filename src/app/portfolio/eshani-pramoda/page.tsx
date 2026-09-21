import type { Metadata } from "next";
import EshaniPramoda from "@/src/components/EshaniPramoda";

export const metadata: Metadata = {
  title: "Eshani Pramoda | Commerce Graduate",
  description:
    "Professional portfolio of Eshani Pramoda, a Commerce graduate with a strong foundation in business management, accounting, economics, administration, IT, and professional communication.",
  keywords: [
    "Eshani Pramoda",
    "Commerce Graduate",
    "Business Management",
    "Accounting",
    "Economics",
    "Administrative Skills",
    "IT Skills",
    "Sri Lanka",
  ],
  openGraph: {
    title: "Eshani Pramoda | Commerce Graduate",
    description:
      "Professional portfolio of Eshani Pramoda, a Commerce graduate with knowledge in business operations, administration, IT, and communication.",
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