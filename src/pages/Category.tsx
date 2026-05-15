import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';

const PRODUCTS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Essential Garment ${i + 1}`,
  price: `৳${((Math.random() * 5 + 2) * 1000).toFixed(0)}`,
  colorCount: Math.floor(Math.random() * 4) + 1,
  image: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1551028719-072183c59d1df?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1533453239731-38d91b1b371b?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1548690596-144dd08f0f08?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1505051506881-a60ec4dacbbf?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1594938298596-70f56fb5ce64?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1515521243559-10d2b1aada49?w=800&h=1000&fit=crop'
  ][i % 12]
}));

export default function Category() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Category Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-100">
        <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-tight mb-4">Collection</h1>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">
          Explore our thoughtfully curated collection of essentials, 
          designed with uncompromising quality and timeless appeal.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Bar */}
        <div className="flex justify-between items-center pb-6 border-b border-gray-200 mb-8">
          <button 
            className="flex items-center text-sm font-medium text-gray-700 hover:text-black lg:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          <div className="hidden lg:flex space-x-8">
            {['Clothing', 'Shoes', 'Accessories', 'Sale'].map((cat) => (
              <button key={cat} className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center text-sm font-medium text-gray-700 cursor-pointer group">
            Sort by: <span className="text-black ml-1">Featured</span>
            <ChevronDown className="w-4 h-4 ml-1 text-gray-400 group-hover:text-black transition-colors" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-8 sticky top-24">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Category</h3>
                <ul className="space-y-3">
                  {['Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Knitwear'].map(item => (
                    <li key={item}>
                      <label className="flex items-center cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer" />
                        <span className="ml-3 text-sm text-gray-600 group-hover:text-black transition-colors">{item}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} className="border border-gray-200 text-sm py-2 hover:border-black hover:bg-black hover:text-white transition-colors">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {PRODUCTS.map((product) => (
                <Link key={product.id} to="/product" className="group block product-card">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full object-center group-hover:opacity-90 transition-opacity mix-blend-multiply"
                    />
                    <div className="quick-add absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <button className="w-full bg-white text-black py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors border border-black shadow-lg">
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1 leading-tight">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.colorCount} Color{product.colorCount > 1 ? 's' : ''}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-16 flex justify-center pb-12">
              <button className="px-8 py-3 border border-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
