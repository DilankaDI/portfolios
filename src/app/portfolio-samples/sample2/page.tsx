import type { Metadata } from "next";
import SampleTwo from "@/src/app/portfolio-samples/sample2/SampleTwo";

export const metadata: Metadata = {
  title: "Vishmi Imalsha | UI/UX designer",
  description:
    "Professional portfolio of Vishmi Imalsha, an experienced UI/UX designer specializing in creating intuitive and engaging user experiences.",
  keywords: [
    "Vishmi Imalsha",
    "UI/UX Designer",
    "Graphic Designer",
    "Sri Lanka Design",
  ],
  openGraph: {
    title: "Vishmi Imalsha | UI/UX designer",
    description:
      "Professional portfolio of Vishmi Imalsha, UI/UX designer.",
    type: "profile",
    images: [
      {
        url: "/samples/portfolios/sample2.jpg",
        width: 1200,
        height: 1200,
        alt: "Vishmi Imalsha | UI/UX designer",
      },
    ],
  },
};

export default function Page() {
  return <SampleTwo />;
}