import Image from "next/image";
import InfiniteLogoScroll from "../Services/infinite-scroll-logos";

export default function AboutUsInfiniteScroll() {
  return (
    <div className="relative max-w-6xl mx-auto py-20 lg:px-0 px-10 ">
      <Image
        src="https://anytxn.com/icons/about-us/empower.svg"
        alt=""
        width={100}
        height={100}
        className="absolute top-0 left-0 mb-10"
      ></Image>
      <div className="lg:text-5xl font-extrabold border-b border-blue-200 pb-10">
        Empowering more than{" "}
        <span className="text-blue-600 font-bold">
          40 financial institutions
        </span>{" "}
        to transform in a digital-first world.
      </div>
      {/* Using infinite logo scroll here */}
      <InfiniteLogoScroll />
    </div>
  );
}
