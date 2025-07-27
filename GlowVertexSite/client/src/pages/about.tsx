import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-dark-gray mb-6">
            About <span className="glow-text">GlowVertex</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your trusted beauty companion for makeup, skincare, hair care, and fashion inspiration.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="Beauty products and makeup artistry"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Welcome to GlowVertex, where beauty meets expertise and inspiration flows freely. Since our inception, we've been dedicated to empowering beauty enthusiasts of all levels with authentic, actionable advice that transforms not just how you look, but how you feel.
          </p>

          <p>
            Our journey began with a simple belief: everyone deserves to feel confident and beautiful in their own skin. Whether you're a makeup novice looking for your first lipstick or a skincare enthusiast seeking the latest ingredients, we're here to guide you every step of the way.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-dark-gray mt-12 mb-6">Our Mission</h2>
          
          <p>
            At GlowVertex, we curate content that matters. Our team of beauty experts, makeup artists, and skincare specialists work tirelessly to bring you:
          </p>

          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Honest product reviews and recommendations</li>
            <li>Step-by-step tutorials for all skill levels</li>
            <li>The latest trends and timeless techniques</li>
            <li>Sustainable and inclusive beauty practices</li>
            <li>Expert advice on skincare routines and ingredients</li>
          </ul>

          <h2 className="font-playfair text-3xl font-bold text-dark-gray mt-12 mb-6">What Sets Us Apart</h2>

          <p>
            We believe in beauty without boundaries. Our content celebrates diversity, promotes self-expression, and encourages experimentation. From quick 5-minute morning routines to elaborate evening looks, we cover it all with authenticity and passion.
          </p>

          <p>
            Our community is at the heart of everything we do. We listen to your feedback, answer your questions, and continuously evolve to meet your beauty needs. Join thousands of beauty enthusiasts who trust GlowVertex for their daily dose of inspiration.
          </p>

          <h2 className="font-playfair text-3xl font-bold text-dark-gray mt-12 mb-6">Meet Our Team</h2>

          <p>
            Behind GlowVertex is a passionate team of beauty professionals, each bringing their unique expertise and perspective to our content. From certified makeup artists to licensed estheticians, our contributors ensure every piece of advice is backed by knowledge and experience.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center cream-bg rounded-2xl p-12">
          <h3 className="font-playfair text-2xl font-bold text-dark-gray mb-4">
            Ready to Start Your Beauty Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and discover your unique glow. Subscribe to our newsletter for exclusive tips, tutorials, and beauty insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-soft-pink text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200">
                Explore Our Content
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-soft-pink text-soft-pink px-8 py-3 rounded-full font-medium hover:bg-soft-pink hover:text-white transition-all duration-200">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
