"use client";
import { useState, useEffect, use } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/featuers/cartSlice";
import Navigation from "../components/Navigation";
import Product from '../components/Product'
import Form from '../components/Form'

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
        <div className="flex flex-col justify-center items-center md:flex-row mx-5 md:h-[100vh]">
          <img
            className="w-80 h-60 md:w-full p-20 md:h-120  shadow-lg"
            src={product.image}
            alt=""
          />
          <div className="w-full h-[100vh] md:h-[70%] md:px-20 px-10 my-10 flex flex-col">
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
        <Form/>

    
        <h1 className="text-[clamp(1rem,5vw,3rem)] mx-10 mt-0">Similar Products</h1>
        <Product/>
        

      </section>
    </>
  );
}
