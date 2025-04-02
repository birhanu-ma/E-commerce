'use client'

import React, {useEffect, useState} from 'react'
import Link from 'next/link';

export default function Feature(){

    const [feature, setFeature] =useState([]);

    useEffect(()=>{
        fetch(` https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>setFeature(data.slice(0,6)))

    },[])
    return(
        <section className="w-full h-[25vh] px-10 feactures flex flex-row justify-between">

            {feature.map((item, index)=>(
                 <Link key={item.id}  href={`/${item.id}`} className="flex-1 flex justify-center items-center mx-7  border rounded">
                    <div>
                    <img className='w-25 h-25' src={item.image} alt=""/>
                    <h6>{item.title.slice(0,5)}</h6>    
                    </div>
            
                 </Link>

            ))}
        </section>


    )
}