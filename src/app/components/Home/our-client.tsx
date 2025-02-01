import { CLIENT_LOGO_DATA } from "@/libs/data";
import Image from "next/image";

export default function OurCLient() {
  return (
    <div className="flex items-center flex-wrap gap-10 justify-center max-w-7xl mx-auto my-8">
      {(CLIENT_LOGO_DATA || []).map((logo: string, idx: number) => (
        <div key={idx} className="flex flex-wrap items-center">
          <Image src={logo} alt={logo + (idx + 1)} width={200} height={100} />
        </div>
      ))}
    </div>
  );
}
