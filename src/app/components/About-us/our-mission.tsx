import { SectionTitle } from "@/libs/utlis/section-title";
import { WaveLines } from "../Home/web-lines";

export default function OurMission() {
  return (
    <div
      className="mx-4 lg:mx-0 lg:my-10
    "
    >
      <SectionTitle subtitle="OUR MISSION" title="Redefining tomorrow" />

      <div className="max-w-6xl mx-auto relative bg-blue-800 p-4 lg:p-14 rounded-lg">
        <div className="z-1">
          <WaveLines />
          <p className="upercase text-cyan-200 text-lg font-bold z-10">
            our mission
          </p>
          <h1 className="font-extrabold text-[4vw] lg:text-5xl text-white">
            To redefine global finance by empowering institutions with
            technology that drives value and growth.
          </h1>
        </div>
      </div>
    </div>
  );
}
