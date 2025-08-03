import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms & Conditions</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> August 2025<br />
                <strong>Effective Date:</strong> August 2025
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using Sanchi Car Rental services, you accept and agree to be bound by the terms 
                and provision of this agreement. These Terms & Conditions govern your use of our car rental services.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="mb-4">
                Sanchi Car Rental provides car rental services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Self-drive car rentals</li>
                <li>Chauffeur-driven services</li>
                <li>Local and outstation trips</li>
                <li>Corporate transportation</li>
                <li>Airport transfers</li>
                <li>Tourist packages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Rental Requirements</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.1 Driver Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Valid driving license (minimum 1 year old)</li>
                    <li>Minimum age of 21 years</li>
                    <li>Valid government-issued photo ID</li>
                    <li>Clean driving record</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.2 Documentation</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Original driving license</li>
                    <li>Aadhar card or passport</li>
                    <li>Credit/debit card for security deposit</li>
                    <li>Address proof</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Booking and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.1 Booking Process</h3>
                  <p>Bookings can be made through our website, phone, or in-person at our office. All bookings are subject to vehicle availability.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.2 Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Advance payment may be required for booking confirmation</li>
                    <li>Security deposit is mandatory at the time of vehicle pickup</li>
                    <li>Final payment due at the completion of rental period</li>
                    <li>All payments processed through Razorpay secure gateway</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.3 Security Deposit</h3>
                  <p>A security deposit is required and will be refunded after vehicle return, subject to inspection for damages and fuel level.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Vehicle Usage</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.1 Permitted Use</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Vehicle must be used for lawful purposes only</li>
                    <li>Maximum occupancy as per vehicle capacity</li>
                    <li>No smoking inside the vehicle</li>
                    <li>Pets allowed with prior approval</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.2 Prohibited Use</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Racing, rallying, or speed testing</li>
                    <li>Commercial transportation without authorization</li>
                    <li>Towing or pushing other vehicles</li>
                    <li>Off-road driving unless specifically authorized</li>
                    <li>Transportation of illegal substances</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Insurance and Liability</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">6.1 Insurance Coverage</h3>
                  <p>All vehicles are covered under comprehensive insurance. Coverage details will be provided at the time of rental.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">6.2 Customer Liability</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Customer is responsible for any damage caused by negligence</li>
                    <li>Traffic violations and fines are customer's responsibility</li>
                    <li>Theft or total loss may result in full vehicle value liability</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Fuel Policy</h2>
              <p className="mb-4">
                Vehicles are provided with full fuel tank and must be returned with the same fuel level. 
                Additional charges will apply for fuel shortage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cancellation and Modifications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">8.1 Cancellation by Customer</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>24+ hours: Full refund minus processing fee</li>
                    <li>12-24 hours: 50% refund</li>
                    <li>Less than 12 hours: No refund</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">8.2 Modifications</h3>
                  <p>Booking modifications are subject to availability and may incur additional charges.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Late Returns and Extensions</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Late returns will incur additional hourly charges</li>
                <li>Extensions subject to vehicle availability</li>
                <li>Grace period of 30 minutes for returns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Force Majeure</h2>
              <p>
                Sanchi Car Rental shall not be liable for any failure or delay in performance due to circumstances 
                beyond reasonable control, including natural disasters, government actions, or other unforeseeable events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes arising from this agreement shall be resolved through:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Direct negotiation between parties</li>
                <li>Mediation if required</li>
                <li>Jurisdiction: Courts of Pune, Maharashtra</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Privacy and Data Protection</h2>
              <p>
                Customer information is collected and processed in accordance with our Privacy Policy. 
                We are committed to protecting your personal data and maintaining confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Modification of Terms</h2>
              <p>
                Sanchi Car Rental reserves the right to modify these terms at any time. Changes will be 
                effective immediately upon posting on our website. Continued use constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Sanchi Car Rental</strong></p>
                <p className="mb-2">New Wakdevadi Bus stand, Shivajinagar Bus stand road, Pune 411005</p>
                <p className="mb-2">Phone: +91 90750 32626</p>
                <p className="mb-2">Email: sanchicarrental@gmail.com</p>
                <p>For any questions regarding these terms, please contact us using the above information.</p>
              </div>
            </section>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>Important:</strong> By using our services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
