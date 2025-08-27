"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "$5Bn+",
    label: "India’s semiconductor skill market in 2025",
  },
  {
    value: "60%",
    label: "Skill gap in VLSI & Physical Design talent",
  },
  {
    value: "0",
    label: "Colleges teaching advanced semiconductor skills",
  },
];

export default function TrackRecordSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  // Intersection Observer to start counting when section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#27548A] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* Left side: Title */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Semiconductors are the future
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            And the future belongs to the engineers who build them. <br />
            <span className="text-white font-semibold">
              ChipX develops you into one.
            </span>
          </p>
        </div>

        {/* Right side: Stats */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              start={startCount}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AnimatedStatProps {
  value: string;
  start: boolean;
  label: string;
}

function AnimatedStat({ value, start, label }: AnimatedStatProps) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!start) return;

    // Extract numeric value from string
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (numeric === 0) {
      setDisplayValue(value);
      return;
    }

    let current = 0;
    const duration = 2000; // 2 seconds animation
    const increment = numeric / (duration / 50); // update every 50ms

    const interval = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        clearInterval(interval);
        setDisplayValue(value); // final value including symbol
      } else {
        // show rounded number
        setDisplayValue(
          value.includes("%")
            ? Math.round(current) + "%"
            : value.includes("Bn")
            ? "$" + Math.round(current) + "Bn"
            : Math.round(current).toString()
        );
      }
    }, 50);

    return () => clearInterval(interval);
  }, [start, value]);

  return (
    <div className="px-4 sm:px-6">
      <p className="text-3xl md:text-4xl font-bold mb-2">{displayValue}</p>
      <p className="text-sm md:text-base text-gray-300">{label}</p>
    </div>
  );
}
