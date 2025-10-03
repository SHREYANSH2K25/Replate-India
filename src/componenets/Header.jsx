import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRightEndOnRectangleIcon, ArrowRightOnRectangleIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
        
      <div className="flex flex-wrap w-full h-24 md:h-20 sm:h-40  justify-between items-center text-black text-lg font-semibold border-b border-slate-200 font-mono bg-gradient-to-r from-teal-50 to-white shadow-md">
        <Link to="/">
        <img className="w-16 h-16 md:w-20 md:h-20 sm:mx-30 items-center border-2 border-gray-300 rounded-full p-1 mx-4 md:mx-8 lg:mx-16 transition-transform hover:scale-105 sm:w-30 sm:h-30" src="https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-f858-61fb-bc33-921a30a4096a/raw?se=2025-06-27T18%3A39%3A01Z&sp=r&sv=2024-08-04&sr=b&scid=252a95cc-ec66-5668-adbe-6f3331741330&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-27T16%3A17%3A23Z&ske=2025-06-28T16%3A17%3A23Z&sks=b&skv=2024-08-04&sig=Hfmui9lt9iUsZ0kn1fqOzBkTXLo7kfVCcLlojEfZDyQ%3D" alt="logo" />
        </Link>
        {/* Display Navigation */}
        <ul className="hidden md:flex flex-col gap-3 items-center md:flex-row md:gap-6 lg:gap-10 p-4 md:p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
              )}
            >
              <p>HOME</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="post"
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
              )}
            >
              POST-FOOD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="browse"
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
              )}
            >
              BROWSE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
              )}
            >
              DASHBOARD
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex gap-2 mx-3 py-2 md:py-1 md:mx-4 lg:mx-6">
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-200 flex items-center gap-1">
            LOG IN <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
          </button>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-200 flex items-center gap-1">
            SIGN UP <PencilSquareIcon className="h-5 w-5" />
          </button>
        </div>
        {/* Mobile Nav Bar */}
        
        <div className='md:hidden flex items-center mx-4'>
            <button
            onClick={()=>setIsMenuOpen(!isMenuOpen)}
            className="text-teal-800 hover:text-teal-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            </button>
        </div>
        {/* DropDOWN list */}
        {isMenuOpen && (<div className='md:hidden absolute top-20 right-4 w-48 bg-white border-teal-200 rouned-lg shadow-lg z-10'>
            <ul className="flex flex-col gap-2 p-4">
          <li>
            <NavLink
              to="/" 
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
            
              )
            }
            onClick={() => setIsMenuOpen(false)}
            >
              <p>HOME</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="post"
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              POST-FOOD
            </NavLink>
          </li>
          <li>
            <NavLink
              to="browse"
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              BROWSE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) => (
                `${isActive ? 'text-green-600 underline decoration-green-500 decoration-2' : 'text-gray-800'} hover:text-green-500 hover:underline hover:decoration-green-300 transition-colors duration-200`
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              DASHBOARD
            </NavLink>
          </li>
        <li>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-200 flex items-center gap-1">
            LOG IN <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
          </button>
        </li>
        <li>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-200 flex items-center gap-1">
            SIGN UP <PencilSquareIcon className="h-5 w-5" />
          </button>
        </li>
        </ul>
        </div>)}
        </div>
        
      </div>
  )
}