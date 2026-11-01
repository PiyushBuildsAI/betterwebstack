import SolutionsContent from "@/components/solutions/SolutionsContent";

export const metadata = {
  title: "Solutions | BetterWebStack",
  description:
    "Explore our comprehensive web development solutions including Next.js development, SEO, AI integration, and more.",
  alternates: {
    canonical: "https://betterwebstack.vercel.app/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
