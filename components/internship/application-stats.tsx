import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ApplicationStats() {
  return (
    <section id="apply" className="mx-auto w-full max-w-6xl px-6 pb-12 md:pb-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">Application Journey</h3>
          <p className="max-w-md text-sm text-slate-600">
            Apply early to secure your spot. Rolling evaluations with final decision at cohort deadline.
          </p>
        </div>

        <Card className="border-[#e5e7eb] shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Cohort Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-6 text-center">
              <Stat label="Days Until" value="1180" />
              <Stat label="Final Seats" value="22800" />
              <div className="col-span-3">
                <a
                  href="#"
                  className="inline-block rounded-md bg-[#2f6fed] px-4 py-2 text-sm font-medium text-white hover:bg-[#265dcc]"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-4xl font-extrabold tracking-tight text-slate-900">{value}</div>
      <div className="mt-1 text-xs text-slate-600">{label}</div>
    </div>
  )
}
