import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section id='banner' className="text-gray-600 body-font h-[500px]">
        <div className=" mx-auto flex items-center 
         h-full">
            <div className="flex flex-col pl-5   pt-5 mt-5 rounded-lg  mb-10 md:mb-0 md:w-[800px] mx-4 md:mx-0">
                <h1 className="title-font sm:text-2xl text-3xl md:text-5xl  mb-4 font-medium text-white">Experience a learning 
                    <br className="hidden lg:inline-block"/> platform that take you
                    <br className="hidden lg:inline-block"/> next level.
                </h1>
                <p className="leading-relaxed md:text-xl text-secondary ">World-class training and development programs developed by top teachers</p>
                <button className="btn btn-wide my-8 btn-outline btn-accent font-bold text-2xl">JOIN NOW</button>
            </div>  
        </div>
    </section>            
    );
};

export default Banner;