import React from 'react';
import {  BoxSeam, CheckCircle, People } from 'react-bootstrap-icons';

const CourseSamary = () => {
    return (
        <div className="container pt-9 pb-16 mx-auto text-gray-600">        
           <div className="flex flex-wrap text-center">

        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
                <People className="text-orange-500 w-12 h-12 mb-3 inline-block"></People>
                <h2 className="title-font font-medium text-3xl text-gray-900 font">74.3M</h2>
                <p className="leading-relaxed">students</p>
            </div>
        </div>
        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <CheckCircle className="text-orange-500 w-12 h-12 mb-3 inline-block"></CheckCircle>
            <h2 className="title-font font-medium text-3xl text-gray-900 font">56.8M</h2>
            <p className="leading-relaxed">Success</p>
            </div>
        </div>
        
        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <BoxSeam className="text-orange-500 w-12 h-12 mb-3 inline-block"></BoxSeam>
            <h2 className="title-font font-medium text-3xl text-gray-900 font">348+</h2>
            <p className="leading-relaxed">courses</p>
            </div>
        </div>
       
        </div>
    </div>
    );
};

export default CourseSamary;