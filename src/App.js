import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { useRef } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Booking from "./components/CarList";

// Policy Pages
import AboutUs from "./components/policies/AboutUs";
import ContactUs from "./components/policies/ContactUs";
import TermsConditions from "./components/policies/TermsConditions";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import RefundCancellationPolicy from "./components/policies/RefundCancellationPolicy";
import ShippingDeliveryPolicy from "./components/policies/ShippingDeliveryPolicy";

function App() {
  const carsRef = useRef(null);
  const aboutRef = useRef(null);

  const handleScroll = (section) => {
    if (section === "cars" && carsRef.current) {
      carsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 w-[30%] h-full bg-[#19746B]"></div>

      <Router>
        <Navbar onScroll={handleScroll} />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage carsRef={carsRef} aboutRef={aboutRef} />} />
            <Route path="/home" element={<HomePage carsRef={carsRef} aboutRef={aboutRef} />} />
            <Route path="/booking" element={<Booking />} />
            
            {/* Policy Pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-cancellation" element={<RefundCancellationPolicy />} />
            <Route path="/delivery-policy" element={<ShippingDeliveryPolicy />} />
          </Routes>
        </main>
        <footer className="bg-white shadow-inner mt-auto relative z-10">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
