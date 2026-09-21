import type { Metadata } from "next";
import SampleThree from "@/src/app/portfolio-samples/sample3/SampleThree";

export const metadata: Metadata = {
  title: "Sample Three | UI/UX designer",
  description:
    "Professional portfolio of Sample Three, an experienced UI/UX designer specializing in creating intuitive and engaging user experiences.",
  keywords: [
    "Sample Three",
    "UI/UX Designer",
    "Graphic Designer",
    "Sri Lanka Design",
  ],
  openGraph: {
    title: "Sample Three | UI/UX designer",
    description:
      "Professional portfolio of Sample Three, UI/UX designer.",
    type: "profile",
    images: [
      {
        url: "/samples/portfolios/sample3.jpg",
        width: 1200,
        height: 1200,
        alt: "Sample Three | UI/UX designer",
      },
    ],
  },
};

export default function Page() {
  return <SampleThree />;
}