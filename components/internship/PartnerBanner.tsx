"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Users, Award, Rocket } from "lucide-react"

export function PartnerBanner({ className }: { className?: string }) {
    return (
        <section
            className={cn(
                "relative w-full  py-20 text-blue-950",
                className
            )}
            aria-labelledby="partner-banner-title"
        >
            {/* Decorative background gradient circles */}
          <div aria-hidden="true">
  <div className="pointer-events-none absolute -left-40 top-1/10 h-96 w-96 rounded-full border-4 border-blue-200 opacity-30" />
  <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full border-4 border-blue-200 opacity-20" />
</div>


            {/* Content wrapper with equal spacing */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 ">
                <div className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg px-8 py-12 md:px-16 md:py-16 text-center ">
                    <h2
                        id="partner-banner-title"
                        className="font-extrabold text-[clamp(2rem,4vw,3rem)] leading-tight"
                    >
                        Partner With <span className="text-blue-700">ChipX</span>
                    </h2>

                    <p className="mt-6 text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-blue-800 max-w-3xl mx-auto">
                        Join forces with{" "}
                        <span className="font-semibold text-blue-900">ChipX</span> to empower
                        your students with a{" "}
                        <span className="font-semibold text-blue-900">
                            global-standard semiconductor internship program
                        </span>{" "}
                        that delivers real-world impact from day one.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        {/* <Button className="rounded-md bg-blue-900 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-800 transition">
                            Apply Now
                        </Button> */}
                        <Button
                            variant="outline"
                            className="rounded-md border border-blue-300 bg-white px-8 py-3 text-lg font-semibold text-blue-900 shadow-lg hover:bg-blue-800 transition cursor-pointer"
                        >
                            Partner With Us
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="flex flex-col items-center gap-2 rounded-xl bg-white px-6 py-5 shadow hover:shadow-md transition">
                            <Users className="h-8 w-8 text-blue-500" />
                            <span className="text-sm font-medium text-blue-900">
                                Trusted by Institutions
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 rounded-xl bg-white px-6 py-5 shadow hover:shadow-md transition">
                            <Award className="h-8 w-8 text-yellow-500" />
                            <span className="text-sm font-medium text-blue-900">
                                Industry-Ready Curriculum
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2 rounded-xl bg-white px-6 py-5 shadow hover:shadow-md transition">
                            <Rocket className="h-8 w-8 text-pink-500" />
                            <span className="text-sm font-medium text-blue-900">
                                Global Internship Access
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
