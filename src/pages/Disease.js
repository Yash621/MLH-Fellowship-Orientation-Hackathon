import React from 'react'
import { Link } from 'react-router-dom'

export default function Disease() {
  return (
    <div className='text-white'>

      <div className="grid place-items-center py-5">
        <h1 className="text-5xl font-bold"> Disease Predictuion</h1>
        <div className='bg-blue-500 h-1 w-96 my-2 rounded-lg'></div>
        </div>

      <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-16 pb-24">

        <Link to="/skinCancer">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Skin Cancer</div>
          </div>
        </Link>

        <Link to="/covid">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">COVID'19 detection</div>
          </div>
        </Link>

        <Link to="/brainTumor">
          <div className="w-[22rem] h-[22rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
            <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-white">Brain Tumor Detection</div>
          </div>
        </Link>

      </div>
    </div>
  )
}
