import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
        <div className="">
          <div className="flex justify-between h-16 px-10 shadow items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">Digital Reef</h1>
              <div className="hidden md:flex justify-around space-x-4">
                <a href="#" className="hover:text-indigo-600 text-gray-700">Home</a>
                <a href="#" className="hover:text-indigo-600 text-gray-700">About</a>
                <a href="#" className="hover:text-indigo-600 text-gray-700">Service</a>
                <a href="#" className="hover:text-indigo-600 text-gray-700">Contact</a>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
                <Link to={'/'} className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">SIGNUP</Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
