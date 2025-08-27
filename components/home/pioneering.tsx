import { Play } from "lucide-react";
import Image from "next/image";

export default function PioneeringSection() {
  return (
    <section className="bg-white min-h-screen flex items-center relative">
      {/* Vertical line outside the card on left */}
      <div className="hidden md:block absolute left-60 top-0 h-full w-1 bg-gray-300"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="rounded-2xl shadow-lg bg-[#F5F7F7] p-10 md:p-16 m-4 md:m-12 lg:m-20">
          <h1 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight pb-5">
            Pioneering{" "}
            <em className="text-green-700">Semiconductor</em>{" "}
            <em className="text-green-700">Education</em>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                ChipX - Semiconductor School is a premier educational technology
                platform based in Bengaluru, KA, dedicated to revolutionizing
                the way semiconductor education is delivered.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We offer cutting-edge courses designed to equip students with
                the skills and knowledge needed in today's fast-evolving tech
                landscape. Our expert trainers, state-of-the-art resources, and
                industry partnerships ensure that learners receive the highest
                quality education and hands-on experience.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Join us at ChipX to embark on a transformative learning journey
                in the world of semiconductors.
              </p>
            </div>

            {/* Right Video/Image Section */}
            <div className="relative max-w-sm mx-auto">
              <div className="bg-gray-600 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/ChipElectro.gif"
                  alt="Sudhish Kumar"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
