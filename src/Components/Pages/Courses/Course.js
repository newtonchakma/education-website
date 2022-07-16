import React from 'react';

const Course = ({service}) => {
  const {courseTitle,price,instructorName,courseImg,students,instructorImg}= service;
  return (
    <div>
  
      <div
      
      data-aos="zoom-in-right"
      data-aos-easing="linear"
      data-aos-duration="1500"
      class="card  bg-base-100 shadow-xl">
  <figure>
  
    <img className='link link-hover' src={courseImg} alt="Shoes" />
 </figure>
  <div class="p-2">
    <strong class="text-lg link link-hover">
      {courseTitle}
    </strong>
      <div className='flex justify-between mt-2  '>
           <div className='flex link link-hover'>

              <div class="avatar">
                 <div class="w-8 rounded-full ring-offset-base-100 ring-offset-2">
                   <img src={instructorImg} alt=''/>

                  </div>
               </div>
             <div className='px-3'> <p>{instructorName}</p></div>
           </div>
        
       
         <div class="rating rating-sm mt-2">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
           <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
       </div>
      </div>


    <div className='flex justify-between my-2'>
           <div class=" flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 font" fill="none" viewBox="0 0 24 24" stroke="currentColor"    stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
                   <span className='px-3 '>{students} students</span>
             </div> 

             <div class="">
                <strong className='text-orange-600'>${price}</strong>
             </div>
    </div>
  </div>
</div>
</div>
      
  
  );
};

export default Course;