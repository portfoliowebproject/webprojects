import { Link } from "wouter";
import { type BlogPost } from "@shared/schema";
import { format } from "date-fns";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors = {
  makeup: "bg-soft-pink text-white",
  skincare: "bg-green-400 text-white",
  "hair-care": "bg-purple-400 text-white",
  fashion: "bg-pink-400 text-white",
};

export default function BlogCard({ post }: BlogCardProps) {
  const categoryColor = categoryColors[post.category as keyof typeof categoryColors] || "bg-gray-400 text-white";

  return (
    <article className="group cursor-pointer">
      <Link href={`/post/${post.slug}`}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg post-hover">
          <img 
            src={post.image || "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"} 
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${categoryColor}`}>
                {post.category.replace("-", " ")}
              </span>
              <span className="text-gray-500 text-sm">
                {format(new Date(post.publishedAt || new Date()), "MMM d, yyyy")}
              </span>
            </div>
            <h4 className="font-playfair text-xl font-bold text-dark-gray mb-3 group-hover:text-soft-pink transition-colors duration-200">
              {post.title}
            </h4>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-gold rounded-full"></div>
                <span className="text-sm text-gray-600">{post.author}</span>
              </div>
              <span className="glow-text font-medium text-sm">Read More →</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
