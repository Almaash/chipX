import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ListChecks, Layers3, Cpu, Presentation } from "lucide-react"
import { Button } from "../ui/button";

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
      <h2 className="mb-8 text-2xl font-semibold text-slate-900">
        Your Learning & Application Journey
      </h2>

      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        {/* Left Side – Journey Steps */}
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="flex justify-center items-center gap-4">
              {/* Icon on the left */}
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#2f6fed]/10 border border-[#2f6fed]/40">
                <s.icon className="h-6 w-6 text-[#2f6fed]" />
              </span>

              {/* Card on the right */}
              <Card className="flex-1 border border-[#2f6fed]/20 bg-[#f9faff] hover:shadow-md transition">
                <CardContent className="flex items-center justify-between ">
                  <div>
                    <div className="text-sm font-semibold text-[#1e3a8a]">
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-600">{s.note}</div>
                  </div>
                  <div className="text-[10px] font-medium text-[#2f6fed] bg-[#2f6fed]/10 px-2 py-0.5 rounded-md">
                    Step {i + 1}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Right Side – What to Expect + Application Stats */}
        <div className="space-y-6">
          <Card className="h-fit border border-[#2f6fed]/20 bg-gradient-to-br from-[#f0f6ff] to-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-[#1e3a8a]">
                What to Expect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p>
                Hands-on practice with structured guidance and weekly mentor checkpoints. Build confidence through
                practical work and clear milestones.
              </p>
              <ul className="list-disc space-y-1 pl-5 marker:text-[#2f6fed]">
                <li>Weekly live sessions and recorded modules</li>
                <li>Curated reading and lab assignments</li>
                <li>Portfolio-ready project artifacts</li>
                <li>Interview preparation and referrals</li>
              </ul>
              <div className="pt-2">
                <a
                  href="#apply"
                  className="inline-block rounded-md bg-[#2f6fed] px-4 py-2 text-sm font-medium text-white hover:bg-[#265dcc] shadow"
                >
                  Learn More
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#2f6fed]/20 bg-gradient-to-br from-white to-[#f0f6ff] shadow-md">
            <CardHeader>
              <CardTitle className="text-base text-[#1e3a8a]">Application Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 text-center">
                <Stat label="Days Until" value="1180" />
                <Stat label="Final Seats" value="22800" />

                <Button
                  className="rounded-md bg-[#2f6fed] px-6 py-2 text-sm font-semibold text-white 
                 hover:bg-[#265dcc] shadow-md transition-all duration-300 
                 hover:scale-105 active:scale-95"
                >
                  Apply Now
                </Button>
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
      <div className="text-3xl font-extrabold tracking-tight text-[#2f6fed]">{value}</div>
      <div className="mt-1 text-xs text-slate-600">{label}</div>
    </div>
  )
}
