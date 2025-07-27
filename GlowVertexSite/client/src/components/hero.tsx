import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Hero() {
  const scrollToNewsletter = () => {
    const newsletter = document.getElementById('newsletter');
    newsletter?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPosts = () => {
    const posts = document.getElementById('recent-posts');
    posts?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-dark-gray mb-6">
              Discover Your <span className="glow-text">Glow</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Your ultimate destination for beauty, skincare, and fashion inspiration. Join thousands of beauty enthusiasts on their journey to radiant confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPosts}
                className="bg-soft-pink text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
              >
                Explore Latest Posts
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToNewsletter}
                className="border-soft-pink text-soft-pink px-8 py-3 rounded-full font-medium hover:bg-soft-pink hover:text-white transition-all duration-200"
              >
                Subscribe Newsletter
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Beautiful woman applying makeup in elegant setting" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white fill-current" />
                </div>
                <div>
                  <p className="font-semibold text-dark-gray">Featured Post</p>
                  <p className="text-sm text-gray-600">10-Minute Morning Routine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
