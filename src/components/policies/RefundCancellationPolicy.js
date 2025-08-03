import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Refund & Cancellation Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> August 2025<br />
                <strong>Effective Date:</strong> August 2025
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="mb-4">
                At Sanchi Car Rental, we understand that plans can change. This policy outlines our refund and 
                cancellation procedures to ensure transparency and fairness for both our customers and our business operations.
              </p>
              <p>
                All refunds are processed through the same payment method used for the original transaction via Razorpay's secure gateway.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cancellation Policy</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">2.1 Free Cancellation Period</h3>
                  <p className="text-green-800 mb-2"><strong>24+ Hours Before Pickup:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-green-700 ml-4">
                    <li>100% refund of rental amount</li>
                    <li>Small processing fee may apply (₹50-100)</li>
                    <li>Security deposit fully refunded</li>
                    <li>No questions asked cancellation</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">2.2 Partial Refund Period</h3>
                  <p className="text-yellow-800 mb-2"><strong>12-24 Hours Before Pickup:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-yellow-700 ml-4">
                    <li>50% refund of rental amount</li>
                    <li>Processing fee applies</li>
                    <li>Security deposit fully refunded</li>
                    <li>Advance payment partially refunded</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">2.3 No Refund Period</h3>
                  <p className="text-red-800 mb-2"><strong>Less than 12 Hours Before Pickup:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-red-700 ml-4">
                    <li>No refund of rental amount</li>
                    <li>Security deposit refunded (if not picked up)</li>
                    <li>Full cancellation charges apply</li>
                    <li>Option to reschedule with additional charges</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4 No-Show Policy</h3>
                  <p className="text-gray-800 mb-2"><strong>No-Show (Failure to Pick Up):</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>No refund of any payments made</li>
                    <li>Booking treated as completed</li>
                    <li>Grace period: 2 hours after scheduled pickup</li>
                    <li>Notification required for delays</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Processing</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.1 Refund Timeline</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                      <li><strong>Net Banking:</strong> 3-5 business days</li>
                      <li><strong>UPI/Wallets:</strong> 1-3 business days</li>
                      <li><strong>Bank Transfer:</strong> 2-4 business days</li>
                    </ul>
                    <p className="text-sm text-blue-700 mt-3">
                      <em>Note: Processing times depend on your bank and payment method. Razorpay processes refunds immediately upon our confirmation.</em>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.2 Refund Method</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Refunds processed to original payment method only</li>
                    <li>No cash refunds for online payments</li>
                    <li>Refund confirmation sent via email and SMS</li>
                    <li>Transaction ID provided for tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Modification Policy</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.1 Booking Changes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Free Modifications</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• 24+ hours before pickup</li>
                        <li>• Date/time changes</li>
                        <li>• Location changes (same city)</li>
                        <li>• Vehicle upgrades (pay difference)</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Paid Modifications</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Less than 24 hours notice</li>
                        <li>• City changes</li>
                        <li>• Vehicle downgrades</li>
                        <li>• Duration extensions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.2 Modification Charges</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Same-day modifications: ₹200 + applicable rate difference</li>
                      <li>Location changes: ₹100-500 depending on distance</li>
                      <li>Vehicle changes: Rate difference + ₹100 processing fee</li>
                      <li>Duration extensions: Pro-rated hourly/daily rates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Special Circumstances</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.1 Force Majeure Events</h3>
                  <p className="mb-2">Full refund provided for cancellations due to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Natural disasters (floods, earthquakes, etc.)</li>
                    <li>Government restrictions or lockdowns</li>
                    <li>Medical emergencies (with documentation)</li>
                    <li>Vehicle breakdown or unavailability</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.2 Vehicle Issues</h3>
                  <p className="mb-2">If we cannot provide the reserved vehicle:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Full refund or equivalent vehicle provided</li>
                    <li>Upgrade at no extra cost (if available)</li>
                    <li>Compensation for inconvenience</li>
                    <li>Alternative transportation assistance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Security Deposit Refund</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">6.1 Standard Refund Process</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Vehicle returned in same condition: Full refund within 7 days</li>
                      <li>Minor cleaning required: Refund minus cleaning charges (₹200-500)</li>
                      <li>Fuel shortage: Refund minus fuel cost + service charge</li>
                      <li>No damage/violations: Immediate release authorization</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">6.2 Deductions from Security Deposit</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Traffic fines and violations</li>
                      <li>Vehicle damage repairs</li>
                      <li>Missing accessories or documents</li>
                      <li>Excessive cleaning requirements</li>
                      <li>Late return charges</li>
                      <li>Fuel shortage costs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. How to Cancel or Request Refund</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Contact Methods:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Online Cancellation:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Website booking management</li>
                      <li>• Email: sanchicarrental@gmail.com</li>
                      <li>• Include booking reference</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Phone Cancellation:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Call: +91 90750 32626</li>
                      <li>• Available: 8 AM - 10 PM</li>
                      <li>• 24/7 emergency support</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded">
                  <h4 className="font-medium mb-2">Required Information:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Booking reference number</li>
                    <li>• Customer name and contact details</li>
                    <li>• Reason for cancellation</li>
                    <li>• Preferred refund method (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Dispute Resolution</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">8.1 Refund Disputes</h3>
                  <p className="mb-2">If you disagree with our refund decision:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Contact our customer service team</li>
                    <li>Provide detailed explanation and documentation</li>
                    <li>Allow 3-5 business days for review</li>
                    <li>Escalate to management if unresolved</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">8.2 Payment Gateway Disputes</h3>
                  <p>For payment-related issues, you may also contact Razorpay directly or initiate a chargeback through your bank.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Important Notes</h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <ul className="list-disc list-inside space-y-2 text-yellow-800">
                  <li>All cancellation requests must be made in writing (email/SMS/website)</li>
                  <li>Cancellation time is calculated from our acknowledgment receipt</li>
                  <li>Partial trip cancellations are not eligible for refunds</li>
                  <li>Group bookings may have different cancellation terms</li>
                  <li>Promotional rates may have specific cancellation conditions</li>
                  <li>Refund amounts exclude payment gateway charges</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">For cancellations, refunds, or any questions about this policy:</p>
                <div className="space-y-2">
                  <p><strong>Sanchi Car Rental</strong></p>
                  <p>New Wakdevadi Bus stand, Shivajinagar Bus stand road, Pune 411005</p>
                  <p>Phone: +91 90750 32626</p>
                  <p>Email: sanchicarrental@gmail.com</p>
                  <p>Customer Service Hours: 8:00 AM - 10:00 PM (Daily)</p>
                  <p>Emergency Support: 24/7</p>
                </div>
              </div>
            </section>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <p className="text-red-800">
                <strong>Important:</strong> This policy is subject to change without prior notice. 
                Please review the current policy at the time of booking. Your booking confirmation 
                email will contain the applicable cancellation terms for your reservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
