import { Target } from "lucide-react"

export function VisionMission() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Mission & Vision */}
          <div className="space-y-8">
            {/* Mission */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Empowering India’s future through semiconductor education, innovation, and career excellence.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To equip every engineer with the skills, training, and opportunities to shape India’s semiconductor future.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/vision.png"
                alt="Vision and Mission"
                className="w-full max-w-xs sm:max-w-md object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
