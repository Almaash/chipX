import { Target } from "lucide-react"

export function VisionMission() {
  return (
    <section className="bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Mission & Vision */}
          <div className="space-y-8">
            {/* Mission */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering India's future through semiconductor education and innovation excellence.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering every engineer with semiconductor training, skills, and opportunities — to build India’s future in chips.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/vision.png"
                alt="Vision and Mission"
                className="w-full max-w-md h-120 object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
