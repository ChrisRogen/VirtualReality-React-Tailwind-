import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center">
            Virtual Build tools
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {" "}
                For Developers
            </span>
        </h1>
        <p className="mt=10 text-lg text-center text-neutral-500 max-w-4xl">
            About Content of Website
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 mx-3 rounded-md">
                Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Documentation
            </a>
        </div>
        <div className=" flex mt-10 justify-center">
            <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Your Browser Dose not support the video tag.
            </video>
            <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Your Browser Dose not support the video tag.
            </video>

        </div>
    </div>
  )
}

export default HeroSection