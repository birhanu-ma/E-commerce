'use client'
import { useState, useEffect, use } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/featuers/cartSlice'
import Navigation from '../components/Navigation'

export default function ProductDetails({ params }) {
  const dispatch = useDispatch()
  const { id } = params
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found</div>

  return (
    <>
      <Navigation />
      <section className="w-full h-[110vh] flex flex-row py-20">
        <div className="w-[50%] flex flex-col mx-5 h-full">
          <img className="w-full h-full" src={product.image} alt="" />
        </div>
        <div className="w-[50%] pr-5 h-full flex flex-col">
          <h4>{product.title}</h4>
          <h1 className="my-5">${product.price}</h1>
          <select className="my-5 w-50 border" name="" id="">
            <option value="xl">xl</option>
            <option value="xxl">xxl</option>
            <option value="small">extra small</option>
            <option value="large">extra large</option>
          </select>
          <span>
            <input type="number" className="pl-7 w-20 border rounded-full" defaultValue="1" />
            <button 
              className="cursor-pointer w-30 bg-blue-400 rounded-full"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </span>
          <h3 className="my-5">Product details</h3>
          <p>{product.description}</p>
        </div>
      </section>
    </>
  )
}