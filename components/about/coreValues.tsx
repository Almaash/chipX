import { Users, Handshake, Lightbulb, Shield } from "lucide-react"

export function CoreValues() {
  const values = [
    { icon: Users, title: "We are an excellent team", color: "text-blue-400" },
    { icon: Handshake, title: "We collaborate with customers.", color: "text-blue-300" },
    { icon: Lightbulb, title: "We innovate to grow.", color: "text-blue-200" },
    { icon: Shield, title: "We create an environment of complete trust, respect, integrity and honor.", color: "text-blue-100" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#0b1f3a] via-[#122d52] to-[#1d4073] text-white py-20 px-6 overflow-hidden">


      {/* Background text */}
      <span className="absolute bottom-0 left-0 text-[8rem] md:text-[12rem] font-extrabold text-white/5 tracking-wider leading-none select-none">
        Chip<span className="text-[20rem]">X</span>
      </span>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-5xl mb-8">Our core values</h2>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-start space-y-3">
                <div className={`p-3 rounded-full bg-white bg-opacity-10 ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <p className="text-lg font-light">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
