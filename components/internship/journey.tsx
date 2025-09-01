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

export function Journey() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <h2 className="mb-8 text-2xl font-semibold text-slate-900">Your Learning Journey</h2>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          {steps.map((s, i) => (
            <Card key={i} className="border-[#e5e7eb] bg-white shadow-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb]"
                  aria-hidden="true"
                >
                  <s.icon className="h-5 w-5 text-[#2f6fed]" />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                  <div className="text-xs text-slate-600">{s.note}</div>
                </div>
                <Badge variant="secondary" className="border border-[#e5e7eb] bg-white text-slate-700">
                  Step {i + 1}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="h-fit border-[#e5e7eb] bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">What to Expect</CardTitle>
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
      </div>
    </section>
  )
}
