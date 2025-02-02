import { Metadata } from "next";
import SectionHeader from "../components/Global/section-header";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactUs() {
  return (
    <div className="relative h-[1800px] lg:h-[900px]">
      <div className="">
        <SectionHeader
          title="Let's Talk"
          subtitle="Contact Us"
          description="Have questions about building the next generation of banking experiences, our pricing, or our customer success stories?"
          colors={{
            primary: "#00DFE0",
            secondary: "#1F80F0",
            accent: "#0059BF",
            background: "#1F80F0",
            bottomLine: "#9747FF",
          }}
        />
      </div>
      <div className="absolute lg:right-20 lg:top-20 top-25 z-10 bg-white my-20 p-12 shadow-2xl rounded-2xl mx-4 lg:mx-0">
        <ContactForm />
      </div>
    </div>
  );
}
