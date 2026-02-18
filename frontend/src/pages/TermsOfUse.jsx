import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Button variant="outline" className="mb-6 text-white border-white hover:bg-white hover:text-gray-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <FileText className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
          </div>
          <p className="text-xl text-gray-300">Website Terms and Conditions of Use</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Terms and Conditions of Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions oversee your ("the User" / "You") use of the (RedPillar Compliance) website located at the domain name (www.redpillar.co.za) ("the Website").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By entry and use of this Website, the User agrees to be bound by the Terms and Conditions set out in this legal notice; however, should the User not desire to be bound by these Terms and Conditions, the User may then not access, use, display, download, and/or otherwise duplicate or distribute any Content gained from the Website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions are effective upon access of the site for the first time and form a binding agreement between RedPillar Compliance and the User, which will always prevail. These Terms and Conditions oversee our respective rights and obligations each time the User gains admission into the site.
              </p>
            </div>

            {/* Privacy and Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                RedPillar Compliance receives a variety of information ("the Information") from Users who access the Website. RedPillar Compliance makes every attempt to protect all Information received by it. Despite such efforts and taking, it is possible for Internet-based communications to be captured. Without the use of encryption, the Internet is not a secure medium and thus privacy cannot be guaranteed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Internet e-mail is susceptible to forging and interception, RedPillar Compliance will not be liable for any damages that the User deliberately authorises RedPillar Compliance to receive or that the User or any third party may endure as a result of the transmission of personal or confidential information that the User submits to RedPillar Compliance through the Internet, or for any errors or changes made to any transmitted information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                RedPillar Compliance highly recommends the User is to read and understand the Privacy and Security Policy, outlining RedPillar Compliance's commitment to the User's privacy and the security of their personal information.
              </p>
              <div className="mt-4">
                <Link to="/privacy-policy">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Read Privacy Policy
                  </Button>
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer (web)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By access and use of this Website you acknowledge and agree to this disclaimer. Use of this Website and the related products and/or services is governed in accordance with the laws of the Republic of South Africa, and subject to the exclusive jurisdiction of the South African courts.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use of this Website or the information, products and services presented on this Website is at the user's own risk. Notwithstanding the provisions of sections 43(5) and 43(6) of the Electronic Communications and Transactions Act, RedPillar Compliance accepts no liability whatsoever involving any loss, expense, claim or damage, whether direct, indirect or consequential which may occur from the information obtained from this Website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                RedPillar Compliance makes no guarantee or representation whether implied or expressed, as to the integrity, availability or functionality of this Website or as to the accuracy, completeness or reliability of any information obtained from this Website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                RedPillar Compliance also makes no guarantee or representation, whether implied or expressed, that the products, information or files available on this Website are without any viruses, destructive materials or any other data or code which is able to compromise, corrupt or put at risk the functioning or content of a computer system, computer network or your hardware or software. The User accepts all risk associated with any existence of such viruses, destructive materials or any other data or code which is able to compromise, corrupt, or put at risk the operation or content of a computer system, computer network or your hardware or software.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                RedPillar Compliance accepts no liability for any omission or errors on this Website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                RedPillar Compliance may, at any time, in its own discretion, suspend, change the contents of or terminate the operation of this Website or any of the products or services provided in terms of this Website, without prior notice.
              </p>
            </div>

            {/* Rights Reserved */}
            <div className="border-t pt-6">
              <p className="text-gray-700 font-semibold">
                All rights reserved.
              </p>
            </div>

            {/* Last Updated */}
            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Last Updated: February 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
