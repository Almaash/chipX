import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ListChecks, Layers3, Cpu, Presentation } from "lucide-react"

const steps = [
    { icon: BookOpen, title: "Initial: Core Journey", note: "Semiconductor basics and tooling" },
    { icon: Layers3, title: "Design Modules", note: "RTL, FSMs, and IP blocks" },
    { icon: Presentation, title: "Mentor Reviews", note: "Iterate with expert feedback" },
    { icon: Cpu, title: "Project Sprints", note: "Build and present real modules" },
    { icon: ListChecks, title: "Mock Interviews", note: "Get ready for hiring" },
]

export default function JourneyWithApplication() {
    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
            <h2 className="mb-8 text-2xl font-semibold text-slate-900">Your Learning & Application Journey</h2>

            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
                {/* Left Side – Journey Steps */}
                <div className="space-y-4">
                    {steps.map((s, i) => (
                        <div key={i} className="flex justify-center items-center  gap-4">
                            {/* Icon on the left */}
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#2f6fed] bg-white shadow-sm">
                                <s.icon className="h-5 w-5 text-black" />
                            </span>

                            {/* Card on the right */}
                            <Card className="flex-1 border-[#e5e7eb] bg-white shadow-sm">
                                <CardContent className="flex items-center justify-between ">
                                    <div>
                                        <div className="text-md font-semibold text-slate-900">{s.title}</div>
                                        <div className="text-xs text-slate-600">{s.note}</div>
                                    </div>
                                    {/* <Badge
                    variant="secondary"
                    className="border border-[#e5e7eb] bg-white text-slate-700"
                  >
                    Step {i + 1}
                  </Badge> */}
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Right Side – What to Expect + Application Stats */}
                <div className="space-y-6">
                    <Card className="h-fit border-[#e5e7eb] bg-white shadow-sm">
                        <CardHeader className="">
                            <CardTitle className="text-xl">What to Expect</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm text-slate-700">
                            <p>
                                Hands-on practice with structured guidance and weekly mentor checkpoints. Build confidence through
                                practical work and clear milestones.
                            </p>
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Weekly live sessions and recorded modules</li>
                                <li>Curated reading and lab assignments</li>
                                <li>Portfolio-ready project artifacts</li>
                                <li>Interview preparation and referrals</li>
                            </ul>
                            <div className="pt-2">
                                <a
                                    href="#apply"
                                    className="inline-block rounded-md bg-[#2f6fed] px-4 py-2 text-sm font-medium text-white hover:bg-[#265dcc]"
                                >
                                    Learn More
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-[#e5e7eb] shadow-md">
                        <CardHeader className="">
                            <CardTitle className="text-base">Application Journey</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <Stat label="Days Until" value="1180" />
                                <Stat label="Final Seats" value="22800" />
                                <a
                                    href="#"
                                    className="inline-block rounded-md bg-[#2f6fed] px-4 py-2 text-sm font-medium text-white hover:bg-[#265dcc]"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <div className="text-3xl font-extrabold tracking-tight text-slate-900">{value}</div>
            <div className="mt-1 text-xs text-slate-600">{label}</div>
        </div>
    )
}
