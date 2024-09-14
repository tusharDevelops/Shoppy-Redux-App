import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { updatered } from '../redux/slices/CartSlice';

export default function Update() {

    const dispatch = useDispatch();


    function deleteMe(){
        dispatch(updatered(false));
    }
  return (
    <div className=' w-full h-[50px]  bg-slate-400 font-bold
    
     text-gray-800 flex justify-center items-center  grad'>
      <div className='flex w-[82%] justify-between'>
      <p>Notice: You Have To Style The Cart Using TailWind Guys!</p>
      <button className='flex items-baseline' onClick={deleteMe}> <span>Delete</span>
       <FcDeleteDatabase className='text-2xl ml-8'/></button>
      </div>
     
    </div>
  )
}
