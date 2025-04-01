
'use client'
import React, {useState, useEffect} from 'react'

export default function Product(){
    const [product, setProduct] =useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((product) => setProduct(product.slice(0,8)));
    },[])
    product.map((onj)=>(
        console.log(onj)
    ))
    return(
        <section className="product flex flex-col">
            <div className="flex flex-col items-center my-15">
            <h2>Featured products</h2>
            <p>Summer collection new design</p>
            </div>

            <div className="w-full px-10 flex flex-wrap justify-between">
                {product.map((item) => (
                    <div key={item.id} className="w-[24%] mx-1 my-2 border rounded">
                        <img src={item.image} alt={item.title} className="w-full h-[200px] object-contain" />
                        <h6>{item.title.slice(0,30)}</h6>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
              
        </section>

    )
}