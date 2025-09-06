import { Users, Handshake, Lightbulb, Shield } from "lucide-react"

export function CoreValues() {
  const values = [
    { icon: Users, title: "We are an excellent team", color: "from-blue-400 to-blue-600" },
    { icon: Handshake, title: "We collaborate with customers.", color: "from-indigo-400 to-indigo-600" },
    { icon: Lightbulb, title: "We innovate to grow.", color: "from-teal-400 to-teal-600" },
    { icon: Shield, title: "We create an environment of complete trust, respect, integrity and honor.", color: "from-purple-400 to-purple-600" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#0b1f3a] via-[#122d52] to-[#1d4073] text-white py-16 px-6 overflow-hidden">
      {/* Background watermark */}
      <span className="absolute bottom-0 left-0 text-[5rem] md:text-[8rem] font-extrabold text-white/5 tracking-wider leading-none select-none">
        Chip<span className="text-[12rem]">X</span>
      </span>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our <span className="text-blue-400">Core Values</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all shadow-md hover:shadow-blue-500/20"
            >
              <div
                className={`p-4 rounded-full bg-gradient-to-r ${value.color} mb-3 shadow-md`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-base font-light">{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
