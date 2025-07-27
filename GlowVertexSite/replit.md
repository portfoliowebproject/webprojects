# GlowVertex Blog Website

## Overview

GlowVertex is a modern, elegant beauty and fashion blog website built with React, TypeScript, and Express.js. The application features a clean, responsive design focused on makeup, skincare, hair care, and fashion content. It provides a full-stack solution with a RESTful API backend and a modern React frontend using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system variables
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Design**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: TSX for TypeScript execution in development

### Design System
- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**: Soft pastels with pink (#F5A3C7), cream (#FEF7ED), and gold accents
- **Component Library**: Custom components extending shadcn/ui with beauty-focused styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Key Components

### Database Schema
- **Users**: Basic user management with username/password authentication
- **Blog Posts**: Content management with title, slug, excerpt, content, category, author, image, tags, and timestamps
- **Categories**: Organized content sections (Makeup, Skincare, Hair Care, Fashion)
- **Newsletter**: Email subscription management

### API Endpoints
- `GET /api/posts` - Retrieve blog posts with optional category filtering
- `GET /api/posts/recent` - Get recent posts with limit parameter
- `GET /api/posts/search` - Search posts by query string
- `GET /api/posts/:slug` - Get individual blog post by slug
- `POST /api/newsletter/subscribe` - Newsletter subscription endpoint
- `GET /api/categories` - Retrieve all categories

### Frontend Pages
- **Home**: Hero section, category grid, recent posts, newsletter signup
- **Category**: Filtered blog posts by category
- **Blog Post**: Individual post view with full content
- **About**: Company information and mission
- **Contact**: Contact form and business information

### UI Components
- **Header**: Logo, navigation menu, search functionality, mobile menu
- **Footer**: Brand information, social links, quick navigation
- **Blog Card**: Post preview with image, category, title, excerpt, author
- **Category Grid**: Visual category navigation with icons and descriptions
- **Newsletter**: Email subscription form with validation
- **Hero**: Landing section with call-to-action buttons

## Data Flow

### Content Management
1. Blog posts are stored in PostgreSQL with rich metadata
2. Categories provide content organization and filtering
3. Search functionality enables content discovery
4. Recent posts API supports homepage content display

### User Interaction
1. Users browse content through category pages and search
2. Newsletter subscriptions are captured and stored
3. Contact form submissions are handled (simulated in current implementation)
4. Responsive design ensures mobile and desktop accessibility

### Performance Optimization
1. TanStack Query provides caching and background updates
2. Vite enables fast development builds and code splitting
3. Image optimization through external CDN services
4. Lazy loading and pagination support (ready for implementation)

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, TanStack Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Utilities**: date-fns, wouter, react-hook-form
- **Icons**: Lucide React, React Icons

### Backend Dependencies
- **Server**: Express.js, connect-pg-simple for sessions
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod with drizzle-zod integration
- **Development**: tsx, vite plugins for development experience

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full type safety across client and server
- **Linting/Formatting**: ESBuild for production builds
- **Path Mapping**: Absolute imports with @ aliases

## Deployment Strategy

### Development Environment
- Concurrent development server with Vite HMR and Express API
- Memory storage implementation for rapid prototyping
- Hot reload for both frontend and backend changes
- Replit-specific optimizations and development banner

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Served through Express with production optimizations
4. **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Environment Configuration
- **Development**: NODE_ENV=development with memory storage and sample data
- **Production**: NODE_ENV=production with PostgreSQL database
- **Database**: Drizzle migrations in `./migrations` directory
- **Configuration**: Environment variables for database and external services

### Scalability Considerations
- Database schema supports growth with proper indexing on slugs and categories
- API endpoints designed for pagination and filtering
- Component architecture supports feature expansion
- Modular design enables easy addition of new content types and features