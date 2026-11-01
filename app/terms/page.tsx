import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | BetterWebStack",
  description: "Read the terms and conditions for using BetterWebStack's website and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms and Conditions"
      updated={new Date().toLocaleDateString()}
      sections={[
        {
          title: "1. Introduction",
          body: "Welcome to BetterWebStack. By accessing our website and using our services, you agree to be bound by these Terms and Conditions.",
        },
        {
          title: "2. Services",
          body: "BetterWebStack provides web development, design, and related digital services. We reserve the right to modify or discontinue any service at any time.",
        },
        {
          title: "3. Intellectual Property",
          body: "Unless otherwise stated, we own the intellectual property rights for all material on BetterWebStack. All intellectual property rights are reserved.",
        },
        {
          title: "4. Client Obligations",
          body: "Clients must provide accurate information and necessary assets for project completion. Delays caused by the client may affect delivery timelines.",
        },
        {
          title: "5. Limitation of Liability",
          body: "In no event shall BetterWebStack be liable for any special, incidental, or consequential damages arising out of the use or inability to use our services.",
        },
      ]}
    />
  );
}
