import type { Metadata } from "next";
import { NavbarDemo } from "@/components/Navbar";
import FooterSection from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blogs | BetterWebStack",
  description:
    "Read our latest blogs on the latest trends in web development, Next.js, automation, and more.",
  alternates: {
    canonical: "https://betterwebstack.vercel.app/blogs",
  },
  openGraph: {
    title: "Blogs | BetterWebStack",
    description:
      "Read our latest blogs on the latest trends in web development, Next.js, automation, and more.",
    url: "https://betterwebstack.com/blogs",
    siteName: "BetterWebStack",
  },
};

export default function BlogsLayout({
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
