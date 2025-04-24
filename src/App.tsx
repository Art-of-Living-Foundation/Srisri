import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  Star,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa6";
import About from "./pages/About";
import Services from "./pages/Services";
import CalServices from "./pages/calservices";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import BookingModal from "./components/BookingModal";
import ScrollToTop from "./components/ScrolltoTop";
import LocationPickerButton from "./components/LocationPicker";

function LocationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLocationSelect = (location: string) => {
    if (location === "newjersey") {
      navigate("/services-newjersey");
    } else if (location === "california") {
      navigate("/services-california");
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sage-200 hover:text-emerald-300 transition-colors"
      >
        Services{" "}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-sage-800 rounded-xl shadow-lg py-2 z-50">
          <button
            onClick={() => handleLocationSelect("newjersey")}
            className="w-full text-left px-4 py-2 text-sage-200 hover:bg-sage-700 hover:text-emerald-300 transition-colors"
          >
            New Jersey
          </button>
          <button
            // disabled
            onClick={() => handleLocationSelect("california")}
            className="w-full text-left px-4 py-2 text-sage-200 hover:bg-sage-700 hover:text-emerald-300 transition-colors"
          >
            California
          </button>
        </div>
      )}
    </div>
  );
}

function MobileLocationDropdown({ onSelect }: { onSelect?: () => void }) {
  const navigate = useNavigate();

  const handleClick = (location: string) => {
    if (location === "newjersey") {
      navigate("/services-newjersey");
    } else if (location === "california") {
      navigate("/services-california");
    }
    onSelect?.(); // call the callback to close both menus
  };

  return (
    <div className="space-y-2 pl-4 mt-2 border-l border-sage-700">
      <button
        onClick={() => handleClick("newjersey")}
        className="block w-full text-left text-sage-200 hover:text-emerald-300 transition-colors"
      >
        New Jersey
      </button>
      <button
        onClick={() => handleClick("california")}
        className="block w-full text-left text-sage-200 hover:text-emerald-300 transition-colors"
      >
        California
      </button>
    </div>
  );
}

