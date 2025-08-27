import Footer from "@/components/footer";
import Header from "@/components/header";
import Header2 from "@/components/header2";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#0a2342] text-white text-center py-28 overflow-hidden -mt-20">
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

        {/* Floating Bubble Decorations */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Reach Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>ChipX - Campus</strong>
            <br />
            WeWork Roshni Tech Hub – Coworking & Office Space in Marathahalli,
            Bangalore, Marathahalli Main Road, R.J. Gardens, Lakshminarayana
            Pura, EPIP Zone, Chinnapanna Halli, Bengaluru, Karnataka, India
          </p>

          <div className="mt-8">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg transition">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.850405214731!2d77.6435764152379!3d12.954922790878998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167601f7b7f1%3A0x7e9e6b5b2f9b79a2!2sWeWork%20Roshni%20Tech%20Hub!5e0!3m2!1sen!2sin!4v1692838420000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
