import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FEATURED_PRODUCTS = [
  { id: 1, name: 'Linen Blend Overshirt', price: '৳৩,২০০', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Relaxed Fit Jeans', price: '৳২,৮০০', image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Minimalist Sneaker', price: '৳৪,৫০০', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Structured Tote', price: '৳৫,১০০', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-sm tracking-tight">
            The Fall Collection
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg mx-auto font-light">
            Discover our new arrivals featuring premium textures and effortless silhouettes for the modern wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/category" 
              className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Better Featured Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">Curated Categories</h2>
            <Link to="/category" className="hidden sm:flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
              Explore All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/category" className="group block relative h-[500px] overflow-hidden lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=500&fit=crop" 
                alt="Outerwear" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-8">
                <span className="bg-white text-black px-4 py-2 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Outerwear</span>
                <h3 className="text-white text-2xl font-serif">Tailored for the season</h3>
              </div>
            </Link>
            
            <div className="flex flex-col gap-6">
              <Link to="/category" className="group block relative h-[238px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=800" 
                  alt="Knitwear" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-bold tracking-widest uppercase">Knitwear</span>
                </div>
              </Link>
              <Link to="/category" className="group block relative h-[238px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800" 
                  alt="Accessories" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-bold tracking-widest uppercase">Accessories</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standout Featured Product Section */}
      <section className="bg-stone-100 py-0">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/2 relative bg-stone-200">
             <img 
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Product" 
                className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
          <div className="w-full md:w-1/2 pl-8 pr-8 py-20 lg:px-24 flex flex-col justify-center">
             <span className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4">Spotlight</span>
             <h2 className="text-4xl font-serif font-bold text-gray-900 tracking-tight mb-6">The Linen Blend Overshirt</h2>
             <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
               Crafted from a premium blend of linen and cotton, this overshirt combines lightweight breathability with structured durability. It features a relaxed silhouette perfect for transitional weather, offering an effortless layer that elevates any everyday ensemble.
             </p>
             <p className="text-2xl font-medium text-gray-900 mb-10">৳৩,২০০</p>
             <Link 
              to="/product" 
              className="px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors self-start"
            >
              Discover
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight mb-4">New Arrivals</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore the latest additions to our collection. Thoughtfully designed pieces for everyday refinement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {FEATURED_PRODUCTS.map((product) => (
              <Link key={product.id} to="/product" className="group block product-card">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-cover w-full h-full object-center group-hover:opacity-90 transition-opacity"
                  />
                  <div className="quick-add absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <button className="w-full bg-white text-black py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors border border-black shadow-lg">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-500">2 Colors</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/category" 
              className="inline-block border-b-2 border-black pb-1 text-sm font-bold tracking-widest uppercase hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              Shop All New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Image Only */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Fashion layout" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            Elevating everyday essentials with timeless design and uncompromising quality.
          </h2>
          <p className="text-white/80 font-medium tracking-widest uppercase text-sm">
            Crafted for the discerning eye
          </p>
        </div>
      </section>
    </div>
  );
}
