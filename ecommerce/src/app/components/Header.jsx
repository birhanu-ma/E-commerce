
'use client'
import React, {useState, useEffect} from 'react'

export default function Header() {
    const [backgroundColor, setBackgroundColor] =useState([]);

    useEffect(()=>{
        fetch(` https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>setBackgroundColor(data.slice(4,5)))

    },[])

  return (
    <section className="relative z-5 w-full h-[100vh]  flex  items-center justify-between " id="heros">
      
    
        <div className="relative z-10 ml-10">
        <h4  className="text-2xl">Tread in offer</h4>
        <h2 className="text-5xl">Supper value deals</h2>
        <h1 className="text-5xl">On all products</h1>
        <p  className="text-2xl">Save more with coupons & up to 70% off</p>
        <button className="text-2xl bg-blue-400 rounded">show now</button>

        </div>
        {
            backgroundColor.map((backImage)=>(
                <img key={backImage.id} className='absolute right-0 z-0 w-[50%] h-[80vh]' src={backImage.image} alt={backImage.title} />

            ))
        }
    
    </section>   
  );
}