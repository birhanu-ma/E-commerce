"use client";
import { useState, useEffect, use } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/featuers/cartSlice";
import Navigation from "../components/Navigation";
import Product from '../components/Product'

export default function ProductDetails({ params }) {
  const dispatch = useDispatch();
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Navigation />
      <section className="w-full flex flex-col py-20">
        <div className="flex flex-row mx-5 h-[100vh]">
          <img
            className="w-100 p-20 h-120  shadow-lg"
            src={product.image}
            alt=""
          />
          <div className="h-[70%] px-20 flex flex-col">
            <h4>{product.title}</h4>
            <h1 className="my-5">${product.price}</h1>
            <select className="my-5 w-50 border" name="" id="">
              <option value="xl">xl</option>
              <option value="xxl">xxl</option>
              <option value="small">extra small</option>
              <option value="large">extra large</option>
            </select>
            <span>
              <input
                type="number"
                className="pl-7 w-20 border rounded-full"
                defaultValue="1"
              />
              <button
                className="cursor-pointer w-30 h-8 bg-blue-400 rounded-full mx-3"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </button>
            </span>
            <h3 className="my-5">Product details</h3>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="mx-20">
          <h1>Leave Us a Review</h1>
        </div>

        <form className="flex flex-col h-100 sm:h-120 mb-5 shadow-lg mx-10">
          <div className="w-full flex flex-col items-center sm:h-100 sm:mt-10">
            <div className="flex w-full flex-row">
              <input
                className="h-10 w-[47%]  border rounded pl-3 mb-2 mx-5"
                type="text"
                name="name"
                placeholder="your name"
                required
              />
              <input
                className="h-10 w-[47%] border rounded pl-3 mx-5 mb-2"
                type="email"
                name="email"
               
                placeholder="your email"
                required
              />
            </div>
            <div className="w-full flex justify-center items-center">
            <textarea
              className="w-[96%] h-30 border rounded pl-3 sm:h-40 my-2 mb-7"
              name="message"
          
              placeholder="your message"
              required
            ></textarea>

            </div>
           

            <div className="w-full flex justify-center">
              <button
                className="w-[40%] h-10 cursor-pointer rounded-full bg-black text-white mb-10 disabled:bg-gray-400"
                type="submit"
              >
                send message
              </button>
            </div>
          </div>
        </form>
        
        <h1 className="text-[clamp(1rem,5vw,3rem)] mx-10 mt-0">Similar Products</h1>
        <Product/>
        

      </section>
    </>
  );
}
