import React, { useState } from 'react';
import { Phone, X, Clock, User, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { submitCallbackRequest, callbackReasons } from '../mock/mockData';

const CallMeBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.reason) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await submitCallbackRequest(formData);
      if (response.success) {
        toast.success(response.message);
        setFormData({
          name: '',
          phone: '',
          email: '',
          reason: '',
          preferredTime: ''
        });
        setIsOpen(false);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Request a callback"
      >
        <Phone className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-t-2xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Request a Callback</h3>
                  <p className="text-red-100 text-sm mt-1">
                    We'll reach out to you shortly
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium flex items-center">
                  <User className="h-4 w-4 mr-2 text-red-600" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-red-600" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-red-600" />
                  Email (Optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <Label htmlFor="reason" className="text-gray-700 font-medium">
                  Reason for Callback *
                </Label>
                <Select value={formData.reason} onValueChange={(value) => handleChange('reason', value)}>
                  <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    {callbackReasons.map((reason) => (
                      <SelectItem key={reason} value={reason}>
                        {reason}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <Label htmlFor="preferredTime" className="text-gray-700 font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-red-600" />
                  Preferred Time (Optional)
                </Label>
                <Input
                  id="preferredTime"
                  type="text"
                  placeholder="e.g., Tomorrow morning, This week"
                  value={formData.preferredTime}
                  onChange={(e) => handleChange('preferredTime', e.target.value)}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {isSubmitting ? 'Submitting...' : 'Request Callback'}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy and will only use your information to contact you.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CallMeBack;
