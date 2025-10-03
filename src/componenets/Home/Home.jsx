import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, ChartBarSquareIcon, ChartPieIcon, ComputerDesktopIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-300">
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 w-full h-64 flex flex-col justify-center items-center text-center text-white">
        <p className="text-4xl md:text-5xl font-extrabold tracking-wide">Share Surplus Food,<br />Reduce Waste</p>
        <p className="mt-3 text-lg md:text-xl">Help to donate your extra food to those in need and minimize food wastage.</p>
        <Link 
          to="/post" 
          className="mt-6 bg-teal-900 text-white text-lg md:text-xl px-6 py-3 rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition-transform transform hover:scale-105 inline-block"
          data-testid="hero-post-food-button"
        >
          Post Food
        </Link>
      </div>
    </div>
  )
}
