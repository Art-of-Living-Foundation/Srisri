import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function BookNowWithLocation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLocationSelect = (location: string) => {
    setIsDropdownOpen(false);
    if (location === "newjersey") {
      navigate("/services-newjersey");
    } else if (location === "california") {
      navigate("/services-california");
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-emerald-700 hover:bg-emerald-800 px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2 border border-emerald-600/30 w-full justify-center mt-2"
      >
        Book Now <ArrowRight className="w-4 h-4" />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-sage-800 rounded-xl shadow-lg py-2 z-50">
          <button
            onClick={() => handleLocationSelect("newjersey")}
            className="w-full text-left px-4 py-2 text-sage-200 hover:bg-sage-700 hover:text-emerald-300 transition-colors"
          >
            New Jersey
          </button>
          <button
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

export default BookNowWithLocation;
