import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscribeMutation.mutate(email);
    }
  };

  return (
    <section id="newsletter" className="py-16 lg:py-24 cream-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
            Join Our Beauty Community
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get exclusive beauty tips, early access to tutorials, and special offers delivered straight to your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-soft-pink focus:border-transparent"
                required
              />
              <Button
                type="submit"
                disabled={subscribeMutation.isPending}
                className="bg-soft-pink text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </form>

          <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Weekly Beauty Tips</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Exclusive Tutorials</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Product Deals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
