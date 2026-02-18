import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const PrivacyPolicy = () => {
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
            <Shield className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-300">Protection of Personal Information Policy</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            
            {/* Who We Are */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we are</h2>
              <p className="text-gray-700 leading-relaxed">
                This website www.RedPillar.co.za ("the Website") is operated by RedPillar Compliance (Pty) Ltd and the address of 34 Newton Street, Newton Park, Gqeberha, 6045. References to "RedPillar", "we", "us", "our" and "ours" in this Privacy Statement means RedPillar Compliance (Pty) Ltd. The terms "you", "your" and "yours" when used in this Privacy Statement mean any user of this Website.
              </p>
            </div>

            {/* Purpose */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Purpose of this Privacy Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to the privacy and confidentiality of information provided to us. This Privacy Statement provides information to help you understand how we collect, use and share your personal information and our privacy practices with regard to any personal information collected by us from you directly and/or through the Website or the use of our products and services. Personal information means information which identifies you, and includes information such as your name, email address, telephone number, identification number, biometric information and password, as well as any other personal data collected. By visiting this Website and communicating electronically with us, you consent to the processing and transfer of your personal information as set out in this Privacy Statement.
              </p>
            </div>

            {/* Notification of Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Notification of changes to Privacy Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                We are continually improving our methods of communication and adding new functionality and features to this Website and to our existing services. Because of these ongoing changes, changes in the law and the changing nature of technology, our data protection practices will change from time to time. If and when our data protection practices change, we will update this Privacy Statement to describe our new practices. If we do, we will notify you next time to visit this site. We encourage you to check this page regularly.
              </p>
            </div>

            {/* Collecting Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecting your personal information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to informed and limited collection of essential personal information. We can get your personal information when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Buy a product or service from us.</li>
                <li>Register for a specific product or service (such as registering your name and address details for a quote or notification service).</li>
                <li>Subscribe to newsletters, alerts or other services from us.</li>
                <li>Ask us for more information about a product or service, or contact us with a question or complaint.</li>
                <li>Take part in a competition, prize draw or survey.</li>
                <li>Use our apps and other RedPillar Compliance products or services.</li>
                <li>Visit or browse our website or other RedPillar Compliance pages.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                With your permission or consent and/or as permitted by law, we may also collect information about you from other organisations or third parties, if this is appropriate and allowed by law. These include fraud-prevention agencies, business directories, credit reference agencies.
              </p>
            </div>

            {/* Understanding What You Want */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding what you want (the use of cookies)</h2>
              <p className="text-gray-700 leading-relaxed">
                We might also use cookies (small text files stored in your browser) and other techniques such as web beacons (small, clear picture files used to follow your movements on our website). This collects information that makes the website remember you and tells us how you use our website, web-related products and services. This, in turn, helps us make our website relevant to your interests and needs. They also help us find information once you have logged in or help us link your browsing information to you and your personal information, for example, when you choose to register for a service.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We may use a persistent cookie (a cookie that stays linked to your browser) to record your details so we can recognise you if you visit our website again. Cookies by themselves cannot be used to discover your identity. Cookies do not damage your computer. You can set your browser to notify you when you receive a cookie. This enables you to decide if you want to accept it or not. If you choose not to accept cookies from our website this may limit its functionalities or performance.
              </p>
            </div>

            {/* Anonymous Data */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Anonymous data collected through this Website</h2>
              <p className="text-gray-700 leading-relaxed">
                In addition to the information we collect as described above, we use technology to collect anonymous information about the use of our website. For example, our web server automatically logs which pages of our website our visitors view, their IP addresses and which web browsers our visitors use. This technology does not identify you personally; it simply enables us to compile statistics about our visitors and their use of our website.
              </p>
            </div>

            {/* The Personal Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The personal information we collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information we collect about you depends on the RedPillar Compliance products and services you use and subscribe to. It includes (but isn't limited to) the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Your name, date of birth, home language, address, account information and email address.</li>
                <li>Your preferences for particular products, services or lifestyle activities when you tell us what they are – or when we assume what they are, depending on how you use our products and services.</li>
                <li>Your contact with us – such as a note or recording of a call you make to one of our contact centres, an email or letter you send to us or other records of any contact you have with us.</li>
                <li>Your account information – such as phone number, policy details and dates of payment owed and received, the subscription services you use or any other information related to your account.</li>
              </ul>
            </div>

            {/* Use and Analysis */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use and analysis of your personal information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We may use and analyse your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Process the goods and services you've bought from us, and keep you updated with your order progress.</li>
                <li>Keep you informed generally about new products and services (unless you choose not to receive our marketing messages).</li>
                <li>Provide the relevant service or product to you.</li>
                <li>Contact you with offers or promotions based on how you use our products and services.</li>
                <li>Bill you for using our products or services, or to take the appropriate amount of credit from you.</li>
                <li>To administer this Website and help us improve our services.</li>
                <li>Respond to any questions or concerns you may have about using our products or services.</li>
                <li>Understand how you use our products and services.</li>
                <li>Carry out research and statistical analysis.</li>
                <li>Prevent and detect fraud or other crimes, recover debts or trace those who owe us money.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We'll store your information for as long as we have to by law. If there's no legal requirement, we'll only store it for as long as we need it.
              </p>
            </div>

            {/* Sharing Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing your personal information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We may share information about you with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Partners or agents involved in delivering the products and services you've ordered or used.</li>
                <li>Partners or agents that conduct performance and customer satisfaction surveys.</li>
                <li>Companies who are engaged to perform services for, on behalf of RedPillar Compliance.</li>
                <li>Credit reference, fraud prevention or business scoring agencies.</li>
                <li>Debt collection agencies or other debt recovery organisations.</li>
                <li>Law enforcement agencies, regulatory organisations, courts or other public authorities if we have to, or are authorised to by law.</li>
                <li>Emergency services.</li>
              </ul>
            </div>

            {/* Transfer of Information Abroad */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Transfer of information abroad</h2>
              <p className="text-gray-700 leading-relaxed">
                If you are visiting this Website from a country other than South Africa the various communications will necessarily result in the transfer of information across international boundaries. We may also need to transfer your information to other companies or service providers in countries outside South Africa, in which case we will fully comply with applicable data protection legislation.
              </p>
            </div>

            {/* Keeping Information Secure */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Keeping your personal information secure</h2>
              <p className="text-gray-700 leading-relaxed">
                We are committed to implementing leading data security safeguards. We have specialised security teams who constantly review and improve our measures to protect your personal information from unauthorised access, accidental loss, disclosure or destruction. Communications over the internet (such as emails) are not secure unless they have been encrypted. Your communications may go through a number of countries before being delivered – as this is the nature of the internet.
              </p>
            </div>

            {/* How to Unsubscribe */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to unsubscribe or opt-out</h2>
              <p className="text-gray-700 leading-relaxed">
                If you no longer want to receive marketing messages from us, please contact our customer services team and you'll be 'opted out'. If you choose to unsubscribe or opt out, we will hold your contact details on file marked so that we do not contact you again.
              </p>
            </div>

            {/* Access and Corrections */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Access and corrections to personal information</h2>
              <p className="text-gray-700 leading-relaxed">
                Under the law, you have the right to access, correct, amend, delete your personal information or to object to the processing of your personal information. Upon receipt of your written request and enough information to permit us to identify your personal information, we will disclose to you the personal information we hold about you, for which we may make a charge as allowed by applicable law.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to other websites</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain hyperlinks to websites that are not operated by us. These hyperlinks are provided for your reference and convenience only and do not imply any endorsement of the activities of these third-party websites or any association with their operators. We do not control these websites and are not responsible for their data or privacy practices.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                The laws of South Africa will govern any dispute or claim arising out of or relating to your use of this Website.
              </p>
            </div>

            {/* Feedback */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback</h2>
              <p className="text-gray-700 leading-relaxed">
                We welcome comments about this Privacy Statement. If you have any questions about this Privacy Statement, you may contact us by e-mailing info@RedPillar.co.za or by writing to us at 34 Newton Street, Newton Park, Gqeberha, 6045.
              </p>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaints</h2>
              <p className="text-gray-700 leading-relaxed">
                Should you believe that RedPillar Compliance has utilised your personal information contrary to applicable law, you undertake to first attempt to resolve any concerns with RedPillar Compliance. If you are not satisfied with such process, you have the right to lodge a complaint with the Information Regulator, in accordance with the Protection of Personal Information Act, 2013.
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

export default PrivacyPolicy;
