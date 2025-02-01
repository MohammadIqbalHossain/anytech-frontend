import {
  BookImage,
  Brain,
  ChevronsLeftRightEllipsis,
  ClockArrowUp,
  Cpu,
  GitBranch,
  Lightbulb,
  LucideProps,
  Monitor,
  MonitorSmartphone,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import customerImg from "../../public/Assets/carousel/customer.avif";
import complianceImg from "../../public/Assets/carousel/compliance.avif";
import agileImg from "../../public/Assets/carousel/growth.avif";
import securityImg from "../../public/Assets/carousel/security.avif";

export interface ICardsData {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  iconBackground: string;
  title: string;
  description: string;
}

export const PHILOSOPHY_CARDS_DATA: ICardsData[] = [
  {
    icon: GitBranch,
    iconBackground: "#E9F3FF",
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: Lightbulb,
    iconBackground: "#D7F7F9",
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: Cpu,
    iconBackground: "#FFE2D5",
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

export const SERVICES_CARDS_CONSULT: ICardsData[] = [
  {
    icon: Brain,
    iconBackground: "#B9D9FF",
    title: "Consult",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: BookImage,
    iconBackground: "#B9D9FF",
    title: "Implement",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: Monitor,
    iconBackground: "#B9D9FF",
    title: "Opearate",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

export const SERVICES_CARDS_IMPLEMENT: ICardsData[] = [
  {
    icon: MonitorSmartphone,
    iconBackground: "#B9D9FF",
    title: "New Setup",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: ChevronsLeftRightEllipsis,
    iconBackground: "#B9D9FF",
    title: "System Upgrade",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: ClockArrowUp,
    iconBackground: "#B9D9FF",
    title: "System Migration",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

export const TABS = [
  {
    id: "customer",
    label: "Customer focused",
    title: "Enhance customer experience",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: customerImg,
  },
  {
    id: "agile",
    label: "Agile and adaptable",
    title: "Adapt to market changes",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance. Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: complianceImg,
  },
  {
    id: "compliance",
    label: "Compliance ready",
    title: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.\n\nTransform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image: agileImg,
  },
  {
    id: "secure",
    label: "Secure and safe",
    title: "Bank-grade security",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise. Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image: securityImg,
  },
];

export const CLIENT_LOGO_DATA = [
  "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
];
