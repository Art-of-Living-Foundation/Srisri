import React from "react";
import { ArrowRight, Waves, Sun, Flower2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

interface CalServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  iconClassName?: string;
  bgGradient?: string;
  link: string;
  price: string;
}

function CalServiceCard({
  icon,
  title,
  description,
  benefits,
  duration,
  iconClassName,
  bgGradient,
  link,
  price,
}: CalServiceCardProps) {
  return (
    <div
      className={`${
        bgGradient || "bg-gradient-to-br from-sage-50/95 to-emerald-50/95"
      } p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-sage-100/50 group hover:-translate-y-1`}
    >
      <div className="flex justify-between items-start mb-8">
        <div
          className={`w-16 h-16 ${
            iconClassName || "text-emerald-600"
          } mb-8 transform group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-sage-100">
          <p className="text-2xl font-semibold text-emerald-800 flex items-center gap-1">
            <DollarSign className="w-5 h-5" />
            {price.replace("$", "")}
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-6">
        {title}
      </h3>
      <p className="text-sage-700 mb-8 leading-relaxed text-lg">
        {description}
      </p>
      <ul className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3 text-sage-700">
            <span className="text-emerald-600 font-medium text-xl">✦</span>
            <span className="text-lg">{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-4 border-t border-sage-200/30">
        <p className="text-sage-600 text-lg">
          <span className="mr-2">⌛</span>
          {duration}
        </p>
        <Link to={link}>
          <button className="bg-emerald-700/90 hover:bg-emerald-800 text-sage-50 px-8 py-3 rounded-full text-base font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 border border-emerald-600/30">
            Book Now <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}

function CalServices() {
  const services = [
    // {
    //   icon: <Search className="w-full h-full" />,
    //   title: "30-Min Initial Ayurvedic Consultation",
    //   description:
    //     "Unsure which treatment is right for you? Our expert will assess your dosha (body type) and guide you toward the best Ayurvedic practices for your health.",
    //   benefits: [
    //     "Personalized wellness assessment",
    //     "Custom treatment recommendations",
    //   ],
    //   duration: "30 minutes",
    //   iconClassName: "text-purple-600",
    //   bgGradient: "bg-gradient-to-br from-purple-50/95 to-violet-50/95",
    //   link: "https://calendly.com/srisritattvaca",
    //   price: "$10",
    // },
    {
      icon: <Waves className="w-full h-full" />,
      title: "Abhyanga – Ayurvedic Oil Massage",
      description:
        "A full-body oil massage using warm, herbal-infused oils to nourish tissues, improve circulation, and promote relaxation.",
      benefits: [
        "Relieves muscle tension & fatigue",
        "Supports joint health & detoxification",
      ],
      duration: "60 minutes",
      iconClassName: "text-cyan-600",
      bgGradient: "bg-gradient-to-br from-cyan-50/95 to-blue-50/95",
      link: "https://calendly.com/srisritattvaca/new-meeting?back=1&month=2025-04",
      price: "$140",
    },
    {
      icon: <Sun className="w-full h-full" />,
      title: "Shirodhara – Third Eye Therapy",
      description:
        "A continuous flow of warm oil over the forehead to calm the mind, relieve stress, and enhance mental clarity.",
      benefits: [
        "Deep relaxation & improved sleep",
        "Eases migraines, anxiety & tension",
      ],
      duration: "60 minutes",
      iconClassName: "text-amber-600",
      bgGradient: "bg-gradient-to-br from-amber-50/95 to-yellow-50/95",
      link: "https://calendly.com/srisritattvaca/ayurvedic-abhyanga-clone-1?back=1&month=2025-04",
      price: "$150",
    },
    {
      icon: <Waves className="w-full h-full" />,
      title: "Janu Basti – Knee Therapy",
      description:
        "A specialized Ayurvedic therapy for knee pain, stiffness, and joint discomfort, where warm herbal oil is retained over the knee joint to promote deep healing.",
      benefits: [
        "Relieves knee pain, inflammation & stiffness",
        "Lubricates joints & supports cartilage health",
      ],
      duration: "60 minutes",
      price: "$120",
      iconClassName: "text-emerald-600",
      bgGradient: "bg-gradient-to-br from-emerald-50/95 to-green-50/95",
      link: "https://calendly.com/srisritattvaca/kati-basti-clone?back=1&month=2025-04",
    },
    {
      icon: <Waves className="w-full h-full" />,
      title: "Greeva Basti – Neck Therapy",
      description:
        "A soothing treatment for neck pain, tension, and cervical issues, using warm herbal oil to ease muscle tightness and improve spinal flexibility.",
      benefits: [
        "Reduces neck stiffness & improves mobility",
        "Soothes nerve compression & relieves tension",
      ],
      duration: "60 minutes",
      price: "$120",
      iconClassName: "text-rose-600",
      bgGradient: "bg-gradient-to-br from-rose-50/95 to-red-50/95",
      link: "https://calendly.com/srisritattvaca/ayurvedic-abhyanga-clone?back=1&month=2025-04",
    },
    {
      icon: <Waves className="w-full h-full" />,
      title: "Kati Basti – Lower Back Therapy",
      description:
        "A deeply nourishing therapy for lower back pain, sciatica, and spinal discomfort, where warm medicated oil is pooled over the lumbar region for targeted relief.",
      benefits: [
        "Alleviates lower back pain & muscle tension",
        "Strengthens spinal tissues & enhances flexibility",
      ],
      duration: "60 minutes",
      price: "$120",
      iconClassName: "text-purple-600",
      bgGradient: "bg-gradient-to-br from-purple-50/95 to-violet-50/95",
      link: "https://calendly.com/srisritattvaca/greeva-basti-clone?back=1&month=2025-04",
    },
    {
      icon: <Flower2 className="w-full h-full" />,
      title: "Marma Therapy – Energy Healing",
      description:
        "A gentle yet powerful therapy that activates the 107 marma points, improving energy flow and releasing emotional & physical blockages.",
      benefits: [
        "Boosts vitality & immune function",
        "Promotes deep relaxation & healing",
      ],
      duration: "60 minutes",
      iconClassName: "text-emerald-600",
      bgGradient: "bg-gradient-to-br from-emerald-50/95 to-green-50/95",
      link: "https://calendly.com/srisritattvaca/shirodhara-clone?back=1&month=2025-04",
      price: "$125",
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-sage-50 to-sage-100/50">
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-br from-sage-900 via-emerald-900 to-sage-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <img src="/Logo.png" alt="logo" className="w-40 h-20 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-['Cormorant_Garamond'] text-sage-50 mb-6">
            Our Services
          </h1>
          <h2 className="text-2xl md:text-2xl font-['Cormorant_Garamond'] text-sage-50 mb-6">
            📍 California
          </h2>
          <p className="text-2xl text-sage-200 max-w-3xl mx-auto font-['Cormorant_Garamond'] italic">
            Ancient Wisdom for Modern Wellness
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <CalServiceCard key={index} {...service} />
          ))}
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

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-sage-900 to-emerald-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative">
            <h2 className="text-3xl font-['Cormorant_Garamond'] text-sage-50 mb-8">
              Begin Your Wellness Journey
            </h2>
            {/* <div className="space-y-4 mb-8">
              <p className="text-xl text-sage-200">📍 Washington DC, 20009</p>
              <p className="text-xl text-sage-200">📞 732-476-4754</p>
            </div> */}
            <Link to="https://calendly.com/srisritattvaca">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-sage-50 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-500/30">
                Book your Appointment Today <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalServices;
