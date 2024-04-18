'use client'

import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import ProductsCard from '../components/ProductsCard'
import { useEffect } from 'react'
import { useState } from 'react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

export default function Home() {
  const [products, setProducts] = useState(null);

  const getProduct = async () => {
    try {
      const response = await fetch('/api/products', {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const productData = await response.json();
      console.log(productData);
      setProducts(productData)
     
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  

  useEffect(() => {
    getProduct();
  },[]);

  useEffect(()=>{
    if(products!==null){
      console.log("producsdfvsdvts",products.success)
    }
    
  
  },[products])

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
   
    <div className="relative w-full">
      <Navbar/>
      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Buy Books directly from <span className='text-[#9dbf9e]'>seniors and save money.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to BookSwap. A place to Buy and sell 
            books directly from seniors and save money.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-11">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Products
              </button>
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Have some questions?
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Products">
      <h2 className="text-2xl font-bold text-center leading-tight text-black sm:text-4xl lg:text-3xl">
            Our latest Products
          </h2>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
           
          {products !== null && products.data.map((product) => (
  <ProductsCard key={product._id} product={product} name={product.name} img={product.image} category={product.class !== null ? product.class : null}
  price={product.price} des={product.description} id={product._id}/>
))}

          </div>
      </div>
      <Footer/>
    </div>
  )
}
