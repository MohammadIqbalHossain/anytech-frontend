import { SectionTitle } from "@/libs/utlis/section-title";
import Image from "next/image";
import { FC } from "react";
import sectionImage from "../../../../public/Assets/section.avif";
import { PHILOSOPHY_CARDS_DATA } from "@/libs/data";
import Cards from "../Global/cards";

const Philosophy: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SectionTitle
        subtitle="OUR PHILOSOPHY"
        title="Human-centred innovation"
      />
      <div className="mx-10">
        <Image src={sectionImage} alt="my-image" width={1200} height={500} />

        <Cards _DATA={PHILOSOPHY_CARDS_DATA} />
      </div>
    </div>
  );
};

export default Philosophy;
