"use client";

import { motion } from "framer-motion";
import { Cpu, Hammer, Briefcase, Users, Star } from "lucide-react";

export function FiveReasons() {
  const highlights = [
    {
      title: "Focused First",
      desc: "Starting with Physical Design Engineering, the most in-demand VLSI role.",
      icon: Cpu,
    },
    {
      title: "Hands-On",
      desc: "Access to Synopsys EDA tools & real-world projects.",
      icon: Hammer,
    },
    {
      title: "Internship Pathway",
      desc: "Learn → Intern → Placement support for a complete career roadmap.",
      icon: Briefcase,
    },
    {
      title: "Beyond Tech",
      desc: "Soft skills & personality development for confident communication.",
      icon: Users,
    },
    {
      title: "Industry Mentors",
      desc: "Learn directly from engineers with 10+ years of global experience.",
      icon: Star,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800 py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 font-bold">
          Choose <span className="text-blue-700">ChipX</span>
        </h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 mb-16 max-w-2xl mx-auto"
        >
          Why ChipX: A unique learning and career pathway to excel in the
          semiconductor industry.
        </motion.p>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#2563eb",
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-start text-left border-l-4 border-gray-300 px-10 rounded-tl-2xl rounded-bl-2xl transition-colors duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
