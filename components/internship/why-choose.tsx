"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Briefcase } from "lucide-react"

const features = [
    {
        title: "Industry Learning",
        desc: "Learn VLSI tools and techniques directly used in the industry.",
        icon: GraduationCap,
    },
    {
        title: "Expert Mentors",
        desc: "Hands-on design reviews and interview guidance from chip designers.",
        icon: Users,
    },
    {
        title: "Live Projects",
        desc: "Work on realistic project briefs and build a portfolio.",
        icon: Briefcase,
    },
]

export function WhyChoose() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-balance text-2xl font-semibold text-slate-900">Why Choose ChipX?</h2>
                <Badge className="bg-[#2f6fed] hover:bg-[#265dcc]">Career Focused</Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
                {features.map((f, i) => (
                    <TiltCard key={i} {...f} />
                ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2" aria-hidden="true">

            </div>
        </section>
    )
}

function TiltCard({
    title,
    desc,
    icon: Icon,
}: {
    title: string
    desc: string
    icon: React.ElementType
}) {
    return (
        <Card className="group transform border-[#e5e7eb] bg-white shadow-md transition-transform duration-300 hover:-rotate-1 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[#e5e7eb] bg-white">
                    <Icon className="h-5 w-5 text-[#2f6fed]" />
                </span>
                <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-slate-600">{desc}</p>
            </CardContent>
        </Card>
    )
}

