import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Category } from "@shared/schema";
import { ArrowRight } from "lucide-react";

export default function CategoryGrid() {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const categoryImages = {
    makeup: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    skincare: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    "hair-care": "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
    fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  };

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
              Explore Our Categories
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive into our curated content across makeup, skincare, hair care, and fashion
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
            Explore Our Categories
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into our curated content across makeup, skincare, hair care, and fashion
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories?.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <div className="group cursor-pointer category-hover">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <img 
                      src={categoryImages[category.slug as keyof typeof categoryImages]} 
                      alt={`${category.name} category`}
                      className="w-full h-48 object-cover rounded-xl mb-6"
                    />
                    <h4 className="font-playfair text-xl font-bold text-dark-gray mb-3">
                      {category.name} {category.icon}
                    </h4>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <span className="inline-flex items-center glow-text font-medium group-hover:text-accent-gold transition-colors duration-200">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
