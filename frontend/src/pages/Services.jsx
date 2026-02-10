import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Eye, Users, BookOpen, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { services } from '../mock/mockData';

const Services = () => {
  const iconMap = {
    'Shield': Shield,
    'AlertTriangle': AlertTriangle,
    'Eye': Eye,
    'Users': Users,
    'BookOpen': BookOpen,
    'FileText': FileText
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=1920"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-red-900/85"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive compliance solutions tailored to your Financial Institution's unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Compliance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From dedicated compliance officers to strategic mentorship, we provide everything you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Shield;
              
              return (
                <Card 
                  key={service.id} 
                  className="border-2 border-gray-100 hover:border-red-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardHeader>
                    <div className="p-4 bg-red-50 rounded-xl w-fit mb-4 group-hover:bg-red-600 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detailed Services Accordion */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Service Details
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon] || Shield;
                
                return (
                  <AccordionItem 
                    key={service.id} 
                    value={`item-${service.id}`}
                    className="border-2 border-gray-200 rounded-xl px-6 hover:border-red-500 transition-colors duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <IconComponent className="h-6 w-6 text-red-600" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                          {service.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-red-600 mr-2" />
                          Key Features:
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3 text-gray-700">
                              <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Regulatory Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Regulatory Expertise
              </h2>
              <p className="text-xl text-gray-600">
                We navigate the complex regulatory landscape so you don't have to
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {['FSCA', 'Prudential Authority', 'Information Regulator', 'FAIS', 'FIC', 'POPIA', 'FICA', 'NCR', 'Long-Term Insurance', 'B-BBEE', 'BCEA', 'LRA', 'CPA'].map((regulation, index) => (
                <Card 
                  key={index} 
                  className="border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <Shield className="h-8 w-8 text-red-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900">{regulation}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920"
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-gray-900/95"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
              Why Choose RedPillar Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Tailored Solutions</h3>
                  <p className="text-gray-200">
                    Every service is customised to your institution's unique needs and challenges
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                  <p className="text-gray-200">
                    Over 20 years of combined experience in financial services compliance
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Proactive Approach</h3>
                  <p className="text-gray-200">
                    We identify and resolve issues before they become costly problems
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Strategic Partnership</h3>
                  <p className="text-gray-200">
                    We're not just vendors—we're partners invested in your success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Discuss Your Compliance Needs
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Every institution is unique. Let's create a customised compliance solution for you.
          </p>
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
