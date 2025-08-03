import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-lg leading-relaxed">
                Sanchi Car Rental is a premier car rental service provider established to offer reliable, safe, and affordable transportation solutions. 
                We are committed to providing exceptional service that treats every passenger like family.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To provide more than just a ride – we ensure your journey is smooth, comfortable, and hassle-free every time. 
                Our focus on reliability, safety, and affordability sets us apart in the car rental industry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Sanchi Car Rental</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Business Type:</span> Car Rental & Transportation Services</p>
                  <p><span className="font-medium">Registration:</span> Legally registered transportation service provider</p>
                  <p><span className="font-medium">Service Area:</span> Pune and surrounding regions</p>
                  <p><span className="font-medium">Established:</span> Committed to serving customers with excellence</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Self-drive car rentals</li>
                <li>Chauffeur-driven services</li>
                <li>Local and outstation trips</li>
                <li>Corporate transportation solutions</li>
                <li>Tourist packages and sightseeing</li>
                <li>Airport transfers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Reliability</h4>
                  <p className="text-blue-800">Dependable service you can count on</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">Safety</h4>
                  <p className="text-green-800">Well-maintained vehicles and trained drivers</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900">Affordability</h4>
                  <p className="text-yellow-800">Competitive pricing without compromising quality</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900">Customer Care</h4>
                  <p className="text-purple-800">Treating every passenger like family</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-2">
                  <p><span className="font-medium">Address:</span> New Wakdevadi Bus stand, Shivajinagar Bus stand road Pune 411005</p>
                  <p><span className="font-medium">Phone:</span> +91 90750 32626</p>
                  <p><span className="font-medium">Email:</span> sanchicarrental@gmail.com</p>
                  <p><span className="font-medium">Website:</span> www.sanchicarrental.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
