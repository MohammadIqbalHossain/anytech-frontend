import { SectionTitle } from "@/libs/utlis/section-title";
import SectionHeader from "../components/Global/section-header";
import SectionIntro from "../components/Home/section-intro";
import Cards from "../components/Global/cards";
import { ANYSASS_BENIFITS_CARDS, ANYSASS_FEATURES_CARDS } from "@/libs/data";
import InfiniteLogoScroll from "../components/Services/infinite-scroll-logos";
import BankingCard from "./banking-cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnySasS",
};

export default function AnySass() {
  return (
    <div>
      <SectionHeader
        subtitle="our solutions"
        title="Robust card issuance and management"
        colors={{
          primary: "##1CC800",
          secondary: "#82DE75",
          accent: "#DAF6D5",
          background: "#1CC800",
          bottomLine: "#1E95A8",
        }}
      />
      <SectionIntro
        subHeader="Anycaas"
        header="The future of card services"
        descriptionParaOne="Our Cards-as-a-Service (CaaS) solution empowers financial institutions to issue, manage and process payment cards seamlessly and securely. Cut down on the complexities and costs of traditional card issuance and processing systems by leveraging our robust platform that streamlines card management."
        descriptionParaTwo="Champion the future of card services with AnyCaaS. Revolutionise your card programmes, deliver superior customer experiences, and drive growth."
        frameImage={
          "https://cdn.sanity.io/images/6jywt20u/production/ed8251e42d17f9739645130f8714616ad807ba13-375x455.png?w=375&auto=format"
        }
      />

      <SectionTitle
        title="Revolutionise your card programmes"
        subtitle="Key Features"
      />

      <Cards _DATA={ANYSASS_FEATURES_CARDS} className="items-start" />

      <SectionTitle title="Superior customer experiences" subtitle="benefits" />
      <Cards
        _DATA={ANYSASS_BENIFITS_CARDS}
        className="items-start"
        innerClassName="bg-white"
      />
      <InfiniteLogoScroll />

      <div className="flex max-w-6xl mx-auto gap-10">
        <BankingCard
          title="Banking redesigned for innovation"
          description="Dive into the future of banking with our Banking-as-a-Service (BaaS) platform that gives you the tools you need to scale, innovate and adapt in today's fast-paced digital environment."
          serviceName="AnyBaaS"
          serviceType="BaaS"
          // Optional custom gradient colors
          gradientColors={{
            from: "#845EC2",
            to: "#4B4453",
          }}
          // Optional custom href
          href="/services/banking"
        />
        <BankingCard
          title="Banking redesigned for innovation"
          description="Dive into the future of banking with our Banking-as-a-Service (BaaS) platform that gives you the tools you need to scale, innovate and adapt in today's fast-paced digital environment."
          serviceName="AnyBaaS"
          serviceType="BaaS"
          // Optional custom gradient colors
          gradientColors={{
            from: "#845EC2",
            to: "#4B4453",
          }}
          // Optional custom href
          href="/services/banking"
        />
      </div>
    </div>
  );
}
