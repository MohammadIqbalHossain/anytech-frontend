import { SectionTitle } from "@/libs/utlis/section-title";
import { WaveLines } from "../Home/wave-lines";

export default function OurMission() {
  return (
    <div className="mx-4 lg:mx-0 lg:my-10">
      <SectionTitle subtitle="OUR MISSION" title="Redefining tomorrow" />
      <Banner isButton={true} />
    </div>
  );
}

export function Banner({ isButton = false }) {
  return (
    <div className="relative flex max-w-6xl mx-auto bg-blue-800 p-4 lg:p-14 rounded-3xl overflow-hidden">
      <div className="absolute inset-0">
        <WaveLines />
      </div>
      {/* Position the wave lines */}
      <div className="relative z-10">
        {" "}
        {/* Add positioning and z-index to the content container */}
        <p className="uppercase text-cyan-200 text-lg font-bold">our mission</p>
        <h1 className="font-extrabold text-[4vw] lg:text-5xl text-white">
          To redefine global finance by empowering institutions with technology
          that drives value and growth.
        </h1>
      </div>
      {isButton && <button>my button</button>}
    </div>
  );
}
