import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | BetterWebStack",
  description: "Read how BetterWebStack collects, uses and protects your information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated={new Date().toLocaleDateString()}
      sections={[
        {
          title: "1. Information We Collect",
          body: "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us.",
        },
        {
          title: "2. How We Use Information",
          body: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.",
        },
        {
          title: "3. Data Security",
          body: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          title: "4. Third-Party Services",
          body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such third-party sites.",
        },
        {
          title: "5. Contact Us",
          body: "If you have any questions about this Privacy Policy, please contact us via our contact page.",
        },
      ]}
    />
  );
}
