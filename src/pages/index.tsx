import { HeroSection } from "@site/src/components/pages/home/HeroSection";
import { Layout } from "../components/layout/Layout";
import { AdvantagesSection } from "../components/pages/home/AdvantagesSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AdvantagesSection />
    </Layout>
  );
}
