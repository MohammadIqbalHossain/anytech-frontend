import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./ui/fonts";
import Footer from "./components/Global/footer";
import Navbar from "./components/Global/navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | AnyTech",
    default: "AnyTech",
  },
  description: "The official portfolio website by Iqbal Hossain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-[#FFFFFF]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
