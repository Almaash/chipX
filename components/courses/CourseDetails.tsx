"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function CourseDetails() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
          PG Program in Semiconductor <br /> Specialization in Physical Design
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-slate-600">
          A 6-Month Masterclass | India’s First Dedicated Semiconductor School
        </p>
      </div>

      {/* Why Physical Design */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-md mb-12">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Why Physical Design (PD)?
        </h3>
        <p className="text-slate-700 leading-relaxed">
          In today’s <span className="font-semibold">$1T global semiconductor industry</span>, 
          Physical Design Engineering is one of the most in-demand roles. Every chip — from smartphones 
          to AI processors — goes through the PD stage before manufacturing.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          For ECE graduates, this is the fastest-growing career path in VLSI, offering high salaries, 
          global opportunities, and cutting-edge work. With thousands of unfilled PD jobs in India alone, 
          this is where the future is being built.
        </p>
      </div>

      {/* What You’ll Master + Why ChipX */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* What You’ll Master */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">What You’ll Master at ChipX</h3>
          <ul className="space-y-3 text-slate-700">
            <li>⚡ Place & Route (PnR): Implement circuits on silicon with precision</li>
            <li>✅ Physical Verification (PV): Ensure designs meet manufacturing standards</li>
            <li>⏱ Static Timing Analysis (STA) & IR Drop Analysis: Guarantee performance & reliability</li>
            <li>📏 Sign-off Methodologies: Proven industry checks before fabrication</li>
            <li>🌀 Synthesis to GDSII Flow: End-to-end backend VLSI design training</li>
            <li>🛠 Hands-on with Synopsys, Cadence & Siemens EDA tools guided by experts</li>
          </ul>
        </div>

        {/* Why ChipX PG Program is Different */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Why ChipX PG Program is Different
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li>🔬 Real-Time Projects — industry-level designs, not just theory</li>
            <li>🏭 Industry Labs — real-world chip design workflows</li>
            <li>👨‍🏫 Mentorship — 10+ years of PD experience</li>
            <li>📂 Capstone Projects — build an industry-ready portfolio</li>
            <li>💼 Placement-Ready — resume, interview prep & referrals</li>
            <li>🚀 Fast-Track Career — PD engineers earn up to ₹30 LPA in India</li>
            <li>🤝 Networking — connect with peers in Bengaluru’s VLSI hub</li>
          </ul>
        </div>
      </div>

      {/* Career Advantage */}
      <div className="mt-12">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Your Career Advantage</h3>
          <ul className="space-y-2 text-slate-700">
            <li>🎓 <span className="font-semibold">Eligibility:</span> BTech / MTech / BE / ME - ECE, EEE, CSE, CS & IT, AI, VLSI freshers & early-career engineers (0–6 years exp.)</li>
            <li>⏳ <span className="font-semibold">Duration:</span> 6 months intensive</li>
            <li>🏫 <span className="font-semibold">Mode:</span> Hybrid (ChipX Campus @ WeWork Tech Hub, Marathahalli, Bengaluru)</li>
            <li>🎯 <span className="font-semibold">Outcome:</span> Become an industry-ready Physical Design Engineer</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
