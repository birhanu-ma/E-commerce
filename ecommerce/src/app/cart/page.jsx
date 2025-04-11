'use client';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';

export default function Cart() {
  const cartItems = useSelector((state) => state.cartAdded);

  return (
    <section className="flex flex-col">
      <Navigation />
      <div className="mt-15 flex flex-col sm:flex-row  mx-10">
        <div className="md:w-[65%] w-full flex flex-col shadow-lg md:mr-3 px-10">
          <div className="">
            <h1>Cart</h1>
            <span className="flex justify-between">
              <p>{cartItems.length} Selected items</p>
              <p className="text-blue-500 cursor-pointer">Delete selected items</p>
            </span>
            <h3>End date</h3>
          </div>
          <div className="flex flex-col">
            <span className="flex flex-row items-center py-2 border-b">
              <p className="font-medium">choice</p>
              <span className="px-3 text-gray-400">||</span>
              <p className="font-medium">shipped by</p>
              <span className="ml-auto text-green-500">free shipping</span>
            </span>
            
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex flex-row mx-3 shadow py-3 my-2">
                  <img 
                    className="h-20 w-20 object-contain" 
                    src={item.image} 
                    alt={item.title} 
                  />
                  <div className="flex flex-col ml-4">
                    <h2 className="font-medium">{item.title}</h2>
                    <p className="text-sm text-gray-500">Shop store number</p>
                    <h2 className="font-bold mt-1">${item.price.toFixed(2)}</h2>
                    <div className="mt-2 flex items-center">
                      <span className="text-sm">Qty: {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-gray-500">
                Your cart is empty
              </div>
            )}
          </div>
        </div>

     
        <div className="md:w-[33%] w-full shadow-lg flex flex-col  md:ml-3 p-4">
          <div className="flex flex-col mt-6">
            <div className="flex flex-row items-center mb-4">
              <img className="w-12 h-12 p-2 border rounded-full" src="/secure-icon.png" alt="Secure" />
              <span className="ml-2 text-sm">Secure checkout</span>
            </div>
            
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p className="text-green-500">FREE</p>
              </div>
              <div className="flex justify-between border-t pt-3">
                <p className="font-medium">Estimated Total</p>
                <p className="font-bold">
                  ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                </p>
              </div>
            </div>
            
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              Checkout
            </button>
          </div>
          
          <div className="flex flex-col mt-6">
            <h1 className="font-bold mb-3">Pay with</h1>
            <div className="flex flex-row space-x-3">
              <FaCcVisa size={40}/>
              <FaCcMastercard size={40}/>
              <FaCcPaypal size={40}/>
            </div>
            <hr className="my-4" />
            <div className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <div>
                <p className="font-medium">Buyer protection</p>
                <p className="text-sm text-gray-500">Get a full refund if items not as described</p>
              </div>
            </div>
          </div>
        </div>
     
      </div>
      <NewsLetter/>
      <Footer/>
     
    </section>
  );
}