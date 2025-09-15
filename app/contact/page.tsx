"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { HiringHero } from "@/components/contact/hiring-hero";
import { PartnerBanner } from "@/components/internship/PartnerBanner";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "/images/office.jpg",
    "/images/ku2yjn.jpg",
    "/images/office1.jpg",
    "/images/office2.jpg",
    "/images/office3.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b1f3a] via-[#122d52] to-[#1d4073] text-white text-center py-16 sm:py-20 px-4 sm:px-6 lg:px-0 overflow-hidden -mt-20">
        <div className="mx-auto max-w-4xl relative z-10 pt-10">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Connect. Collaborate. Create the Future of Semiconductors.
          </p>

          {/* Contact Info */}
          <div className="mt-3 space-y-1">
            <p className="font-semibold text-xl sm:text-2xl">
              <a
                href="https://wa.me/918877809827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-green-500 transition-colors"
              >
                📞 +91-88778 09827
              </a>
            </p>
            <p className="text-blue-400 font-semibold text-xl ">📩 chipx.ind@gmail.com</p>
          </div>

          <p className="mt-3 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            ✨ Whether you’re a student, university, or semiconductor company — ChipX is here to empower your journey.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://luma.com/dztcpcy6"
              target="_blank"
              rel="noopener noreferrer"
            >

              <Button className="bg-white/10 hover:bg-white/20 text-white px-5 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer border border-white/20">
                Apply Now →
              </Button>
            </a>
            <a
              href="https://luma.com/ja6ly2xt"
              target="_blank"
              rel="noopener noreferrer"
            >

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
                Partner With Us →
              </Button>
            </a>
          </div>
        </div>
      </section>



      {/* Map + Content Side by Side */}
      <section className="py-16 px-4 sm:px-6 lg:px-0">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
       <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl shadow-2xl border overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.132691798345!2d77.70217939999999!3d12.9633599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ab1884f719%3A0xd72102ad7e3b3947!2sWeWork%20Roshni%20Tech%20Hub%20%E2%80%93%20Coworking%20%26%20Office%20Space%20in%20Marathahalli%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1756374929694!5m2!1sen!2sin"
    className="w-full h-full rounded-xl shadow-lg border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


          {/* Content Section */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Reach Us
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <strong>ChipX - Campus</strong>
              <br />
              WeWork Roshni Tech Hub – Coworking & Office Space in Marathahalli,
              Bangalore, Marathahalli Main Road, R.J. Gardens, Lakshminarayana
              Pura, EPIP Zone, Chinnapanna Halli, Bengaluru, Karnataka, India
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://luma.com/2kcayp93"
                target="_blank"
                rel="noopener noreferrer"
              >

                <Button
                  // onClick={() =>
                  //   window.open(
                  //     "https://wa.me/918877809827?text=Hi%20there!%20Welcome%20to%20ChipX%20%E2%80%93%20India%E2%80%99s%20First%20Semiconductor%20School",
                  //     "_blank"
                  //   )
                  // }
                  className=" cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition flex items-center gap-2"
                >
                  <span>📱</span>
                  Schedule a Visit
                </Button>
              </a>
            </div>

          </div>
        </div>
      </section>

      <PartnerBanner />
      <HiringHero />

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-white px-4 lg:px-0">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            ChipX Campus Gallery
          </h2>

          <div className="flex flex-wrap justify-center gap-10">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer w-[calc(33.333%-1rem)]"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full sm:max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
