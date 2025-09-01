import { Button } from "@/components/ui/button"
import { Check, BookOpen, Layers, Cpu, CircuitBoard, Network, Hammer } from "lucide-react"

export default function ChipXInternship() {
  const phases = [
    {
      icon: BookOpen,
      title: "Phase 1: Foundations",
      desc: "Intro to VLSI & Physical Design, Input Files & Tools",
    },
    {
      icon: Layers,
      title: "Phase 2: Synthesis",
      desc: "Logic Synthesis & Pre-STA",
    },
    {
      icon: Cpu,
      title: "Phase 3: Floorplanning & Power Planning",
      desc: "Floorplan & Powerplan Integration",
    },
    {
      icon: CircuitBoard,
      title: "Phase 4: Placement & CTS",
      desc: "Placement Optimization & Clock Tree Synthesis (CTS)",
    },
    {
      icon: Network,
      title: "Phase 5: Routing & Signoff",
      desc: "Routing & Signoff",
    },
    {
      icon: Hammer,
      title: "Phase 6: Capstone Project",
      desc: "Industry Simulation Project",
    },
  ]

  const benefits = [
    "100% Industry Training",
    "Hands-on with Industry EDA Tools",
    "Real-World Internship Projects",
    "Career Mentorship & Soft Skills",
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 space-y-16">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">ChipX Internship Journey</h1>
        <p className="text-lg text-muted-foreground">Inside the ChipX Campus & Beyond</p>
        <p className="text-sm font-medium">India’s First Dedicated Semiconductor Career School</p>
      </div>

      {/* Highlights */}
      <div className="bg-muted/30 p-6 rounded-xl text-center space-y-2">
        <p>👉 India’s $5Bn+ semiconductor opportunity needs 50,000+ skilled engineers by 2030.</p>
        <p>👉 ChipX is where you become one.</p>
        <p>👉 Designed with industry experts, using Synopsys EDA tools.</p>
        <Button className="mt-4">Download Brochure</Button>
      </div>

      {/* Phases as Cards */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center">Your Internship Journey</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="border rounded-xl p-5 flex flex-col items-start shadow-sm hover:shadow-md transition"
            >
              <phase.icon className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-semibold text-base">{phase.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why ChipX */}
      <div className="bg-muted/20 p-6 rounded-xl space-y-6">
        <h2 className="text-2xl font-semibold text-center">Why ChipX?</h2>
        <ul className="grid gap-3 md:grid-cols-2 max-w-2xl mx-auto text-sm">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" /> {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <Button size="lg" className="px-8 text-lg rounded-full">Apply Now</Button>
        {/* <p className="text-sm">Call us</p> */}
      </div>
    </section>
  )
}
