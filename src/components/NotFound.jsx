import React from 'react'
import {Link} from 'react-router-dom'

//build a custom 404 page using tailwindcss
function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] lg:-mt-16">
            <h1 className="text-2xl md:text-5xl lg:text-9xl font-semibold pb-6 lg:pb-8">404! not found</h1>
            <h2 className="text-2xl text-slate-500 font-normal mb-14">Sorry, the page you are looking for does not exist</h2>
            <Link to="/" className="py-4 px-6 bg-gray-800 rounded-md text-white hover:bg-gray-900 transition duration-300 ease-in-out flex items-center animate-bounce">
                <p>Back to Home</p>
                <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </Link>
        </div>
  )
}

export default NotFound