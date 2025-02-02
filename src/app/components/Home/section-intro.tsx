"use client";

import { StaticImageData } from "next/image";
import SectionIntroImg from "../../../../public/Assets/finance.avif";
import weblinesDesktop4 from "../../../../public/Assets/backgrounds/WaveLinesDesktop4.svg";
import ctaMobileLine from "../../../../public/Assets/backgrounds/ctaMobileWaveLines.svg";
import { FloatingFrame } from "./floating-theme";
import { BankIcon, ChartIcon, DocumentIcon } from "./icons";

interface IFinace {
  subHeader?: string;
  header: string;
  descriptionParaOne?: string;
  descriptionParaTwo?: string;
  frameImage?: StaticImageData | string;
  imageDescription?: string;
}

export default function SectionInro({
  subHeader,
  header,
  descriptionParaOne,
  descriptionParaTwo,
  frameImage = SectionIntroImg,
}: IFinace) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to right, rgb(229, 231, 235), white)",
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
      }}
    >
      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-blue-600 font-bold tracking-wider">
              {subHeader}
            </p>
            <h1 className="text-2xl lg:text-6xl font-extrabold text-[#0B305B] leading-tight">
              {header}
            </h1>
            <div className="space-y-4 text-slate-700">
              <p className="lg:text-lg text-md font-bold">
                {descriptionParaOne}
              </p>
              <p className="lg:text-md text-sm">{descriptionParaTwo}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:p-8 lg:min-h-[500px] flex items-center justify-center relative overflow-hidden">
            <FloatingFrame
              image={{
                src: frameImage,
                alt: "Professional business woman using tablet",
                width: 1000,
                height: 500,
              }}
              icons={[
                {
                  icon: <DocumentIcon />,
                  position: { top: "15%", left: "0%" },
                  label: "Document Management",
                },
                {
                  icon: <ChartIcon />,
                  position: { bottom: "30%", left: "10%" },
                  label: "Analytics Dashboard",
                },
                {
                  icon: <BankIcon />,
                  position: { top: "10%", right: "0%" },
                  label: "Banking Services",
                },
              ]}
              backgroundImages={{
                desktop: weblinesDesktop4,
                mobile: ctaMobileLine,
                className: "opacity-50",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
