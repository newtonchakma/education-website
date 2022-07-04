import React from 'react';
import Features from './Features';
import design from '../../../images/design.png'
import dataSecience from '../../../images/dataSecience.png'
import engineer from '../../../images/engineer.png'

const FeatureInfo = () => {
    return (
       <div className='pt-24 px-3'>
        <div className='mb-5 pb-7'>
            <h2 className='text-3xl font-bold font'>Featured topics by category</h2>
        </div>
         <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1  gap-5'>
            <Features cardTitle="Full stack web development" bgClass="bg-slate-500" students='3489'img={design}></Features>
            <Features cardTitle="Data Science" bgClass="bg-gradient-to-r from-secondary to-primary" students='6489' img={dataSecience}></Features>
            <Features cardTitle="Engineer" bgClass="bg-gradient-to-r from-secondary to-primary" students='2489' img={engineer}></Features>
            <Features cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary"  img={engineer}></Features>
         
           
        </div>
       </div>
    );
};

export default FeatureInfo;