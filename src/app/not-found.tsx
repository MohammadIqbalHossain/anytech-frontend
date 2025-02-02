import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex size-full h-screen flex-col items-center justify-center gap-y-5">
      <h2>¯\_(ツ)_/¯</h2>
      <p>Page not found</p>
      <Link href="/" className="flex items-center justify-center">
        <span>Back Home</span> <ArrowRight className="h-5 w-5 ml-2" />
      </Link>
    </div>
  );
}
