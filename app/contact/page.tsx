"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "/images/office.jpg",
    "/images/office1.jpg",
    "/images/office2.jpg",
    "/images/office3.jpg",
    "/images/ku2yjn.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b1f3a] via-[#122d52] to-[#1d4073] text-white text-center py-28 overflow-hidden -mt-20">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Connect, Innovate, and Empower Your Journey Forward
          </p>
          <p className="mt-4 text-blue-400 font-semibold text-xl">
            +91 - 88778 09827
          </p>
        </div>
      </section>

      {/* Map + Content Side by Side */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.132691798345!2d77.70217939999999!3d12.9633599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ab1884f719%3A0xd72102ad7e3b3947!2sWeWork%20Roshni%20Tech%20Hub%20%E2%80%93%20Coworking%20%26%20Office%20Space%20in%20Marathahalli%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1756374929694!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Reach Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>ChipX - Campus</strong>
              <br />
              WeWork Roshni Tech Hub – Coworking & Office Space in Marathahalli,
              Bangalore, Marathahalli Main Road, R.J. Gardens, Lakshminarayana
              Pura, EPIP Zone, Chinnapanna Halli, Bengaluru, Karnataka, India
            </p>
            <div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg transition">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            Our Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[90vh] rounded-lg shadow-lg"
            />
            {/* <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button> */}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
