

'use client'
import React, {useState, useEffect} from 'react'

export default function SmallBanner(){

    const [smallBanner, setSmallBanner] = useState([]);
    const [smallBanner2, setSmallBanner2] = useState([]);
    useEffect(()=>(
        fetch(`https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>setSmallBanner(data.slice(0,2)))
       

    ),[])
    useEffect(()=>(
        fetch(`https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>setSmallBanner2(data.slice(0,3)))
    ),[])
    return(
        <section className="w-full h-[100vh] flex flex-col mt-15">
            <div className="h-[35vh] px-10 flex flex-row justify-between  my-10">
                {smallBanner.map((item)=>(
                      <div key={item.id} className="h-[40vh] flex flex-col  flex-1 mx-7  border rounded">
                        <div className='flex justify-center'>
                        <img className='h-50 w-80' src={item.image} alt={item.title}/>
                        </div>
                      <div>
                      <h6>{item.title}</h6>
                      <p>{item.price}</p>
                      </div>
                      </div>

                ))}

            </div>
            <div className="h-[35vh] px-10 flex flex-row justify-between my-10">

                {smallBanner2.map((item)=>(
                       <div key={item.id} className="h-[45vh] flex flex-col flex-1 mx-7  border rounded">
                        <div className='flex justify-center'>
                        <img  className='items-center h-50 w-30' src={item.image} alt={item.title}/>

                        </div>
    
                       <div className='pl-0 ml-0'>
                       <h6>{item.title.slice(0,20)}</h6>
                       <p>{item.price}</p>

                       </div>
                    
                       </div>
                ))
                }
            </div>

        </section>

    )
}