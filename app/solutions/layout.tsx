import { NavbarDemo } from "@/components/Navbar";
import FooterSection from "@/components/Footer";

export default function SolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarDemo />
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
}
