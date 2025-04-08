import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="pt-20 bg-sage-50">
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-br from-sage-900 via-emerald-900 to-sage-900 flex justify-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-6xl mx-auto px-4">
          <img src="/logo.jpeg" alt="logo" className="w-40 h-20 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-sage-50 mb-6">
            Healing Through Ayurveda & Wellness
          </h1>
          <p className="text-xl text-sage-200 max-w-3xl">
            Sri Sri Tattva Wellness is founded on the principles of authentic
            Ayurveda, offering traditional treatments to support your mind,
            body, and spirit.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="md:col-span-8 relative">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-600/30 -translate-x-4 -translate-y-4"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-600/30 translate-x-4 translate-y-4"></div>
          <h3 className="text-2xl font-semibold text-sage-800 mb-2">
            🌿 About Sri Sri Tattva Wellness
          </h3>
          <p className="text-sage-700 mb-4 leading-relaxed">
            Rooted in authenticity. Inspired by nature. Sri Sri Tattva Wellness
            brings the ancient healing wisdom of Ayurveda to your doorstep,
            offering authentic treatments designed to restore balance,
            strengthen immunity, and enhance overall well-being.
          </p>
          <p className="text-sage-700 mb-4 leading-relaxed">
            We are part of the global Sri Sri Tattva family—over 40 years of
            excellence in wellness, health products, education, and holistic
            living. Our approach blends timeless Ayurvedic principles with
            modern quality standards for safe, effective, and transformative
            care.
          </p>
          <p className="text-sage-700 mb-4 leading-relaxed">
            Health is more than symptom relief—it's the harmony of body, mind,
            and spirit. Every session is designed to support long-term vitality
            through personalized, natural healing. Inspired by Gurudev Sri Sri
            Ravi Shankar’s vision, we integrate Ayurveda with yoga, breathwork,
            and meditation.
          </p>
          <h4 className="text-xl font-medium text-sage-800 mb-2 mt-4">
            Why Choose Sri Sri Tattva Wellness?
          </h4>
          <ul className="list-disc pl-6 text-sage-700 space-y-2">
            <li>✔ Backed by a global Ayurvedic legacy</li>
            <li>
              ✔ Therapists trained in India and certified in traditional
              techniques
            </li>
            <li>✔ Personalized wellness plans rooted in ancient knowledge</li>
            <li>✔ Integration of Marma therapy, breathwork, and meditation</li>
            <li>✔ Ethical, natural, and sustainable approach to health</li>
          </ul>
          <p className="text-sage-700 mt-4 leading-relaxed">
            Whether you're seeking pain relief, stress reduction, or deep
            rejuvenation, Sri Sri Tattva Wellness is your sanctuary for holistic
            healing and lasting well-being.
          </p>
        </div>
        {/* Sri Sri Tattva Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="lotus-divider mb-12" />
          <div className="bg-gradient-to-br from-sage-50 to-emerald-50 rounded-3xl p-8 shadow-sm border border-sage-100">
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Sri Sri Tattva Franchise
            </h3>
            <p className="text-xl text-sage-700 mb-8">
              We are proud to be a Sri Sri Tattva Franchise, ensuring that every
              treatment follows the highest standards of Ayurvedic tradition and
              expertise.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-sage-900 to-emerald-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative">
            <h2 className="text-3xl font-['Cormorant_Garamond'] text-sage-50 mb-8">
              Begin Your Wellness Journey
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-sage-200">📍 Washington DC, 20009</p>
              <p className="text-xl text-sage-200">📞 732-476-4754</p>
            </div>
            <Link to="https://calendly.com/vedichealingwellness">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-sage-50 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-500/30">
                Book an Appointment Today <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
