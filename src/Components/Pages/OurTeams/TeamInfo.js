import React from 'react';
import Teams from './Teams';
import './TeamInfo.css'
import modarator from '../../../images/modarator5.jpg'
import modarator7 from '../../../images/modarator7.png'
import modarator6 from '../../../images/modarator6.jpg'
import modarator4 from '../../../images/modarator4.jpg'
import modarator3 from '../../../images/modarator3.jpg'
import modarator2 from '../../../images/modarator2.jpg'

const TeamInfo = () => {
    return (
        <div className='py-24'>
        <div className='text-center'>
            <h1 className='text-5xl mb-3 font-bold  team'>Meet Our Teams</h1>
            <h1 className='text-xl mb-5  pb-8 font-bold  team'>
            Being accomplished developers themselves, the Curriculum Team is<br/> an experienced group of coding instructors.
            </h1>
        </div>
          <div className='mt-8 mb-9 px-10'>
     <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 team'>
    
      <Teams  modaratorName="Vanugopal" position=" CTO & Co-Founder" img={modarator}></Teams>
      <Teams  modaratorName="Bipulessor" position=" Director- Carriculum" img={modarator7}></Teams>
      <Teams  modaratorName="Sumendra" position=" Senior manager-technology" img={modarator6}></Teams>
      <Teams  modaratorName="Arjun tahkur" position=" Senior Web-developer" img={modarator4}></Teams>
      <Teams  modaratorName="Shima " position=" Senior carricolum enginner" img={modarator3}></Teams>
      <Teams  modaratorName="Justika" position=" Senior carricolum enginner" img={modarator2}></Teams>
     
    </div>
   </div>

    <div className='text-center team'>
    <button class="btn btn-wide my-8 btn-outline btn-accent font-bold">See More
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
    </button>
    </div>
    </div>
    );
};

export default TeamInfo;