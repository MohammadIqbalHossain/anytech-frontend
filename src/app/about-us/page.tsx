import { ABOUT_US_CARDS_STORY, ABOUT_US_CARDS_VALUES } from "@/libs/data";
import Cards from "../components/Global/cards";
import SectionHeader from "../components/Global/section-header";
import FutureFinance from "../components/Home/future-finance";
import AboutUsInfiniteScroll from "../components/About-us/about-us-infinite-scroll";
import OurMission from "../components/About-us/our-mission";
import { SectionTitle } from "@/libs/utlis/section-title";

export default function AboutUs() {
  return (
    <div>
      <SectionHeader
        subtitle="ABOUT US"
        title="Paving the way ahead for finance"
        description="We’re building technologies that will power the future of banking and beyond"
      />
      <FutureFinance
        subHeader="OUR STORY"
        header="Building the future today"
        descriptionParaTwo="Founded in January 2020, Any Technology is a Singapore-based fintech enterprise committed to helping the global financial services industry reimagine banking and payment services."
        frameImage={
          "https://cdn.sanity.io/images/6jywt20u/production/45215835736396e2687121e2610eca30b0a8ca2a-2121x1414.jpg?w=960&auto=format"
        }
      />
      <Cards _DATA={ABOUT_US_CARDS_STORY} className="mt-0" />
      <AboutUsInfiniteScroll />
      <OurMission />

      <SectionTitle subtitle="OUR VALUES" title="Built in our core" />
      <Cards
        _DATA={ABOUT_US_CARDS_VALUES}
        innerClassName="bg-white max-w-[300px]"
        className="items-start"
      />

      <FutureFinance
        subHeader="Our Founder"
        header="A trailblazer in finance"
        descriptionParaOne="Her unwavering dedication to innovation and impactful leadership has been instrumental in shaping the industry and driving the creation of pragmatic and user-centric financial technologies."
        descriptionParaTwo="Trong Lau is an experienced executive with extensive knowledge in the field of credit card systems. Throughout her career spanning over 30 years, she has played a pivotal role in introducing and executing advanced credit card and intelligent retail financial systems across the region."
        frameImage={
          "https://cdn.sanity.io/images/6jywt20u/production/e06d263063531f1b8cbe4a259e2fd946a0195972-422x493.png?w=640&auto=format"
        }
      />
    </div>
  );
}
