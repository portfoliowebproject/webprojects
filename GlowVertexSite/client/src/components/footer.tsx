import { Link } from "wouter";
import { Instagram, Youtube } from "lucide-react";
import { FaPinterest, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h4 className="font-playfair text-2xl font-bold mb-4">
              Glow<span className="glow-text">Vertex</span>
            </h4>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted beauty companion for makeup, skincare, hair care, and fashion inspiration. Join thousands of beauty enthusiasts on their glow-up journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-soft-pink rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-soft-pink rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200">
                <FaPinterest className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-soft-pink rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-soft-pink rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200">
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-soft-pink transition-colors duration-200">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Contact</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Advertise With Us</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-semibold text-lg mb-4">Categories</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/category/makeup">
                  <a className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Makeup Tutorials</a>
                </Link>
              </li>
              <li>
                <Link href="/category/skincare">
                  <a className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Skincare Guides</a>
                </Link>
              </li>
              <li>
                <Link href="/category/hair-care">
                  <a className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Hair Care Tips</a>
                </Link>
              </li>
              <li>
                <Link href="/category/fashion">
                  <a className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Fashion Trends</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-pink transition-colors duration-200">Product Reviews</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 GlowVertex. All rights reserved. | Made with 💖 for beauty enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
