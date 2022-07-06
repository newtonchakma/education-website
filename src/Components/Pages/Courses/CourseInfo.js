import React from 'react';
import Course from './Course';
import webDesign from '../../../images/webDesign.jpg';

import endineer from '../../../images/endineer.jpeg';
import design from '../../../images/web4.jpg';
import mechine from '../../../images/mechine.jpg';
import imfor from '../../../images/imfor.jpg';
import python from '../../../images/python.jpg';


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
                <h1 className='text-4xl font-bold uparcase font'>OUR TOP COURSES</h1>
            
            </div>
              <div className='mt-8 mb-9 px-10'>
         <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
        
          <Course courseTitle="Full stack web development" modarator={modarator1} modaratorName="Jhon deo" price="120.99" students='7489' img={webDesign}></Course>
          <Course courseTitle="The Complete Python Course" modarator={modarator2} modaratorName="Sumon de" price="520.00" students='4489' img={python}></Course>
          <Course courseTitle="Information Technology Essentials" modarator={modarator3} modaratorName="Liza sha" price="869.99" students='2489'  img={imfor}></Course>
         
          <Course courseTitle="Machine Learning" modarator={modarator4} modaratorName="Danton kum" price="120.99" students='1489' img={mechine}></Course>
          <Course courseTitle=" web design" modarator={modarator5} modaratorName="Sumit kanti" price="520.00" students='4489' img={design}></Course>
          <Course courseTitle="Goal Setting & Time Management" modarator={modarator6} modaratorName="Minki " price="389.99" students='2489'  img={endineer}></Course>
         
           
        </div>
       </div>

        <div className='text-center'>
        <button class="btn btn-wide my-8 btn-outline btn-accent font-bold font">Explore All Courses
        
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
        </button>
        </div>
        </div>
    );
};

export default CourseInfo;