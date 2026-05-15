import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <h1 className="text-3xl font-serif font-bold text-gray-900 tracking-tight mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="lg:w-3/5">
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-lg font-bold text-gray-900">Contact Information</h2>
              </div>
              <input 
                type="tel" 
                placeholder="Mobile Number" 
                className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
              />
              <label className="flex items-center mt-4 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" defaultChecked />
                <span className="ml-3 text-sm text-gray-600 group-hover:text-black transition-colors">Send me order updates via SMS</span>
              </label>
            </div>

            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Delivery Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors col-span-2"
                />
                <input 
                  type="text" 
                  placeholder="Detailed Address (House, Road, Block, Area)" 
                  className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors col-span-2"
                />
                <select 
                  className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors bg-white appearance-none col-span-2"
                  defaultValue="inside"
                >
                  <option value="inside">Inside Dhaka City (Delivery ৳60)</option>
                  <option value="outside">Outside Dhaka City (Delivery ৳120)</option>
                  <option value="subarea">Sub-Area / Gazipur / Narayanganj (Delivery ৳100)</option>
                </select>
                <input 
                  type="text" 
                  placeholder="City / Thana" 
                  className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Alternative Phone (optional)" 
                  className="w-full border border-gray-300 p-4 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h2>
              <p className="text-sm text-gray-500 mb-4">Select your preferred payment method.</p>
              
              <div className="border border-gray-300 rounded-sm overflow-hidden">
                <div className="p-4 border-b border-gray-300 flex items-center bg-gray-50 cursor-pointer">
                  <input type="radio" name="payment" id="cod" className="w-4 h-4 border-gray-300 text-black focus:ring-black" defaultChecked />
                  <label htmlFor="cod" className="ml-3 text-sm font-medium text-gray-900 cursor-pointer">Cash on Delivery (COD)</label>
                </div>
                <div className="p-4 border-b border-gray-300 flex items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                  <input type="radio" name="payment" id="bkash" className="w-4 h-4 border-gray-300 text-black focus:ring-black" />
                  <label htmlFor="bkash" className="ml-3 text-sm font-medium text-gray-900 cursor-pointer w-full flex justify-between items-center">
                    bKash Digital Payment
                  </label>
                </div>
                <div className="p-4 flex items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors">
                  <input type="radio" name="payment" id="nagad" className="w-4 h-4 border-gray-300 text-black focus:ring-black" />
                  <label htmlFor="nagad" className="ml-3 text-sm font-medium text-gray-900 cursor-pointer">Nagad</label>
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-5 text-sm font-bold uppercase tracking-widest text-center hover:bg-gray-800 transition-colors mb-4">
              Confirm Order
            </button>
            <div className="text-center">
               <Link to="/category" className="text-sm font-medium text-gray-500 hover:text-black flex items-center justify-center">
                <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Return to Cart
              </Link>
            </div>
            
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-2/5">
            <div className="bg-gray-50 p-6 lg:p-8 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6 tracking-wide uppercase text-sm">Order Summary</h2>
              
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-20 bg-white overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                    2
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Linen Blend Overshirt</h3>
                  <p className="text-xs text-gray-500 mt-1">Oatmeal / M</p>
                </div>
                <p className="text-sm font-medium text-gray-900">৳৬,৪০০</p>
              </div>

               <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-16 h-20 bg-white overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                    1
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium text-gray-900">Structured Tote</h3>
                  <p className="text-xs text-gray-500 mt-1">Black / OS</p>
                </div>
                <p className="text-sm font-medium text-gray-900">৳৫,১০০</p>
              </div>

              <div className="border-y border-gray-200 py-6 mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">৳১১,৫০০</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium text-gray-900">৳৬০ (Inside Dhaka)</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-6">
                <span className="text-base font-bold text-gray-900 uppercase tracking-widest text-sm">Total</span>
                <span className="text-2xl font-medium text-gray-900">৳১১,৫৬০</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
