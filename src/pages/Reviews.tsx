import { useState } from "react";
import { Star, MessageSquare, ArrowRight } from "lucide-react";
import ReviewModal from "../components/ReviewModal";

interface Review {
  id: number;
  name: string;
  treatment: string;
  rating: number;
  content: string;
  image: string;
  date: string;
}

function Reviews() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Priya M.",
      treatment: "Shirodhara",
      rating: 5,
      content:
        "My experience with Shirodhara was truly life-changing. It helped me sleep better and reduced my anxiety significantly! The therapist was incredibly knowledgeable and made me feel completely at ease throughout the session.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Arun P.",
      treatment: "Abhyanga",
      rating: 5,
      content:
        "Abhyanga massage was deeply relaxing. My joint pain has reduced, and I feel more energized. The warm oils and expert techniques used made a significant difference in my overall well-being.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Jessica R.",
      treatment: "Marma Therapy",
      rating: 5,
      content:
        "The team is professional, knowledgeable, and truly cares about your well-being. The Marma therapy sessions have helped me find balance in both body and mind.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      date: "March 2024",
    },
    {
      id: 4,
      name: "Michael S.",
      treatment: "Basti",
      rating: 5,
      content:
        "After years of lower back pain, the Basti treatment has given me remarkable relief. The attention to detail and personalized care here is exceptional.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      date: "January 2024",
    },
  ];

  const treatments = [
    "all",
    ...new Set(reviews.map((review) => review.treatment)),
  ];

  const filteredReviews =
    activeFilter === "all"
      ? reviews
      : reviews.filter((review) => review.treatment === activeFilter);

  return (
    <div className="pt-20 bg-gradient-to-b from-sage-50 to-sage-100/50">
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-br from-sage-900 via-emerald-900 to-sage-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <img src="/Logo.png" alt="logo" className="w-40 h-20 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-['Cormorant_Garamond'] text-sage-50 mb-6">
            Testimonials & Reviews 🌟
          </h1>
          <p className="text-2xl text-sage-200 max-w-3xl mx-auto font-['Cormorant_Garamond'] italic">
            Real Stories of Healing & Transformation
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {treatments.map((treatment) => (
            <button
              key={treatment}
              onClick={() => setActiveFilter(treatment)}
              className={`px-6 py-3 rounded-full text-lg transition-all ${
                activeFilter === treatment
                  ? "bg-emerald-700 text-sage-50"
                  : "bg-sage-100 text-sage-700 hover:bg-sage-200"
              }`}
            >
              {treatment.charAt(0).toUpperCase() + treatment.slice(1)}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-sage-50/95 to-emerald-50/95 p-8 rounded-3xl shadow-lg border border-sage-100/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-['Cormorant_Garamond'] text-sage-900">
                    {review.name}
                  </h3>
                  <p className="text-sage-600">{review.treatment}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sage-700 text-lg mb-4 italic">
                "{review.content}"
              </p>
              <p className="text-sage-500 text-sm">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Leave Review CTA */}
        <div className="text-center mt-24">
          <div className="lotus-divider mb-12 opacity-30" />
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-8 text-sage-900">
            Share Your Sacred Experience
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-700/90 hover:bg-emerald-800 text-sage-50 px-12 py-6 rounded-full text-xl font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto border border-emerald-600/30 group"
          >
            <MessageSquare className="w-6 h-6" />
            Leave a Review
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        treatments={treatments}
      />
    </div>
  );
}

export default Reviews;
