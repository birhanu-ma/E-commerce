
'use client'
import {use} from 'react'

import { useState, useEffect } from "react"
import Navigation from '../components/Navigation';
export default function produtDetails({params}){
    
      
    const promisedId = use(params);

    const [selectedProduct, setSelectedProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(response=>response.json())
        .then(data=>{
            setSelectedProduct(data);
            setLoading(false);
        }
    )},[])

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!selectedProduct) {
        return <div>Product data not found</div>; 
    }
    const product = selectedProduct.find((item)=>item.id===parseInt(promisedId.id));


    if (!product) {
        return <div>Product not found</div>; 
    }
 

    return(
        <>
        <Navigation/>
        <section key={product.id} className="w-full h-[110vh] flex flex-row py-20">
            <div className="w-[50%] flex flex-col mx-5 h-full">
                <img className="w-full h-full" src={product.image} alt="" />
                {/* <div className="my-2 w-full flex flex-row border h-30">
                    <img className=" flex-1  border" src="#" alt="" />
                    <img className="flex-1   border" src="#" alt="" />
                    <img className="flex-1  border" src="#" alt="" />
                    <img className="flex-1  border" src="#" alt="" />

                </div> */}

            </div>
            <div className="w-[50%] pr-5 h-full flex flex-col">
                <h4 >{product.title}</h4>
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
                    />
                    <button className="w-30 bg-blue-400 rounded-full">add to cart</button>
                </span>
                <h3 className="my-5">Product details</h3>
                <p >{product.description}</p>

            </div>

        </section>
        </>

    )
}