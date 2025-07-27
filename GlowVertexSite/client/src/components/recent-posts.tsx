import { useQuery } from "@tanstack/react-query";
import { type BlogPost } from "@shared/schema";
import BlogCard from "./blog-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function RecentPosts() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/posts/recent"],
  });

  if (isLoading) {
    return (
      <section id="recent-posts" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
              Latest Beauty Insights
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with our newest posts, tutorials, and beauty discoveries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="w-20 h-4 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="recent-posts" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
            Latest Beauty Insights
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our newest posts, tutorials, and beauty discoveries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-soft-pink text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
