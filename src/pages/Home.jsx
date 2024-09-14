import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import ProductCard from '../components/ProductCard';

export default function Home() {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [items,setItems] = useState([]);

  async function fetchData(){
    setLoading(true);
    try {
      const res =  await fetch(API_URL);
      const output = await res.json();
     // console.log(output);
      setItems(output);

    } 
    catch (error) {
      console.log("error aya g");
      setItems([]);
    }

    setLoading(false);
  }

  
useEffect(()=>{
  fetchData();
},[]);

  return (
    <div className=' h-[100vh] '>
      {
        loading? <Spinner/>:

        items.length>0 ?
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {items.map((item)=>{
           return <ProductCard key={item.id} item={item} />
          })}
        </div>):

        (<div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> )
      }
    </div>
  )
}
