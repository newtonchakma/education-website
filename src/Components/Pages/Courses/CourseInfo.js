import React from 'react';
import Course from './Course';
import webDesign from '../../../images/webDesign.jpg';
import dataSecience from '../../../images/data.jpeg';
import endineer from '../../../images/endineer.jpeg';

const CourseInfo = () => {
    return (
        <div className='py-24'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold uparcase'>OUR TOP COURSES</h1>
            </div>
              <div className='mt-8 mb-9 px-10'>
         <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5'>
        
          <Course courseTitle="Full stack web development" modarator="" modaratorName="jhon deo" price="120.99" students='1489' img={webDesign}></Course>
          <Course courseTitle="Full stack web development" modarator="" modaratorName="jhon deo" price="520.00" students='4489' img={dataSecience}></Course>
          <Course courseTitle="Full stack web development" modarator="" modaratorName="jhon deo" price="389.99" students='2489'  img={endineer}></Course>
         
           
        </div>
       </div>

        <div className='text-center'>
        <button class="btn btn-wide my-8 btn-outline btn-accent font-bold ">Explore All Courses</button>
        </div>
        </div>
    );
};

export default CourseInfo;