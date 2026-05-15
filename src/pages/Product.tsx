import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1551028719-072183c59d1df?auto=format&fit=crop&q=80&w=1200',
];

export default function Product() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link to="/category" className="hover:text-black transition-colors">Women</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-black">Linen Blend Overshirt</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Images Section */}
          <div className="lg:w-3/5 flex flex-col md:flex-row-reverse gap-4">
            <div className="w-full relative aspect-[3/4] md:aspect-auto md:h-[800px] bg-gray-100 overflow-hidden">
              <img 
                src={IMAGES[activeImage]} 
                alt="Product" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar w-full md:w-24 flex-shrink-0">
              {IMAGES.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-[3/4] flex-shrink-0 w-20 md:w-full overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-black' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-tight mb-2">Linen Blend Overshirt</h1>
              <p className="text-xl text-gray-900 mb-4">৳৩,২০০</p>
              

              <p className="text-gray-600 leading-relaxed mb-6">
                Crafted from a premium linen-cotton blend, this overshirt combines lightweight breathability with structured durability. Features a relaxed fit ideal for layering.
              </p>
            </div>

            <div className="mb-8 space-y-6">
              {/* Color Selection */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-900">Color: <span className="font-normal text-gray-600 ml-1">Oatmeal</span></span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['bg-[#e3dcd2]', 'bg-[#2c3e50]', 'bg-[#1a1a1a]'].map((colorClass, idx) => (
                    <button key={idx} className={`w-10 h-10 rounded-full ${colorClass} ring-offset-2 hover:ring-2 ring-gray-400 transition-all focus:outline-none ${idx === 0 ? 'ring-2 ring-black' : ''}`} />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-900">Size</span>
                  <button className="text-sm text-gray-500 underline hover:text-black">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {['S', 'M', 'L', 'XL'].map((size, idx) => (
                    <button 
                      key={size} 
                      className={`border py-3 text-sm font-medium transition-colors focus:outline-none ${idx === 1 ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black text-gray-900'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                 <span className="block text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">Quantity</span>
                 <div className="flex items-center border border-gray-200 w-32">
                    <button className="px-4 py-3 text-gray-500 hover:text-black focus:outline-none" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="flex-1 text-center text-sm font-medium">{quantity}</span>
                    <button className="px-4 py-3 text-gray-500 hover:text-black focus:outline-none" onClick={() => setQuantity(quantity + 1)}>
                      <Plus className="w-4 h-4" />
                    </button>
                 </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-12">
              <Link to="/checkout" className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest text-center hover:bg-gray-800 transition-colors">
                Add to Cart
              </Link>
              <button className="w-full bg-transparent border border-gray-300 text-black py-4 text-sm font-bold uppercase tracking-widest text-center hover:border-black transition-colors">
                Save to Wishlist
              </button>
            </div>

            {/* Accordion Tabs */}
            <div className="border-t border-gray-200">
              {[
                { id: 'details', title: 'Product Details' },
                { id: 'shipping', title: 'Shipping & Returns' },
                { id: 'care', title: 'Care Instructions' }
              ].map((tab) => (
                <div key={tab.id} className="border-b border-gray-200">
                  <button 
                    className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
                    onClick={() => setActiveTab(activeTab === tab.id ? '' : tab.id)}
                  >
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-900">{tab.title}</span>
                    {activeTab === tab.id ? <Minus className="w-4 h-4 text-gray-500" /> : <Plus className="w-4 h-4 text-gray-500" />}
                  </button>
                  {activeTab === tab.id && (
                    <div className="pb-5 text-sm text-gray-600 leading-relaxed">
                      {tab.id === 'details' && 'Fit: Relaxed fit. Take your normal size. \n Material: 55% Linen, 45% Cotton. \n Features: Button closure, single chest pocket, straight hem.'}
                      {tab.id === 'shipping' && 'Free standard shipping on orders over $150. Returns accepted within 30 days of purchase.'}
                      {tab.id === 'care' && 'Machine wash cold with like colors. Do not bleach. Tumble dry low. Warm iron if needed.'}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
