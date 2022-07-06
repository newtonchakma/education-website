import React from 'react';
import about from '../../../images/About.jpg'

const About = () => {
    return (
        <div className='mx-10 font'>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-bold uparcase font'>About Us</h1>
            
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
                <div>
                    <img className='w-100 rounded-lg' src={about} alt=''/>
                </div>
                <div>
                <h4 className='pb-10 text-justify text-lg'>
                Eduma is an outcome driven career school. Our mission is to skill India’s untapped & underutilized talent, and to train them for some of the most in-demand jobs in the world. We are introducing a new model of higher education in which we, Eduma, invest in our students’ future and success.
                </h4>
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <h1 className='text-2xl'>What is the medium of instraction ?</h1>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The medium of instruction at Eduma is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <h1 className='text-2xl'>Where is Eduma located ?</h1>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The Masai School head office is located in Bengaluru, India. Both our Web Development and Data Analytics courses are held live online in an interactive environment.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <h1 className='text-2xl'>Is attendence mandatory ?</h1>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, a minimum of 90% attendance is required to complete our courses. You also need to follow the guidelines mentioned in Masai's Code of Conduct Policy. Please go through this link to understand Code of Conduct policy.</div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default About;