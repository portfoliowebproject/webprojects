import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, Instagram, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Makeup", href: "/category/makeup" },
    { name: "Skincare", href: "/category/skincare" },
    { name: "Hair Care", href: "/category/hair-care" },
    { name: "Fashion", href: "/category/fashion" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="font-playfair text-2xl lg:text-3xl font-bold text-dark-gray cursor-pointer">
                Glow<span className="glow-text">Vertex</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className={`text-dark-gray hover:text-soft-pink transition-colors duration-200 font-medium ${
                  location === item.href ? "text-soft-pink" : ""
                }`}>
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* Search and Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 pr-10 rounded-full border-gray-200 focus:ring-2 focus:ring-soft-pink focus:border-transparent"
              />
              <Button
                type="submit"
                size="sm"
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
              >
                <Search className="h-4 w-4 text-gray-400" />
              </Button>
            </form>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-soft-pink transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-soft-pink transition-colors duration-200">
                <FaPinterest className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-soft-pink transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a 
                        className={`block text-dark-gray hover:text-soft-pink transition-colors duration-200 font-medium py-2 ${
                          location === item.href ? "text-soft-pink" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-100">
                    <form onSubmit={handleSearch} className="relative mb-4">
                      <Input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pr-10 rounded-full border-gray-200"
                      />
                      <Button
                        type="submit"
                        size="sm"
                        variant="ghost"
                        className="absolute right-0 top-0 h-full px-3"
                      >
                        <Search className="h-4 w-4 text-gray-400" />
                      </Button>
                    </form>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-soft-pink transition-colors duration-200">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-soft-pink transition-colors duration-200">
                        <FaPinterest className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-soft-pink transition-colors duration-200">
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
