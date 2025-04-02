'use client'
import React, {useState, useEffect} from 'react'



export default function Banner(){
    const [backgroundColor, setBackgroundColor] =useState([]);

    useEffect(()=>{
        fetch(` https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>setBackgroundColor(data.slice(5,6)))

    },[])
    return(

        <section className="relative mt-20 bg-gray-200 h-[30vh] w-full flex flex-col items-center justify-center">
           

            <div className='relative z-10'>
            <h4>Repair Services</h4>    
        <h2>up to <span>70% off </span>- All t-shirts and Accesseries</h2>
        <button className="">Explore More</button>

            </div>
            {backgroundColor.map((images)=>(
                 <img key={images.id} className='w-full absolut z-0 h-30 absolute z-0' src={images.image} alt="" />
            ))}
       

    </section>

    )
}