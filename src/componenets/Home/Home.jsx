import { 
  ArrowTrendingDownIcon, 
  ArrowTrendingUpIcon, 
  ChartBarSquareIcon, 
  ChartPieIcon, 
  ComputerDesktopIcon, 
  PlusCircleIcon 
} from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 w-full h-64 flex flex-col justify-center items-center text-center text-white">
        <p className="text-4xl md:text-5xl font-extrabold tracking-wide">
          Share Surplus Food,<br />Reduce Waste
        </p>
        <p className="mt-3 text-lg md:text-xl">
          Help to donate your extra food to those in need and minimize food wastage.
        </p>
        <Link 
          to="/post" 
          className="mt-6 bg-teal-900 text-white text-lg md:text-xl px-6 py-3 rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition-transform transform hover:scale-105 inline-block"
          data-testid="hero-post-food-button"
        >
          Post Food
        </Link>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-teal-800 text-center mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-6">
          <Link 
            to="/post" 
            className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block"
            data-testid="post-food-card"
          >
            <PlusCircleIcon className="h-10 w-10 text-teal-600 mx-auto mb-3" />
            <span className="block font-semibold text-teal-800 hover:text-teal-600 text-center">Post Leftover Food</span>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Easily create a listing for all surplus food you want to donate.
            </p>
          </Link>
          <Link 
            to="/browse" 
            className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block"
            data-testid="browse-food-card"
          >
            <ComputerDesktopIcon className="h-10 w-10 text-teal-600 mx-auto mb-3" />
            <span className="block font-semibold text-teal-800 hover:text-teal-600 text-center">Browse Listings</span>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Find available food donations in your area to claim and pick up.
            </p>
          </Link>
          <Link 
            to="/dashboard" 
            className="bg-white p-5 rounded-xl border-2 border-teal-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block md:col-span-1"
            data-testid="dashboard-card"
          >
            <ArrowTrendingUpIcon className="h-10 w-10 text-teal-600 mx-auto mb-3" />
            <span className="block font-semibold text-teal-800 hover:text-teal-600 text-center">Track Donations</span>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Monitor your donation history and see the impact you've made.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
