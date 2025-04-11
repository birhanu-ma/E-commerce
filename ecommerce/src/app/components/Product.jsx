"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((product) => setProduct(product.slice(0, 8)));
  }, []);

  return (
    <section className="w-full flex flex-col my-10">
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4">
        {product.map((item) => (
          <Link
            href={`/${item.id}`}
            key={item.id}
            className="w-full flex flex-col justify-center items-center rounded-lg h-80 mx-auto shadow-lg py-5 my-10"
          >
            <div className="py-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-[200px] object-contain"
              />
            </div>

            <div className="flex items-left">
              <div className="w-full">
                <h6>{item.title.slice(0, 30)}</h6>
                <div className="flex flex-row"> 
                <FaStar  style={{ color: 'yellow' }}/>
                <FaStar  style={{ color: 'yellow' }}/>
                <FaStar  style={{ color: 'yellow' }}/>
                <FaStar  style={{ color: 'yellow' }}/>
                <FaStar  style={{ color: 'yellow' }}/>
                </div>
              
                <span className="flex justify-between">
                  price <p>${item.price}</p>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
