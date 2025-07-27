import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { type BlogPost } from "@shared/schema";
import Hero from "@/components/hero";
import CategoryGrid from "@/components/category-grid";
import RecentPosts from "@/components/recent-posts";
import Newsletter from "@/components/newsletter";
import BlogCard from "@/components/blog-card";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Check for search query in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, []);

  const { data: searchResults, isLoading: isSearching } = useQuery<BlogPost[]>({
    queryKey: ["/api/posts/search", { q: searchQuery }],
    enabled: !!searchQuery,
  });

  // If there's a search query, show search results
  if (searchQuery) {
    return (
      <div className="min-h-screen">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
                Search Results for "{searchQuery}"
              </h1>
              {!isSearching && searchResults && (
                <p className="text-lg text-gray-600">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {isSearching ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                    <div className="w-full h-48 bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchResults && searchResults.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No posts found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Normal homepage
  return (
    <div className="min-h-screen">
      <Hero />
      <CategoryGrid />
      <RecentPosts />
      <Newsletter />
    </div>
  );
}
