import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface LocationPickerButtonProps {
  children: React.ReactNode;
  className?: string;
  onSelect?: () => void; // NEW
}

export default function LocationPickerButton({
  children,
  className = "",
  onSelect,
}: LocationPickerButtonProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationSelect = (location: string) => {
    setIsDropdownOpen(false);
    onSelect?.(); // 👈 Close outer menu
    if (location === "newjersey") {
      navigate("/services-newjersey");
    } else if (location === "california") {
      navigate("/services-california");
    }
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className={className}
      >
        {children}
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-sage-800 rounded-xl shadow-lg py-2 z-50">
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
