import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Handshake, Award, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { vision, mission, values, problemStatement } from '../mock/mockData';

const About = () => {
  const iconMap = {
    'Zap': Zap,
    'Handshake': Handshake,
    'Award': Award,
    'Target': Target
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?w=1920"
            alt="About RedPillar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-red-900/85"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About RedPillar Compliance
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're not just compliance officers—we're strategic partners helping Financial Institutions turn regulatory challenges into competitive advantages
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-10">
                <div className="p-4 bg-red-50 rounded-xl w-fit mb-6 group-hover:bg-red-600 transition-all duration-300">
                  <Target className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {vision.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {vision.description}
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-2 border-gray-100 hover:border-red-500 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-10">
                <div className="p-4 bg-red-50 rounded-xl w-fit mb-6 group-hover:bg-red-600 transition-all duration-300">
                  <Zap className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {mission.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {mission.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {problemStatement.title}
            </h2>
            <p className="text-xl text-gray-600">
              Most financial institutions face these common compliance challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {problemStatement.issues.map((issue, index) => (
              <Card key={index} className="border-2 border-red-100 bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-50 rounded-lg flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-red-600 transform rotate-180" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {issue.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Zap;
              
              return (
                <Card 
                  key={index} 
                  className="border-2 border-gray-100 hover:border-red-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-center"
                >
                  <CardContent className="p-8">
                    <div className="p-4 bg-red-50 rounded-xl w-fit mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="h-10 w-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616587656977-ac36a5a430bc?w=1920"
            alt="Our Approach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-gray-900/95"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Our Approach
            </h2>
            <div className="space-y-6 text-white">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Strategic Partnership</h3>
                      <p className="text-gray-200 leading-relaxed">
                        We embed ourselves as an extension of your team, understanding your unique challenges and goals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Proactive Prevention</h3>
                      <p className="text-gray-200 leading-relaxed">
                        We identify potential issues before they surface, saving you time, money, and regulatory headaches
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Practical Solutions</h3>
                      <p className="text-gray-200 leading-relaxed">
                        We provide actionable, implementable strategies that work in the real world of financial services
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Experience the RedPillar Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how our strategic approach can transform your compliance function
          </p>
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
