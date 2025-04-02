
'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link';

export default function NewArrival(){
    const[newArrival, setNewArrival] = useState([]);


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>setNewArrival(data.slice(0,8)))

    },[])
    
    return(
        <section className="product flex flex-col">
        <div className="flex flex-col items-center my-15">
        <h2>New Arrivals</h2>
        <p>Summer collection new design</p>
        </div>

        <div className="w-full px-10 flex flex-wrap justify-between">
                {newArrival.map((item) => (
                    <Link href={`/${item.id}`} key={item.id} className="w-[24%] justify-around mx-1 my-2 border rounded">
                        <img src={item.image} alt={item.title} className="w-full h-[200px] object-contain" />
                        <h6>{item.title.slice(0,30)}</h6>
                        <p>{item.price}</p>
                    </Link>
                ))}
        </div>
        
    </section>

    )
}