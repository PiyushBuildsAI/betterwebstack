import type { ContactInfo, ContactFeature } from "@/lib/types";

export const contactInfo: ContactInfo = {
    email: "piyush.freelancer.in@gmail.com",
    emailLabel: "Email us",
};

export const contactFeatures: ContactFeature[] = [
    {
        icon: (
            <svg
        className= "w-5 h-5 sm:w-6 sm:h-6 text-ink"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        >
        <title>Quick Response</ title >
    <path
          strokeLinecap="round"
          strokeLinejoin = "round"
          strokeWidth = { 2}
          d = "M13 10V3L4 14h7v7l9-11h-7z"
    />
    </svg>
    ),
description: "Quick response time - we typically reply within 24 hours.",
  },
{
    icon: (
        <svg
        className= "w-5 h-5 sm:w-6 sm:h-6 text-ink"
    fill = "none"
    viewBox = "0 0 24 24"
    stroke = "currentColor"
        >
        <title>Direct Line </title>
            < path
    strokeLinecap = "round"
    strokeLinejoin = "round"
    strokeWidth = { 2}
    d = "M5 13l4 4L19 7"
        />
        </svg>
    ),
    description: "Direct line to our team - your questions and feedback matter to us.",
  },
];
