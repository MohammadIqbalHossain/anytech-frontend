"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export interface ServiceCardProps {
  title: string;
  description: string;
  serviceName: string;
  serviceType: "BaaS" | "CaaS" | "PaaS";
  href?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
}

const defaultGradients = {
  BaaS: { from: "#845EC2", to: "#4B4453" },
  CaaS: { from: "#00C9A7", to: "#1F80F0" },
  PaaS: { from: "#FF6B6B", to: "#845EC2" },
};

const getDefaultHref = (serviceType: "BaaS" | "CaaS" | "PaaS") => {
  const serviceMap = {
    BaaS: "/services/baas",
    CaaS: "/services/caas",
    PaaS: "/services/paas",
  };
  return serviceMap[serviceType];
};

export default function BankingCard({
  title,
  description,
  //   serviceName,
  serviceType,
  href,
  gradientColors,
}: ServiceCardProps) {
  const gradient = gradientColors || defaultGradients[serviceType];
  const linkHref = href || getDefaultHref(serviceType);

  return (
    <Link href={linkHref}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group relative rounded-xl p-[1px] cursor-pointer"
      >
        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, ${gradient.from}, ${gradient.to})`,
          }}
        />

        {/* Card Content */}
        <Card className="relative bg-white lg:p-16 p-4 rounded-xl h-full border border-slate-100">
          <div className="space-y-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {title}
            </h3>

            <p className="text-slate-600 leading-relaxed">{description}</p>

            {/* Service Logo Section */}
            <div className="flex items-center gap-2">
              <span
                className="text-xl font-semibold bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(45deg, ${gradient.from}, ${gradient.to})`,
                }}
              >
                {`Any${serviceType}`}
              </span>
              <div className="h-5 w-[2px] bg-slate-200" />
              <span className="text-xs uppercase tracking-wider text-slate-400">
                by
              </span>
              <p>ANYTECH</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
