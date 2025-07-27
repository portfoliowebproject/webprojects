import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Instagram, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
            Get In <span className="glow-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question, collaboration idea, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="font-playfair text-2xl font-bold text-dark-gray mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-soft-pink text-white py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cream-bg rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-dark-gray mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">Email Us</h4>
                    <p className="text-gray-600">hello@glowvertex.com</p>
                    <p className="text-gray-600">collaborations@glowvertex.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-gray mb-1">Visit Us</h4>
                    <p className="text-gray-600">123 Beauty Boulevard</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-dark-gray mb-6">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Stay connected with us on social media for daily beauty inspiration, behind-the-scenes content, and exclusive updates.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200">
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200">
                  <FaPinterest className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-soft-pink rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200">
                  <Youtube className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-dark-gray mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">Can I submit a guest post?</h4>
                  <p className="text-gray-600 text-sm">We welcome guest contributions! Please email us with your pitch and writing samples.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">Do you offer product collaborations?</h4>
                  <p className="text-gray-600 text-sm">Yes! We partner with beauty brands that align with our values. Contact us for collaboration opportunities.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark-gray mb-2">How can I request a specific tutorial?</h4>
                  <p className="text-gray-600 text-sm">We love hearing from our community! Send us your tutorial requests via email or social media.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
