import Cards from "../components/Global/cards";
import SectionHeader from "../components/Global/section-header";
import SectionIntro from "../components/Home/section-intro";
import SolutionsSection from "../components/Services/solutiions";
import InfiniteLogoScroll from "../components/Services/infinite-scroll-logos";
import { SERVICES_CARDS_CONSULT, SERVICES_CARDS_IMPLEMENT } from "@/libs/data";
import { Banner } from "../components/About-us/our-mission";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <div>
      <SectionHeader
        subtitle="Our services"
        title="Reimagining banking solution"
        description="Enabling financial institutions to create unparalleled customer experiences"
      />
      {/* Introduction what we do */}
      <SectionIntro
        subHeader="What We Do"
        header="The power of data"
        descriptionParaOne="In today's rapidly evolving financial landscape, banks and financial institutions face unprecedented challenges. At AnyTech, we understand the critical need for continuous innovation and strategic decision-making in order to thrive."
        descriptionParaTwo="With our global perspective and cutting-edge solutions, we are here to help you create unparalleled customer experiences that will set you apart from the competition. Embark on a journey of transformation with AnyTech—one that will redefine what’s possible for your institution."
        frameImage={
          "https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=640&auto=format"
        }
      />
      <Cards
        _DATA={SERVICES_CARDS_CONSULT}
        innerClassName="border border-blue-200 bg-white hover:bg-blue-50 transiton duration-500 rounded-xl"
      />
      {/* The consult */}
      <SectionIntro
        subHeader="Taking the First Step"
        header="Consult"
        descriptionParaOne="Taking the leap towards digital transformation with the ambition of delivering augmented value in financial services can be daunting."
        descriptionParaTwo="Tap on the vast experience and deep knowledge of our experts. Our breadth of consulting expertise spans from applying the latest financial technological innovations to implementing risk-control strategies."
        frameImage={
          "https://cdn.sanity.io/images/6jywt20u/production/75de4e417de603ce210bea0f109e45a9e37d9a23-1206x816.png?w=640&auto=format"
        }
      />
      <Banner />

      <SectionIntro
        subHeader="seamless execution"
        header="Implement"
        descriptionParaOne="Ensuring sustainable success stems from the ability to seamlessly execute your digital transformation strategies. Combining deep technological expertise and a proven track record, we design and implement custom solutions for financial institutions that drive long-term success."
        descriptionParaTwo="Partner with AnyTech to bring new capabilities faster to market and accelerate revenue generation, increase operational efficiency and enhance the overall customer experience."
        frameImage={
          "https://cdn.sanity.io/images/6jywt20u/production/5a83471ce74af85f2e6df7366317403779473423-1002x1023.png?w=640&auto=format"
        }
      />

      <Cards
        _DATA={SERVICES_CARDS_IMPLEMENT}
        innerClassName="border border-blue-200 bg-white hover:bg-blue-50 transiton duration-500 rounded-xl"
      />

      <SolutionsSection />
      <InfiniteLogoScroll />
    </div>
  );
}
