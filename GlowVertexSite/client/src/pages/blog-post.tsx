import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type BlogPost, type Category } from "@shared/schema";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/posts/${slug}`],
  });

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="flex items-center space-x-6 mb-8">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-2xl mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = categories?.find(cat => cat.slug === post.category);

  return (
    <article className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 p-0 h-auto font-normal hover:bg-transparent">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="font-playfair text-3xl lg:text-5xl font-bold text-dark-gray mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.publishedAt || new Date()), "MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            {category && (
              <Link href={`/category/${category.slug}`}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-soft-pink hover:text-white transition-colors">
                  {category.name}
                </Badge>
              </Link>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
            {post.excerpt}
          </div>
          
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Author Info */}
        <div className="bg-cream-white rounded-2xl p-8 mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-dark-gray">{post.author}</h3>
              <p className="text-gray-600">Beauty & Fashion Writer</p>
            </div>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Enjoyed this post? Share it with your friends!</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">Share on Instagram</Button>
            <Button variant="outline" size="sm">Share on Pinterest</Button>
            <Button variant="outline" size="sm">Share on Facebook</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