function Home() {
  // const [isBookingOpen, setIsBookingOpen] = useState(false);
  // const [selectedService, setSelectedService] = useState("");

  // const handleBookNow = (service: string = "General Consultation") => {
  //   setSelectedService(service);
  //   setIsBookingOpen(true);
  // };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center mandala-pattern pt-20"
        style={{
          backgroundColor: "#2D4F3C",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sage-900/70 to-emerald-950/70" />
        <div className="relative z-10 text-center text-sage-50 px-4 max-w-4xl mx-auto">
          <img
            src="Logo.png"
            alt="Logo"
            className="w-40 h-20 mx-auto mb-8 mt-16 sm:mt-10 text-emerald-400"
          />
          <h1 className="text-5xl md:text-7xl font-['Cormorant_Garamond'] mb-6 tracking-wide">
            Sri Sri Tattva Wellness
          </h1>
          <p className="text-2xl md:text-4xl mb-4 font-['Cormorant_Garamond'] italic">
            Restore • Rebalance • Rejuvenate
          </p>
          <p className="text-xl md:text-2xl mb-8 text-emerald-200">
            Authentic Ayurvedic Healing in New Jersey and California
          </p>
          <p className="text-lg md:text-xl mb-12 text-sage-200 max-w-3xl mx-auto leading-relaxed">
            At Sri Sri Tattva Wellness, we bring the ancient wisdom of Ayurveda
            to modern wellness. As a Sri Sri Tattva franchise, we offer holistic
            treatments that restore balance, relieve stress, and revitalize your
            mind and body. Whether you're seeking deep relaxation, pain relief,
            or overall well-being, our therapies are designed to nurture your
            health naturally.
          </p>
          <LocationPickerButton className="bg-emerald-700 hover:bg-emerald-800 text-sage-50 px-10 py-5 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-600/30 mb-12 md:mb-0">
            Book your Appointment
            <ArrowRight className="w-5 h-5" />
          </LocationPickerButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-sage-50/50 p-10 rounded-2xl shadow-sm border border-sage-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Certified Practitioners
            </h3>
            <p className="text-lg text-sage-700">
              Our experts are trained in Ayurveda & Marma Therapy, ensuring
              authentic and effective treatments
            </p>
          </div>
          <div className="bg-sage-50/50 p-10 rounded-2xl shadow-sm border border-sage-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Meditation-Backed Care
            </h3>
            <p className="text-lg text-sage-700">
              Therapists practice Art of Living SKY breathwork & Meditation for
              deeper healing
            </p>
          </div>
          <div className="bg-sage-50/50 p-10 rounded-2xl shadow-sm border border-sage-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-6" />
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-sage-900 mb-4">
              Ancient Wisdom
            </h3>
            <p className="text-lg text-sage-700">
              Therapies rooted in ancient wisdom combined with modern expertise
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-8 text-sage-900">
            Ancient Wisdom for Modern Wellness
          </h2>
          <p className="text-xl text-sage-800 leading-relaxed">
            At Sri Sri Tattva Wellness, we bring the timeless wisdom of Ayurveda
            to modern life. As a Sri Sri Tattva franchise, we offer holistic
            treatments that harmonize your body, mind, and spirit through
            traditional practices passed down through generations.
          </p>
          <div className="lotus-divider mt-12" />
        </div>

        {/* Enhanced Testimonials Section */}
        <div className="bg-gradient-to-br from-sage-50 to-emerald-50 rounded-3xl p-12 shadow-sm border border-sage-100 mb-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-12 text-center text-sage-900">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                text: "The authentic Ayurvedic treatments here have brought profound healing and balance to my life. The Shirodhara therapy helped me sleep better and reduced my anxiety significantly!",
                author: "Priya M.",
                treatment: "Shirodhara Therapy",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              },
              {
                text: "Found my sanctuary of peace and healing. The Abhyanga massage was deeply relaxing, and my joint pain has reduced significantly. The practitioners here are truly gifted.",
                author: "Michael R.",
                treatment: "Abhyanga Massage",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-white/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-['Cormorant_Garamond'] text-sage-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-sage-600">{testimonial.treatment}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-lg text-sage-700 italic mb-4">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 text-lg font-medium"
            >
              Read More Reviews <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-4xl font-['Cormorant_Garamond'] mb-8 text-sage-900">
            Begin Your Path to Wellness
          </h2>
          <LocationPickerButton className="bg-emerald-700 hover:bg-emerald-800 text-sage-50 px-10 py-5 rounded-full text-xl font-medium transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto border border-emerald-600/30">
            <Calendar className="w-6 h-6" />
            Book your Appointment today
          </LocationPickerButton>
        </div>
      </div>

      {/* <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedService}
      /> */}
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-sage-50">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-sage-900/95 text-sage-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-3">
                  {/* <img src="logo.jpeg" alt="Logo" className="w-16 h-10" /> */}
                  <span className="text-xl font-['Cormorant_Garamond'] tracking-wide">
                    Sri Sri Tattva Wellness
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <LocationDropdown />

                <Link
                  to="/reviews"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  to="/about"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Book Now Button */}
              <div className="hidden md:block">
                <LocationPickerButton className="bg-emerald-700 hover:bg-emerald-800 px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 border border-emerald-600/30 w-full justify-center mt-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </LocationPickerButton>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-sage-200 hover:text-emerald-300 transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-sage-800">
                <div className="flex flex-col gap-4">
                  <div>
                    <button
                      onClick={() => {
                        setIsServicesOpen(true);
                      }}
                      className="flex items-center gap-1 text-sage-200 hover:text-emerald-300 transition-colors"
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isServicesOpen && (
                      <MobileLocationDropdown
                        onSelect={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      />
                    )}
                  </div>

                  <Link
                    to="/reviews"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    Reviews
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sage-200 hover:text-emerald-300 transition-colors"
                  >
                    Contact
                  </Link>
                  <LocationPickerButton
                    className="bg-emerald-700 hover:bg-emerald-800 px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 border border-emerald-600/30 w-full justify-center mt-2"
                    onSelect={() => setIsMenuOpen(false)}
                  >
                    Book Now <ArrowRight className="w-4 h-4" />
                  </LocationPickerButton>
                </div>
              </div>
            )}
          </div>
        </nav>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services-newjersey" element={<Services />} />
          <Route path="/services-california" element={<CalServices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          service="General Consultation"
        />

        {/* Footer */}
        <footer className="bg-sage-900 text-sage-100">
          <div className="max-w-6xl mx-auto px-4">
            {/* Main Footer Content */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-24 text-emerald-400">
                    <img
                      src="Logo.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xl font-['Cormorant_Garamond'] tracking-wide">
                    Sri Sri Tattva Wellness
                  </span>
                </div>
                <p className="text-sage-300 text-sm leading-relaxed">
                  Authentic Ayurvedic healing and wellness services in New
                  Jersey and California. Experience traditional therapies for
                  modern well-being.
                </p>
              </div>

              {/* Quick Links Section - now placed on the right */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-sage-50">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="text-sage-300 hover:text-emerald-400 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <LocationDropdown />
                  </li>
                  <li>
                    <Link
                      to="/reviews"
                      className="text-sage-300 hover:text-emerald-400 transition-colors"
                    >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-sage-300 hover:text-emerald-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-sage-800 py-6 text-center text-sage-400 text-sm">
              © {new Date().getFullYear()} Sri Sri Tattva Wellness. All rights
              reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
