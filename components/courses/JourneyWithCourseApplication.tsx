import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, PhoneCall, ClipboardCheck, UserCheck, MailCheck, GraduationCap } from "lucide-react"
import { Button } from "../ui/button"

const steps = [
  { icon: FileText, title: "Apply Online", note: "Fill out the ChipX application form" },
  { icon: PhoneCall, title: "Initial Screening Call", note: "Our admissions team connects with you" },
  { icon: ClipboardCheck, title: "ChipX Screening Test", note: "Assess your aptitude & fundamentals" },
  { icon: UserCheck, title: "Personal Interview", note: "One-on-one with ChipX mentors" },
  { icon: MailCheck, title: "Result Announcement", note: "Via email & phone call" },
  { icon: GraduationCap, title: "Registration & Admission", note: "Confirm your seat and begin your journey" },
]

export default function JourneyWithCourseApplication() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      <h2 className="mb-8 text-2xl font-semibold text-slate-900">
        Your Application Process
      </h2>

      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        {/* Left Side – Application Steps */}
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="flex justify-center items-center gap-4">
              {/* Icon on the left */}
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#2f6fed]/10 border border-[#2f6fed]/40">
                <s.icon className="h-6 w-6 text-[#2f6fed]" />
              </span>

              {/* Card on the right */}
              <Card className="flex-1 border border-[#2f6fed]/20 bg-[#f9faff] hover:shadow-md transition">
                <CardContent className="flex items-center justify-between">
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

        {/* Right Side – Info & CTA */}
        <div className="space-y-6">
          <Card className="h-fit border border-[#2f6fed]/20 bg-gradient-to-br from-[#f0f6ff] to-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-[#1e3a8a]">
                What to Expect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-700">
              <p>
                ✨ From application to admission, we make sure only the most
                motivated and talented engineers join the program.
              </p>
              <ul className="list-disc space-y-1 pl-5 marker:text-[#2f6fed]">
                <li>Straightforward and transparent process</li>
                <li>Guidance at every stage</li>
                <li>Personal interaction with mentors</li>
                <li>Selection focused on aptitude & passion</li>
              </ul>
              <div className="pt-2">
                <a
                  href="#apply"
                  className="inline-block rounded-md bg-[#2f6fed] px-4 py-2 text-sm font-medium text-white hover:bg-[#265dcc] shadow"
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
