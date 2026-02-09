import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Briefcase, ArrowRight, CheckCircle, Mail, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { team } from '../mock/mockData';

const Team = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920"
            alt="Meet the Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-red-900/85"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet the Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A powerhouse team of compliance experts dedicated to your success
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expertise You Can Trust
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team brings over 20 years of combined experience in financial services compliance, 
              risk management, and regulatory affairs. We don't just know the rules—we know how to make them work for you.
            </p>
          </div>

          {/* Team Members */}
          <div className="space-y-16">
            {team.map((member, index) => (
              <Card 
                key={member.id} 
                className={`border-2 border-gray-100 hover:border-red-500 hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}>
                  {/* Image Section */}
                  <div className={`relative h-96 lg:h-auto overflow-hidden ${
                    index % 2 === 0 ? '' : 'lg:col-start-2'
                  }`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <CardContent className={`p-10 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}>
                    <div className="space-y-6">
                      {/* Name & Role */}
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-xl text-red-600 font-semibold">
                          {member.role}
                        </p>
                      </div>

                      {/* Credentials Badges */}
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((credential, idx) => (
                          <Badge 
                            key={idx} 
                            className="bg-red-50 text-red-700 hover:bg-red-100 px-3 py-1 text-sm font-semibold border border-red-200"
                          >
                            {credential}
                          </Badge>
                        ))}
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Expertise */}
                      <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                        <h4 className="font-bold text-gray-900 flex items-center mb-4">
                          <Award className="h-5 w-5 text-red-600 mr-2" />
                          Core Expertise
                        </h4>
                        <ul className="space-y-3">
                          {member.expertise.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-gray-700">
                              <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Icons */}
                      <div className="flex space-x-4 pt-4">
                        <button className="p-3 bg-gray-100 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 group/btn">
                          <Mail className="h-5 w-5" />
                        </button>
                        <button className="p-3 bg-gray-100 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 group/btn">
                          <Linkedin className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Collective Excellence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-red-100 hover:border-red-500 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-red-50 rounded-xl w-fit mx-auto mb-4 group-hover:bg-red-600 transition-all duration-300">
                    <Briefcase className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
                  <p className="text-gray-600 font-medium">Years Combined Experience</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100 hover:border-red-500 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-red-50 rounded-xl w-fit mx-auto mb-4 group-hover:bg-red-600 transition-all duration-300">
                    <Award className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">12+</div>
                  <p className="text-gray-600 font-medium">Professional Certifications</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100 hover:border-red-500 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-red-50 rounded-xl w-fit mx-auto mb-4 group-hover:bg-red-600 transition-all duration-300">
                    <CheckCircle className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                  <p className="text-gray-600 font-medium">Client Success Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565688527174-775059ac429c?w=1920"
            alt="Team Philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-gray-900/95"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Team Philosophy
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              "We believe compliance isn't just about checking boxes—it's about building trust, 
              creating opportunities, and empowering institutions to grow with confidence."
            </p>
            <p className="text-lg text-gray-300 italic">
              Every member of our team is committed to transforming how Financial Institutions 
              experience compliance—from burden to competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work with Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Experience the difference that dedicated compliance expertise can make for your institution
          </p>
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              Connect with Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
