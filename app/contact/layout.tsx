import type { Metadata } from "next";
import { NavbarDemo } from "@/components/Navbar";
import FooterSection from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | BetterWebStack",
  description:
    "Get in touch with BetterWebStack for support, project inquiries, or collaboration.",
  openGraph: {
    title: "Contact Us | BetterWebStack",
    description:
      "Reach out for project support, Next.js development, automation, or custom builds.",
    url: "https://betterwebstack.com/contact",
    siteName: "BetterWebStack",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <NavbarDemo />
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
}
