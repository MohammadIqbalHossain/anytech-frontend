import { Metadata } from "next";
import AnimatedCounters from "./components/Home/counter";
import FinanceCarousel from "./components/Home/finance-carousel";
import SectionIntro from "./components/Home/section-intro";
import { HeroSection } from "./components/Home/hero-section";
import OurCLient from "./components/Home/our-client";
import Philosophy from "./components/Home/philosophy";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SectionIntro
        subHeader="POWERING THE FUTURE OF FINANCE"
        header="Uncovering new ways to delight customers"
        descriptionParaOne="AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services."
        descriptionParaTwo=" Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success."
        imageDescription="CEO, and founder"
      />
      <Philosophy />
      <FinanceCarousel />
      <AnimatedCounters />
      <OurCLient />
    </div>
  );
}
