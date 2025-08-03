import React from "react";

const ShippingDeliveryPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Delivery & Service Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> August 2025<br />
                <strong>Effective Date:</strong> August 2025
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Service Overview</h2>
              <p className="mb-4">
                As a car rental service provider, Sanchi Car Rental delivers transportation solutions rather than 
                physical products. This policy outlines our vehicle delivery, pickup procedures, and service logistics 
                to ensure clarity and transparency in our operations.
              </p>
              <p>
                Our "delivery" refers to making vehicles available at designated locations and times for customer use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Vehicle Delivery Options</h2>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">2.1 Self-Pickup (Standard)</h3>
                  <div className="text-green-800 space-y-2">
                    <p><strong>Location:</strong> New Wakdevadi Bus stand, Shivajinagar Bus stand road, Pune 411005</p>
                    <p><strong>Timing:</strong> 24/7 availability with advance booking</p>
                    <p><strong>Cost:</strong> Included in rental price</p>
                    <p><strong>Requirements:</strong> Valid documents and security deposit</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">2.2 Doorstep Delivery</h3>
                  <div className="text-blue-800 space-y-2">
                    <p><strong>Service Area:</strong> Pune city and surrounding areas (within 25 km)</p>
                    <p><strong>Delivery Time:</strong> 1-3 hours from confirmation</p>
                    <p><strong>Cost:</strong> ₹200-500 based on distance</p>
                    <p><strong>Timing:</strong> 7 AM - 9 PM (same-day delivery)</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">2.3 Airport/Railway Station Delivery</h3>
                  <div className="text-purple-800 space-y-2">
                    <p><strong>Locations:</strong> Pune Airport, Pune Railway Station, Shivajinagar Station</p>
                    <p><strong>Advance Notice:</strong> Minimum 2 hours required</p>
                    <p><strong>Cost:</strong> ₹300-600 based on location</p>
                    <p><strong>Meet Point:</strong> Designated pickup areas</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">2.4 Hotel/Corporate Delivery</h3>
                  <div className="text-yellow-800 space-y-2">
                    <p><strong>Service:</strong> Direct delivery to hotels, offices, event venues</p>
                    <p><strong>Advance Booking:</strong> 4-6 hours recommended</p>
                    <p><strong>Cost:</strong> ₹250-400 + parking charges (if applicable)</p>
                    <p><strong>Special Requirements:</strong> Security clearance may be needed</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Delivery Timeline & Scheduling</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.1 Standard Delivery Schedule</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Same-Day Delivery</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Booking before 12 PM: Delivery by 6 PM</li>
                        <li>• Booking after 12 PM: Next day delivery</li>
                        <li>• Emergency delivery: 2-4 hours (extra charges)</li>
                        <li>• Subject to vehicle availability</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Advance Booking</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Recommended: 24 hours advance</li>
                        <li>• Guaranteed delivery slot</li>
                        <li>• Preferred vehicle selection</li>
                        <li>• Flexible timing options</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.2 Delivery Time Slots</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <strong>Morning Slot:</strong><br />
                        7:00 AM - 12:00 PM
                      </div>
                      <div>
                        <strong>Afternoon Slot:</strong><br />
                        12:00 PM - 6:00 PM
                      </div>
                      <div>
                        <strong>Evening Slot:</strong><br />
                        6:00 PM - 9:00 PM
                      </div>
                    </div>
                    <p className="text-xs mt-3 text-blue-700">
                      <em>Exact delivery time will be communicated 1 hour before delivery</em>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Areas & Coverage</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.1 Primary Service Areas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Free Delivery Zone</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Shivajinagar and surrounding areas</li>
                        <li>• Within 5 km radius of our office</li>
                        <li>• Major commercial hubs</li>
                        <li>• Popular tourist destinations in Pune</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Paid Delivery Zone</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Extended Pune metropolitan area</li>
                        <li>• 5-25 km from our office</li>
                        <li>• Suburban locations</li>
                        <li>• Industrial areas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.2 Special Delivery Locations</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Transportation Hubs:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>Pune Airport</li>
                          <li>Pune Railway Station</li>
                          <li>Shivajinagar Bus Stand</li>
                          <li>Major metro stations</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Commercial Areas:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li>IT parks and tech hubs</li>
                          <li>Shopping malls</li>
                          <li>Business districts</li>
                          <li>Conference centers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Vehicle Handover Process</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.1 Pre-Delivery Preparation</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Vehicle thoroughly cleaned and sanitized</li>
                      <li>Full fuel tank (unless otherwise specified)</li>
                      <li>All documents and accessories verified</li>
                      <li>Vehicle inspection completed</li>
                      <li>Insurance and registration validity confirmed</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.2 Handover Documentation</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="mb-2"><strong>Customer must provide:</strong></p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Original driving license</li>
                      <li>Valid government photo ID</li>
                      <li>Security deposit (cash/card)</li>
                      <li>Signed rental agreement</li>
                    </ul>
                    
                    <p className="mb-2"><strong>We provide:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Vehicle registration certificate</li>
                      <li>Insurance papers</li>
                      <li>Emergency contact numbers</li>
                      <li>Vehicle inspection report</li>
                      <li>Fuel receipt and accessories checklist</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Return/Collection Policy</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">6.1 Return Options</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Self Return</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Return to our office</li>
                        <li>• 24/7 drop-off facility</li>
                        <li>• Immediate inspection</li>
                        <li>• Instant security deposit release</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Pickup Service</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• We collect from your location</li>
                        <li>• Same charges as delivery</li>
                        <li>• Scheduled pickup slots</li>
                        <li>• On-spot inspection and settlement</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">6.2 Return Inspection Process</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-1">
                      <li>External and internal damage assessment</li>
                      <li>Fuel level verification</li>
                      <li>Accessories and documents check</li>
                      <li>Odometer reading recording</li>
                      <li>Cleaning requirement evaluation</li>
                      <li>Final settlement and deposit refund</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Emergency & 24/7 Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">7.1 Emergency Delivery</h3>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="mb-2"><strong>Available for urgent situations:</strong></p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Medical emergencies</li>
                      <li>Flight delays/schedule changes</li>
                      <li>Business critical travel</li>
                      <li>Event transportation</li>
                    </ul>
                    <p className="mt-3 text-sm text-red-700">
                      <em>Emergency delivery: 50% surcharge applies | 2-4 hours delivery time</em>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">7.2 24/7 Support Services</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Round-the-clock customer support</li>
                      <li>Roadside assistance</li>
                      <li>Emergency vehicle replacement</li>
                      <li>Breakdown recovery service</li>
                      <li>Accident support and guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Delivery Charges & Fees</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Standard Delivery Rates</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Within 5 km:</span>
                        <strong>Free</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>5-10 km:</span>
                        <strong>₹200</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>10-15 km:</span>
                        <strong>₹300</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>15-25 km:</span>
                        <strong>₹500</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Airport/Station:</span>
                        <strong>₹300-600</strong>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Additional Charges</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Night delivery (9 PM - 7 AM):</span>
                        <strong>+₹100</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergency delivery:</span>
                        <strong>+50%</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Waiting charges (&gt;30 min):</span>
                        <strong>₹50/hr</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Failed delivery attempt:</span>
                        <strong>₹200</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Document courier:</span>
                        <strong>₹100</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Important Terms & Conditions</h2>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <ul className="list-disc list-inside space-y-2 text-yellow-800">
                  <li>Delivery times are estimates and may vary due to traffic and weather conditions</li>
                  <li>Customer must be available at delivery location with required documents</li>
                  <li>Rescheduling delivery more than twice may incur additional charges</li>
                  <li>We reserve the right to refuse delivery to unsafe or inaccessible locations</li>
                  <li>All delivery charges are in addition to rental rates and must be paid in advance</li>
                  <li>Vehicle availability is subject to booking confirmation and advance payment</li>
                  <li>Delivery locations outside Pune may require special arrangements</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact for Delivery Services</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Booking & Scheduling</h3>
                    <div className="space-y-1 text-sm">
                      <p>Phone: +91 90750 32626</p>
                      <p>Email: sanchicarrental@gmail.com</p>
                      <p>Hours: 8 AM - 10 PM (Daily)</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Emergency & 24/7 Support</h3>
                    <div className="space-y-1 text-sm">
                      <p>Emergency: +91 90750 32626</p>
                      <p>WhatsApp: Available 24/7</p>
                      <p>Location: Shivajinagar, Pune</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded">
                  <p className="text-sm text-blue-800">
                    <strong>Pro Tip:</strong> Book your delivery slot at least 24 hours in advance for guaranteed 
                    vehicle availability and preferred timing. Same-day delivery is subject to availability.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingDeliveryPolicy;
