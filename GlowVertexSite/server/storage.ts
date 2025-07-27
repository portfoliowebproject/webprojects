import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Category, type InsertCategory, type Newsletter, type InsertNewsletter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(category?: string): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  searchBlogPosts(query: string): Promise<BlogPost[]>;
  getRecentPosts(limit?: number): Promise<BlogPost[]>;
  
  getCategories(): Promise<Category[]>;
  getCategory(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private categories: Map<string, Category>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.categories = new Map();
    this.newsletters = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Create categories
    const categories = [
      { name: "Makeup", slug: "makeup", description: "Tutorials, reviews, and trending looks", icon: "💄" },
      { name: "Skincare", slug: "skincare", description: "Routines, ingredients, and tips", icon: "✨" },
      { name: "Hair Care", slug: "hair-care", description: "Styling tips and hair health", icon: "💇‍♀️" },
      { name: "Fashion", slug: "fashion", description: "Trends, outfits, and style guides", icon: "👗" },
    ];

    categories.forEach(cat => {
      const id = randomUUID();
      const category: Category = { ...cat, id };
      this.categories.set(id, category);
    });

    // Create sample blog posts
    const samplePosts = [
      {
        title: "10-Minute Morning Makeup Routine for Busy Days",
        slug: "10-minute-morning-makeup-routine",
        excerpt: "Master the art of looking effortlessly put-together with this quick morning routine that will have you ready in minutes...",
        content: "In today's fast-paced world, finding time for a complete makeup routine can be challenging. This 10-minute morning makeup routine is designed to help you look polished and put-together without spending hours in front of the mirror...",
        category: "makeup",
        author: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        tags: ["morning routine", "quick makeup", "busy lifestyle"]
      },
      {
        title: "Complete Guide to Building Your Skincare Routine",
        slug: "complete-guide-skincare-routine",
        excerpt: "Everything you need to know about creating a personalized skincare routine that works for your skin type and concerns...",
        content: "Building an effective skincare routine doesn't have to be complicated. In this comprehensive guide, we'll walk you through the essential steps and products you need for healthy, glowing skin...",
        category: "skincare",
        author: "Emma Rodriguez",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        tags: ["skincare routine", "skin health", "beauty basics"]
      },
      {
        title: "Best Hair Masks for Damaged Hair",
        slug: "best-hair-masks-damaged-hair",
        excerpt: "Restore your hair's health and shine with these powerful DIY and store-bought hair masks that actually work...",
        content: "Damaged hair can be frustrating, but with the right hair masks, you can restore your hair's health and vitality. Here are our top recommendations for both DIY and commercial hair masks...",
        category: "hair-care",
        author: "Maya Patel",
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        tags: ["hair care", "hair masks", "damaged hair"]
      },
      {
        title: "Spring Fashion Trends You Need to Try",
        slug: "spring-fashion-trends-2024",
        excerpt: "From soft pastels to bold statement pieces, discover the must-have spring trends that will refresh your wardrobe...",
        content: "Spring is here, and it's time to refresh your wardrobe with the latest trends. This season is all about embracing color, texture, and comfort while maintaining that effortless chic style...",
        category: "fashion",
        author: "Zoe Williams",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        tags: ["spring fashion", "fashion trends", "wardrobe refresh"]
      },
      {
        title: "Mastering the Perfect Smoky Eye",
        slug: "mastering-perfect-smoky-eye",
        excerpt: "Learn the step-by-step technique to create stunning smoky eyes that work for any occasion, from subtle to dramatic...",
        content: "The smoky eye is a timeless makeup look that can be adapted for any occasion. Whether you're going for a subtle daytime look or a dramatic evening style, mastering this technique is essential...",
        category: "makeup",
        author: "Luna Kim",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        tags: ["smoky eye", "eye makeup", "makeup tutorial"]
      },
      {
        title: "Natural Hair Care for Healthy Curls",
        slug: "natural-hair-care-healthy-curls",
        excerpt: "Embrace your natural texture with these expert tips for maintaining healthy, bouncy curls using natural ingredients...",
        content: "Caring for curly hair requires a different approach than straight hair. Natural ingredients and gentle techniques can help you achieve healthy, defined curls that look and feel amazing...",
        category: "hair-care",
        author: "Aria Johnson",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        tags: ["natural hair", "curly hair", "hair care tips"]
      },
      {
        title: "What's the Deal with Korean Skincare? A Beginner's Guide",
        slug: "korean-skincare-beginners-guide",
        excerpt: "Ever stared at a 10-step Korean skincare routine and thought, 'Who has time for all that?' You're not alone. While your friends are slathering snail mucus and fermented rice water on their faces, you're still trying to figure out if toner is actually necessary.",
        content: `Ever stared at a 10-step Korean skincare routine and thought, "Who has time for all that?" You're not alone. While your friends are slathering snail mucus and fermented rice water on their faces, you're still trying to figure out if toner is actually necessary.

Let me save you hours of confused Googling with this no-nonsense guide to Korean skincare for absolute beginners.

The Korean skincare philosophy isn't just about looking good—it's about treating your skin as something worthy of time and attention. That's why millions have ditched their quick three-step American routines for this seemingly complex but surprisingly satisfying approach.

But here's what nobody tells you about getting started with Korean skincare products: you don't need to dive into the deep end with a 12-step routine and a bathroom cabinet full of exotic ingredients...

## The Origins of the Korean Skincare Revolution

### How K-Beauty Became a Global Phenomenon

The Korean skincare revolution didn't happen overnight. Back in the 1990s, Korean beauty brands were barely known outside of Asia. Fast forward to today, and K-beauty products line the shelves of Sephora, Ulta, and even local drugstores worldwide.

The global explosion really kicked off around 2011 when BB creams hit Western markets. These all-in-one products promised multiple benefits and caught the attention of beauty enthusiasts looking for multitasking products. Soon after, Korean sheet masks became the must-have skincare item, showing up on social media feeds everywhere.

What really sealed the deal? Korean entertainment. The "Hallyu" or Korean Wave – including K-dramas, K-pop, and Korean films – showcased flawless-skinned celebrities who had viewers wondering, "How do they get that glow?" As shows like "Crash Landing on You" and bands like BTS gained international fame, so did Korean beauty standards and products.

### The Philosophy Behind the 10-Step Routine

The famous 10-step Korean skincare routine isn't about using more products just for the sake of it. The approach stems from a fundamental difference in skincare philosophy.

While Western skincare often focuses on quick fixes and treating problems after they appear, Korean skincare emphasizes prevention, hydration, and treating skin with gentle, consistent care.

Each step serves a purpose, and the ritual itself reflects the Korean cultural view that skincare isn't a chore—it's self-care, a daily practice of respecting your skin.

## Essential Korean Skincare Ingredients to Know

### Snail Mucin: The Unexpected Hero

When first hearing about snail mucin, most skincare newcomers raise an eyebrow. Yes, it's exactly what it sounds like - the slimy trail left by snails. But don't let that deter you! This unexpected ingredient has gained massive popularity in Korean skincare for good reason.

Snail mucin contains a powerful mix of glycoproteins, hyaluronic acid, and glycolic acid that work together to repair damaged skin, stimulate collagen production, reduce inflammation, and lock in moisture.

### Hyaluronic Acid for Deep Hydration

Korean skincare's obsession with hydration explains why hyaluronic acid appears in nearly every product category. This molecule isn't just any moisturizer - it can hold up to 1000 times its weight in water.

What makes hyaluronic acid special is how it works on multiple skin levels: surface hydration for immediate plumping, deep penetration for lasting moisture, and creates a moisture barrier without clogging pores.

### Centella Asiatica for Soothing Sensitive Skin

Centella Asiatica (also called Cica or Tiger Grass) has been used in Asian medicine for centuries. This humble herb packs serious skin-calming power, especially for irritated or sensitive complexions.

The magic comes from four key compounds that reduce redness, speed healing, strengthen the skin barrier, and fight inflammation.

## Simplified Korean Skincare for Beginners

### The Essential 4-Step Routine to Start With

Forget the intimidating 10-step Korean skincare routines splashed across social media. The beauty of K-beauty lies in its adaptability. For beginners, a simple 4-step routine delivers impressive results without overwhelming:

1. **Cleanse**: Start with an oil-based cleanser to remove makeup and sunscreen, followed by a water-based cleanser to wash away dirt and impurities.

2. **Tone**: Korean toners differ from Western astringents—they hydrate rather than strip the skin.

3. **Treat**: Apply a serum or essence targeting specific concerns like brightening, hydration, or acne.

4. **Moisturize**: Seal everything in with a moisturizer appropriate for your skin type.

That's it! Add sunscreen in the morning, and this foundation works for nearly everyone.`,
        category: "skincare",
        author: "Dr. Sarah Kim",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        tags: ["korean skincare", "k-beauty", "skincare routine", "beginner guide"]
      }
    ];

    samplePosts.forEach(post => {
      const id = randomUUID();
      const blogPost: BlogPost = {
        ...post,
        id,
        publishedAt: new Date(),
        createdAt: new Date()
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(category?: string): Promise<BlogPost[]> {
    let posts = Array.from(this.blogPosts.values());
    if (category) {
      posts = posts.filter(post => post.category === category);
    }
    return posts.sort((a, b) => new Date(b.publishedAt || new Date()).getTime() - new Date(a.publishedAt || new Date()).getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      publishedAt: new Date(),
      createdAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async searchBlogPosts(query: string): Promise<BlogPost[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.blogPosts.values()).filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    ).sort((a, b) => new Date(b.publishedAt || new Date()).getTime() - new Date(a.publishedAt || new Date()).getTime());
  }

  async getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.publishedAt || new Date()).getTime() - new Date(a.publishedAt || new Date()).getTime())
      .slice(0, limit);
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(cat => cat.slug === slug);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
