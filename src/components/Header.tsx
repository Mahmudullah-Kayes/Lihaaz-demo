import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button className="text-gray-500 hover:text-gray-700 p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
              Lihaaz
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/category" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Shop
            </Link>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-gray-500 hover:text-gray-900">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/checkout" className="text-gray-500 hover:text-gray-900 relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
