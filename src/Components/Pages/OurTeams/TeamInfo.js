import React from 'react';
import Teams from './Teams';
import modarator from '../../../images/modarator5.jpg'

const TeamInfo = () => {
    return (
        <div className='py-24'>
        <div className='text-center'>
            <h1 className='text-5xl mb-3 font-bold uparcase'>MEET OUR TEAMS</h1>
            <h1 className='text-xl mb-5 pb-8 font-bold uparcase'>
            Being accomplished developers themselves, the Curriculum Team is<br/> an experienced group of coding instructors.
            </h1>
        </div>
          <div className='mt-8 mb-9 px-10'>
     <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8'>
    
      <Teams  modaratorName="Vanugopal" position=" CTO & Co-Founder" img={modarator}></Teams>
      <Teams  modaratorName="Vanugopal" position=" Director- Carriculum" img={modarator}></Teams>
      <Teams  modaratorName="Vanugopal" position=" Senior manager-technology" img={modarator}></Teams>
      <Teams  modaratorName="Vanugopal" position=" Senior carricolum enginner" img={modarator}></Teams>
      <Teams  modaratorName="Vanugopal" position=" Senior carricolum enginner" img={modarator}></Teams>
      <Teams  modaratorName="Vanugopal" position=" Senior carricolum enginner" img={modarator}></Teams>
     
    </div>
   </div>

    <div className='text-center'>
    <button class="btn btn-wide my-8 btn-outline btn-accent font-bold">Explore All Courses
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
    </button>
    </div>
    </div>
    );
};

export default TeamInfo;