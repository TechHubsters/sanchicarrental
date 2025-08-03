import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> August 2025<br />
                <strong>Effective Date:</strong> August 2025
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Sanchi Car Rental, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p>
                By using our services, you consent to the data practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">2.1 Personal Information</h3>
                  <p className="mb-2">We collect personal information that you provide directly to us:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Name, address, phone number, email address</li>
                    <li>Driver's license information</li>
                    <li>Government-issued ID details (Aadhar, Passport)</li>
                    <li>Payment and billing information</li>
                    <li>Emergency contact information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">2.2 Rental Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Rental dates and locations</li>
                    <li>Vehicle preferences and history</li>
                    <li>Insurance information</li>
                    <li>Accident or incident reports</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">2.3 Technical Information</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage patterns</li>
                    <li>Cookie and tracking data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.1 Service Provision</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Process and manage your rental bookings</li>
                    <li>Verify your identity and driving credentials</li>
                    <li>Process payments and manage billing</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.2 Communication</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Send booking confirmations and updates</li>
                    <li>Provide customer service communications</li>
                    <li>Send promotional offers (with consent)</li>
                    <li>Important service announcements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">3.3 Legal and Safety</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and unauthorized use</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Ensure vehicle and passenger safety</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.1 We May Share Information With:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Insurance companies (for claims processing)</li>
                    <li>Payment processors (Razorpay for secure transactions)</li>
                    <li>Law enforcement (when legally required)</li>
                    <li>Service providers (with data protection agreements)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">4.2 We Do Not:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Sell your personal information to third parties</li>
                    <li>Share information for marketing without consent</li>
                    <li>Disclose data except as outlined in this policy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.1 Security Measures</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure data storage systems</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security audits and updates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">5.2 Payment Security</h3>
                  <p>All payment transactions are processed through Razorpay's secure gateway, which complies with industry-standard security protocols including PCI DSS compliance.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="mb-4">We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records as required by law</li>
              </ul>
              <p>Personal data is securely deleted when no longer needed, unless retention is required by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">7.1 Access and Control</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Restrict processing of your information</li>
                    <li>Data portability (where applicable)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">7.2 Communication Preferences</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Opt-out of marketing communications</li>
                    <li>Update contact preferences</li>
                    <li>Choose communication channels</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">8.1 Cookie Usage</h3>
                  <p className="mb-2">We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Improve user experience</li>
                    <li>Ensure website security</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">8.2 Cookie Control</h3>
                  <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">9.1 Payment Processing</h3>
                  <p>We use Razorpay for secure payment processing. Razorpay has its own privacy policy governing the collection and use of payment information.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">9.2 Social Media</h3>
                  <p>Our website may contain links to social media platforms. These platforms have their own privacy policies that govern your interactions with them.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children under 18. If you become aware that a child has provided us 
                with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Posting the new policy on our website</li>
                <li>Sending email notifications for material changes</li>
                <li>Updating the "Last Updated" date</li>
              </ul>
              <p>Your continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Sanchi Car Rental</strong></p>
                  <p>New Wakdevadi Bus stand, Shivajinagar Bus stand road, Pune 411005</p>
                  <p>Phone: +91 90750 32626</p>
                  <p>Email: sanchicarrental@gmail.com</p>
                </div>
                <p className="mt-4 text-sm">
                  <strong>Data Protection Officer:</strong> For specific privacy concerns, you can reach our 
                  designated contact person at the above email address with "Privacy Concern" in the subject line.
                </p>
              </div>
            </section>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800">
                <strong>Your Privacy Matters:</strong> We are committed to transparency and protecting your personal information. 
                This policy demonstrates our compliance with data protection regulations and our dedication to earning your trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
