import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Users, Rocket, Sparkles } from "lucide-react"

export function HiringHero({ className }: { className?: string }) {
  return (
    <section
      className={cn("relative w-full overflow-hidden bg-blue-100", className)}
      aria-labelledby="hiring-hero-title"
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -left-40 -bottom-56 h-96 w-96 rounded-full bg-blue-400 opacity-30" />
        <div className="pointer-events-none absolute -left-10 -bottom-28 h-72 w-72 rounded-full bg-blue-300 opacity-20" />
      </div>
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -right-40 -top-56 h-96 w-96 rounded-full bg-blue-400 opacity-30" />
        <div className="pointer-events-none absolute -right-10 -top-28 h-72 w-72 rounded-full bg-blue-300 opacity-20" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-start gap-12 px-6 py-16 md:flex-row md:items-center md:gap-16">
        {/* Copy block */}
        <div className="z-[1] max-w-xl">
          <h2
            id="hiring-hero-title"
            className="font-bold text-3xl leading-tight text-blue-950 sm:text-4xl md:text-5xl"
          >
            Hire Startup Ready Talent!
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-blue-900 md:text-xl">
            who create an impact from Day 1
          </p>
          <p className="mt-3 text-base leading-relaxed text-blue-800">
            vetted by 200+ startups & VCs
          </p>

          <div className="mt-8">
            <Button className="rounded-none bg-blue-900 px-6 py-6 text-white hover:bg-blue-800" size="lg">
              <span className="mr-3">JOIN OUR HIRING NETWORK</span>
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

        {/* Decorative banner items */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:flex md:flex-col md:gap-6">
          <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow hover:shadow-md transition">
            <Users className="h-6 w-6 text-blue-500" />
            <span className="text-blue-900 font-medium">200+ Startups Trust Us</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow hover:shadow-md transition">
            <Rocket className="h-6 w-6 text-blue-600" />
            <span className="text-blue-900 font-medium">Impact from Day 1</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow hover:shadow-md transition">
            <Sparkles className="h-6 w-6 text-blue-400" />
            <span className="text-blue-900 font-medium">VC-backed Talent</span>
          </div>
        </div>
      </div>
    </section>
  )
}
