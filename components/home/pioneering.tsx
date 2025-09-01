import { Play } from "lucide-react";
import Image from "next/image";

export default function PioneeringSection() {
  return (
    <section className="bg-white min-h-screen flex items-center relative">
      {/* Vertical line outside the card on left */}
      <div className="hidden md:block absolute left-60 top-0 h-full w-1 bg-gray-300"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="rounded-2xl shadow-lg bg-[#F5F7F7] p-10  m-4 md:m-12 lg:m-20">
          <h1 className="text-4xl font-serif text-gray-800 leading-tight pb-10">
            Pioneering{" "} 
            <em className="text-[#27548A]">Semiconductor</em>{" "}
            <em className="text-[#27548A]">Education</em>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                ChipX is a leading edtech company based in India. We specialize
                in semiconductor education and training. Our mission is to help
                individuals gain in-depth knowledge and skills in semiconductor
                technology.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We offer a range of courses designed by industry experts to
                ensure that our students are well-equipped to meet the demands
                of the rapidly changing tech landscape.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Join us to embark on a journey to excel in the semiconductor
                field.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="relative max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <div className="bg-gray-600 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/office.jpg"
                  alt="ChipX Semiconductor"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
