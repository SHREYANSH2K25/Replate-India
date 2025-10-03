import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, ChartBarSquareIcon, ChartPieIcon, ComputerDesktopIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-300">
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 w-full h-64 flex flex-col justify-center items-center text-center text-white">
        <p className="text-4xl md:text-5xl font-extrabold tracking-wide">Share Surplus Food,<br />Reduce Waste</p>
        <p className="mt-3 text-lg md:text-xl">Help to donate your extra food to those in need and minimize food wastage.</p>
        <button className="mt-6 bg-teal-900 text-white text-lg md:text-xl px-6 py-3 rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition-transform transform hover:scale-105">
          Post Food
        </button>
      </div>
      <div className="text-center text-teal-900 text-2xl md:text-3xl font-bold mt-8 mb-6 underline decoration-4 decoration-teal-500">
        How It Works?
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-6">
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition-shadow duration-300">
          <PlusCircleIcon className="h-10 w-10 text-teal-600 mx-auto mb-3" />
          <span className="block font-semibold text-teal-800 hover:text-teal-600">Post Leftover Food</span>
          <p className="text-gray-600 text-sm mt-2">Easily create a listing for all surplus food you want to donate.</p>
        </div>
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition-shadow duration-300">
          <ComputerDesktopIcon className="h-10 w-10 text-teal-600 mx-auto mb-3" />
          <span className="block font-semibold text-teal-800 hover:text-teal-600">Browse Listings</span>
          <p className="text-gray-600 text-sm mt-2">Find available food donations in your area to claim and pick up.</p>
        </div>
        <div className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-1">
          <ArrowTrendingUpIcon className="h-10 w-10 text-teal-600 mx-auto mb-3" />
          <span className="block font-semibold text-teal-800 hover:text-teal-600">Track Donations</span>
          <p className="text-gray-600 text-sm mt-2">Monitor your donation history and see the impact you've made.</p>
        </div>
        </div>
        <div className='text-2xl text-center mt-10'>
            <h1 className=' text-base/10 md:text-xl lg:text-3xl '>
                An <span className='text-teal-800  bg-white p-1.5 rounded-lg font-semibold'>initiative</span> that uses technology to distribute surplus food among needy and <span className='text-teal-800  bg-white p-1.5 rounded-lg font-semibold'>hungry people</span>
            </h1>
        </div>
      </div>
  )
}