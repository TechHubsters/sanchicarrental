import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-4">
          Something went wrong. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}

const HowItWorks = () => {
  const cities = [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Aurangabad",
    "Kolhapur",
    "Solapur",
    "Amravati",
    "Thane",
    "Akola",
    "Ahmednagar",
    "Chandrapur",
    "Jalgaon",
    "Parbhani",
    "Goa",
    "Latur",
    "Nanded",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Wardha",
    "Yavatmal",
    "Dhule",
    "Jalna",
    "Buldhana",
    "Osmanabad",
    "Sindhudurg",
    "Palghar",
    "Raigad",
    "Trimbakeshwar",
    "Shirdi",
    "Lonavala",
    "Mahabaleshwar",
    "Panchgani",
  ];

  const navigate = useNavigate();
  const [journeyType, setJourneyType] = useState("Onward");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupSearch, setPickupSearch] = useState("");
  const [dropSearch, setDropSearch] = useState("");
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDropDropdown, setShowDropDropdown] = useState(false);
  const [journeyDate, setJourneyDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [journeyTime, setJourneyTime] = useState(""); // Added journey time state

  // Global error handling
  useEffect(() => {
    const handleError = (error) => {
      console.warn("Global error caught:", error);
    };

    const handleUnhandledRejection = (event) => {
      console.warn("Unhandled promise rejection:", event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
    };
  }, []);

  const handleSearch = () => {
    try {
      if (!pickup || !drop || !journeyDate || !journeyTime) {
        alert("Please fill all required fields.");
        return;
      }
      navigate("/booking", {
        state: {
          journeyType,
          pickup,
          drop,
          journeyDate,
          journeyTime,
          returnDate: journeyType === "Return" ? returnDate : null,
        },
      });
    } catch (error) {
      console.error("Navigation error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleJourneyChange = (type) => {
    try {
      setJourneyType(type);
      if (type === "Onward") {
        setDrop(""); // Reset drop location for onward journey
      }
    } catch (error) {
      console.error("Journey change error:", error);
    }
  };

  const handlePickupChange = (city) => {
    try {
      setPickup(city);
      setShowPickupDropdown(false);
      if (journeyType === "Onward") {
        setDrop(""); // Reset drop location when pickup changes for onward journey
      }
    } catch (error) {
      console.error("Pickup change error:", error);
    }
  };

  const handleDropChange = (city) => {
    try {
      setDrop(city);
      setShowDropDropdown(false);
    } catch (error) {
      console.error("Drop change error:", error);
    }
  };

  const filteredCitiesForDrop =
    journeyType === "Onward"
      ? cities.filter((city) => city !== pickup)
      : cities;

  // Safe event handler wrapper
  const safeEventHandler = (handler) => {
    return (e) => {
      try {
        if (e && e.target && e.target.value !== undefined) {
          handler(e.target.value);
        }
      } catch (error) {
        console.warn("Event handler error:", error);
      }
    };
  };

  // Safe click handler wrapper
  const safeClickHandler = (handler) => {
    return () => {
      try {
        handler();
      } catch (error) {
        console.warn("Click handler error:", error);
      }
    };
  };

  return (
    <div className="bg-white py-3 px-5">
      <h1 className="text-center text-2xl font-bold mb-8">
        Book Your Perfect Ride!
      </h1>

      {/* Journey Type Toggle */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="journeyType"
              value="Onward"
              checked={journeyType === "Onward"}
              onChange={() => handleJourneyChange("Onward")}
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-md ${
                journeyType === "Onward"
                  ? "bg-button text-white"
                  : "bg-gray-200"
              }`}
            >
              Onward Journey
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="journeyType"
              value="Return"
              checked={journeyType === "Return"}
              onChange={() => handleJourneyChange("Return")}
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-md ${
                journeyType === "Return"
                  ? "bg-button text-white"
                  : "bg-gray-200"
              }`}
            >
              Return Journey
            </span>
          </label>
        </div>
      </div>

      {/* Location and Date Inputs */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Pickup Location */}
        <div className="relative w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">From City</label>
          <div
            className="px-4 py-2 border rounded-md cursor-pointer flex items-center justify-between"
            onClick={safeClickHandler(() =>
              setShowPickupDropdown((prev) => !prev)
            )}
          >
            {pickup || "Select Pickup Location"}
            <span className="ml-2" style={{ color: "#FE9A03FC" }}>
              ▼
            </span>{" "}
            {/* Color changed */}
          </div>
          {showPickupDropdown && (
            <div className="absolute z-10 bg-white border rounded-md shadow-lg w-full mt-2 max-h-60 overflow-y-auto">
              <input
                type="text"
                placeholder="Search City"
                value={pickupSearch}
                onChange={safeEventHandler(setPickupSearch)}
                className="w-full px-4 py-2 border-b"
              />
              <ul>
                {cities
                  .filter((city) =>
                    city.toLowerCase().includes(pickupSearch.toLowerCase())
                  )
                  .map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={safeClickHandler(() => handlePickupChange(city))}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Drop Location */}
        <div className="relative w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">To City</label>
          <div
            className="px-4 py-2 border rounded-md cursor-pointer flex items-center justify-between"
            onClick={safeClickHandler(() =>
              setShowDropDropdown((prev) => !prev)
            )}
          >
            {drop || "Select Drop Location"}
            <span className="ml-2" style={{ color: "#FE9A03FC" }}>
              ▼
            </span>{" "}
            {/* Color changed */}
          </div>
          {showDropDropdown && (
            <div className="absolute z-10 bg-white border rounded-md shadow-lg w-full mt-2 max-h-60 overflow-y-auto">
              <input
                type="text"
                placeholder="Search City"
                value={dropSearch}
                onChange={safeEventHandler(setDropSearch)}
                className="w-full px-4 py-2 border-b"
              />
              <ul>
                {filteredCitiesForDrop
                  .filter((city) =>
                    city.toLowerCase().includes(dropSearch.toLowerCase())
                  )
                  .map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={safeClickHandler(() => handleDropChange(city))}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Journey Dates */}
        <div className="w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">
            Journey Date
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md appearance-none"
              value={journeyDate}
              onChange={safeEventHandler(setJourneyDate)}
            />
            {!journeyDate && (
              <span className="absolute left-4 top-2 text-gray-500 pointer-events-none">
                {/* Select Date */}
              </span>
            )}
          </div>
        </div>

        {/* Journey Time */}
        <div className="w-full max-w-sm">
          <label className="block text-lg font-semibold mb-2">
            Journey Time
          </label>
          <div className="relative">
            <input
              type="time"
              className="w-full px-4 py-2 border rounded-md appearance-none"
              value={journeyTime}
              onChange={safeEventHandler(setJourneyTime)}
            />
            {!journeyTime && (
              <span className="absolute left-4 top-2 text-gray-500 pointer-events-none">
                {/* Select Time */}
              </span>
            )}
          </div>
        </div>

        {journeyType === "Return" && (
          <div className="w-full max-w-sm">
            <label className="block text-lg font-semibold mb-2">
              Return Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md"
              value={returnDate}
              onChange={safeEventHandler(setReturnDate)}
            />
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-2 font-sans text-base text-black rounded-md shadow-md bg-gray-200 hover:bg-button hover:text-white"
          onClick={safeClickHandler(handleSearch)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

const HowItWorksWithErrorBoundary = () => (
  <ErrorBoundary>
    <HowItWorks />
  </ErrorBoundary>
);

export default HowItWorksWithErrorBoundary;
