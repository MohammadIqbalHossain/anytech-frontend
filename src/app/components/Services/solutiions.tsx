"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const SOLUTIONS = [
  {
    id: "caas",
    title: {
      prefix: "Any",
      suffix: "CaaS",
      prefixColor: "from-green-500 to-green-600",
      suffixColor: "from-blue-600 to-blue-700",
    },
    description:
      "Reimagine your card programmes with our Cards-as-a-Service (CaaS) solution. Streamline card management, deliver superior customer experiences, and more.",
    href: "/solutions/caas",
    service: "Cards-as-a-Service (CaaS)",
  },
  {
    id: "baas",
    title: {
      prefix: "Any",
      suffix: "BaaS",
      prefixColor: "from-purple-500 to-purple-600",
      suffixColor: "from-blue-600 to-blue-700",
    },
    description:
      "Dive into the future of banking with our Banking-as-a-Service (BaaS) platform that gives you the tools you need to adapt and scale in today's fast-paced digital environment.",
    href: "/solutions/baas",
    service: "Banking-as-a-Service (BaaS)",
  },
  {
    id: "paas",
    title: {
      prefix: "Any",
      suffix: "PaaS",
      prefixColor: "from-cyan-400 to-cyan-500",
      suffixColor: "from-blue-600 to-blue-700",
    },
    description:
      "Enhance your payment processing capabilities with our Payment-as-a-Service (PaaS) solution. Experience scalable and secure infrastructure that handles transactions with ease.",
    href: "/solutions/paas",
    service: "Payment-as-a-Service (PaaS)",
  },
];

export default function SolutionsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16"
        >
          Our solutions
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SOLUTIONS.map((solution) => (
            <motion.div key={solution.id} variants={itemVariants}>
              <Link href={solution.href} className="block h-full">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center gap-1 mb-1">
                        <span
                          className={`bg-clip-text text-transparent bg-gradient-to-r ${solution.title.prefixColor} font-bold text-2xl`}
                        >
                          {solution.title.prefix}
                        </span>
                        <span
                          className={`bg-clip-text text-transparent bg-gradient-to-r ${solution.title.suffixColor} font-bold text-2xl`}
                        >
                          {solution.title.suffix}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-slate-500 font-medium">
                        BY ANY TECH
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {solution.description.split(solution.service)[0]}
                      <span className="font-semibold text-slate-700">
                        {solution.service}
                      </span>
                      {solution.description.split(solution.service)[1]}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
