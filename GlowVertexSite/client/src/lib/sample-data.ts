// This file contains sample data for development purposes
// In a real application, this would come from the API

export const sampleBlogPosts = [
  {
    id: "1",
    title: "10-Minute Morning Makeup Routine for Busy Days",
    slug: "10-minute-morning-makeup-routine",
    excerpt: "Master the art of looking effortlessly put-together with this quick morning routine that will have you ready in minutes...",
    content: "In today's fast-paced world, finding time for a complete makeup routine can be challenging. This 10-minute morning makeup routine is designed to help you look polished and put-together without spending hours in front of the mirror...",
    category: "makeup",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["morning routine", "quick makeup", "busy lifestyle"],
    publishedAt: new Date("2024-03-15"),
    createdAt: new Date("2024-03-15")
  },
  {
    id: "2",
    title: "Complete Guide to Building Your Skincare Routine",
    slug: "complete-guide-skincare-routine",
    excerpt: "Everything you need to know about creating a personalized skincare routine that works for your skin type and concerns...",
    content: "Building an effective skincare routine doesn't have to be complicated. In this comprehensive guide, we'll walk you through the essential steps and products you need for healthy, glowing skin...",
    category: "skincare",
    author: "Emma Rodriguez",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    tags: ["skincare routine", "skin health", "beauty basics"],
    publishedAt: new Date("2024-03-12"),
    createdAt: new Date("2024-03-12")
  }
];

export const sampleCategories = [
  { id: "1", name: "Makeup", slug: "makeup", description: "Tutorials, reviews, and trending looks", icon: "💄" },
  { id: "2", name: "Skincare", slug: "skincare", description: "Routines, ingredients, and tips", icon: "✨" },
  { id: "3", name: "Hair Care", slug: "hair-care", description: "Styling tips and hair health", icon: "💇‍♀️" },
  { id: "4", name: "Fashion", slug: "fashion", description: "Trends, outfits, and style guides", icon: "👗" }
];
