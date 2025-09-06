"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"
import { PartnerBanner } from "./PartnerBanner"

export function InternshipDetails() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                    ChipX Semiconductor Internship Program
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-slate-600">
                    Accelerate your career in semiconductor design with hands-on training in Physical Design
                    Engineering. This intensive internship program, widely recognized in the VLSI industry,
                    equips you with real-world skills in advanced technology nodes. Flexible formats (online &
                    hybrid) ensure accessibility for students across locations.
                </p>
            </div>

            {/* Program Highlights */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Program Highlights</h3>
                    <ul className="space-y-3 text-slate-700">
                        <li>📌 Mode: Online & Hybrid (based on location)</li>
                        <li>⏳ Duration: 30 days to 6 months</li>
                        <li>🎓 Format: Daily 1-hour weekday sessions + weekend lab work</li>
                        <li>🛠️ Tools: Hands-on training with Synopsys industry-standard tools</li>
                    </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-md">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Why Join ChipX?</h3>
                    <ul className="space-y-3 text-slate-700">
                        <li>🔬 Industry-Relevant Learning: Latest VLSI tools & methodologies</li>
                        <li>👨‍🏫 Expert Mentorship: Learn from professionals with 10+ years of experience</li>
                        <li>📂 Project-Based Training: Real projects like Orca_top (32nm) & I2C Oscillator (14nm)</li>
                        <li>💼 Career Boost: Resume-ready portfolio, referrals, and interview prep</li>
                    </ul>
                </div>
            </div>

            {/* Eligibility & Certification */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 ">
                <div className="rounded-xl border border-slate-200 p-6 shadow-md bg-slate-50">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Eligibility Criteria</h3>
                    <p className="text-slate-700">
                        Open to BTech/BE/ME/MTech students with strong interest in VLSI design.
                    </p>
                    <ul className="mt-3 space-y-2 text-slate-700">
                        <li>✅ Minimum CGPA: 6.0 or above</li>
                        <li>✅ Passion for semiconductor careers</li>
                        <li>✅ Registration Fee applicable (early applications encouraged)</li>
                    </ul>
                </div>

                <div className="rounded-xl border border-slate-200  p-6 shadow-md bg-slate-50">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Certification & Recognition</h3>
                    <ul className="space-y-3 text-slate-700">
                        <li>📜 Official Offer Letter upon selection</li>
                        <li>🏆 Internship Completion Certificate</li>
                        <li>🚀 Career recognition in the global VLSI industry</li>
                    </ul>
                </div>
            </div>

            {/* Partner Invitation Banner */}
            {/* <PartnerBanner /> */}

        </section>

    )
}