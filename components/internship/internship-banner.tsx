import { Button } from "@/components/ui/button"

export function InternshipBanner() {
  return (
    <section
      className="relative isolate bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/lab-hero.png')" }}
      aria-labelledby="internship-heading"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b1f3a]/80" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <h2
          id="internship-heading"
          className="text-pretty text-3xl font-extrabold text-white md:text-4xl"
        >
          ChipX
          <br />
          Semiconductor
          <br />
          Internship Program
        </h2>
        <p className="mt-4 max-w-2xl text-slate-200">
          Join an industry-style internship: collaborate with peers, get expert feedback, and gain
          real lab experience.
        </p>
        <div className="mt-8 flex gap-3">
          <Button className="bg-[#2f6fed] hover:bg-[#265dcc]" size="lg">
            Learn More
          </Button>
          <Button
            className="border border-white/30 bg-transparent text-white hover:bg-white/10"
            size="lg"
            variant="secondary"
          >
            Join Now
          </Button>
        </div>
      </div>
    </section>
  )
}
