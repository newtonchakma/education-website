import React from 'react';
import Course from './Course';
import webDesign from '../../../images/webDesign.jpg';
import dataSecience from '../../../images/data.jpeg';
import endineer from '../../../images/endineer.jpeg';


import modarator1 from '../../../images/modarator1.jpg'
import modarator2 from '../../../images/modarator2.jpg'
import modarator3 from '../../../images/modarator3.jpg'
import modarator4 from '../../../images/modarator4.jpg'
import modarator5 from '../../../images/modarator5.jpg'
import modarator6 from '../../../images/modarator6.jpg'

const CourseInfo = () => {
    return (
        <div className='py-24'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold uparcase'>OUR TOP COURSES</h1>
            </div>
              <div className='mt-8 mb-9 px-10'>
         <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5'>
        
          <Course courseTitle="Full stack web development" modarator={modarator1} modaratorName="jhon deo" price="120.99" students='1489' img={webDesign}></Course>
          <Course courseTitle="Full stack web development" modarator={modarator2} modaratorName="jhon deo" price="520.00" students='4489' img={dataSecience}></Course>
          <Course courseTitle="Full stack web development" modarator={modarator3} modaratorName="jhon deo" price="389.99" students='2489'  img={endineer}></Course>
         
          <Course courseTitle="Full stack web development" modarator={modarator4} modaratorName="jhon deo" price="120.99" students='1489' img={webDesign}></Course>
          <Course courseTitle="Full stack web development" modarator={modarator5} modaratorName="jhon deo" price="520.00" students='4489' img={dataSecience}></Course>
          <Course courseTitle="Full stack web development" modarator={modarator6} modaratorName="jhon deo" price="389.99" students='2489'  img={endineer}></Course>
         
           
        </div>
       </div>

        <div className='text-center'>
        <button class="btn btn-wide my-8 btn-outline btn-accent font-bold ">Explore All Courses</button>
        </div>
        </div>
    );
};

export default CourseInfo;