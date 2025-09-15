"use client";

import { cn } from "@/lib/utils";
import { Users, Award, Rocket } from "lucide-react";
import { CheckCircle } from "lucide-react";


export function PartnerBanner({ className }: { className?: string }) {
    return (
        <section
            className={cn(
                "relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-blue-950",
                className
            )}
            aria-labelledby="partner-banner-title"
        >
            {/* Decorative background gradient circles */}
            <div aria-hidden="true">
                <div className="pointer-events-none absolute -left-40 top-1/10 h-72 w-72 sm:h-80 sm:w-80 rounded-full border-4 border-blue-200 opacity-30" />
                <div className="pointer-events-none absolute -right-0 top-1/2 h-72 w-72 sm:h-80 sm:w-80 rounded-r-full border-4 border-blue-200 opacity-20 overflow-hidden" />
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 text-center">
                    <h2
                        id="partner-banner-title"
                        className="font-extrabold text-xl sm:text-2xl lg:text-3xl leading-snug"
                    >
                        Partner With <span className="text-blue-700">ChipX</span>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base lg:text-base leading-relaxed text-blue-800 max-w-3xl mx-auto font-bold">
                        At ChipX, we believe in building the future of semiconductors together with universities, colleges, and student communities.
                    </p>


                    <ul className="mt-4 text-sm sm:text-base lg:text-base leading-relaxed text-blue-800 max-w-3xl mx-auto text-left space-y-3">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                            <span>Internships – Industry-ready semiconductor internships for your students with hands-on tools & projects.</span>
                        </li>

                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                            <span>PG Programs – Long-term career programs in Physical Design & VLSI specialization.</span>
                        </li>

                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                            <span>Workshops & Webinars – Expert-led sessions to introduce students to chip design, EDA tools, and semiconductor careers.</span>
                        </li>

                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                            <span>College Fests & Events – Partner with ChipX to bring exciting VLSI competitions, talks, and panel discussions to your campus.</span>
                        </li>

                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                            <span>Conferences – Co-create Semiconductor Summits & Conferences with ChipX to put your institution on India’s semiconductor map.</span>
                        </li>
                    </ul>


                    <p className="mt-4 text-sm sm:text-base lg:text-base leading-relaxed text-blue-800 max-w-3xl mx-auto font-bold">
                        ✨ From universities and engineering departments to Training & Placement cells, E-Cells, student clubs, and professional societies — ChipX welcomes collaborations to nurture and empower the next generation of semiconductor innovators.
                    </p>

                    {/* Optional trust badges */}
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="flex flex-col items-center gap-2 rounded-xl bg-white px-4 py-4 shadow hover:shadow-md transition">
                            <Users className="h-6 w-6 text-blue-500" />
                            <span className="text-xs sm:text-sm font-medium text-blue-900 text-center">
                                Trusted by institutions & student communities
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 rounded-xl bg-white px-4 py-4 shadow hover:shadow-md transition">
                            <Award className="h-6 w-6 text-yellow-500" />
                            <span className="text-xs sm:text-sm font-medium text-blue-900 text-center">
                                Industry-ready PG Programs & internships
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 rounded-xl bg-white px-4 py-4 shadow hover:shadow-md transition">
                            <Rocket className="h-6 w-6 text-pink-500" />
                            <span className="text-xs sm:text-sm font-medium text-blue-900 text-center">
                                Workshops, webinars & conferences
                            </span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-10">
                        <a
                            href="https://luma.com/ja6ly2xt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                        >
                            Partner With Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
