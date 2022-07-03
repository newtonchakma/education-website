import React from 'react';

const Features = ({img,bgClass,cardTitle}) => {
    return (
        <div className={`card card-side bg-base-100 shadow ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="">{cardTitle}</h2>
            </div>
        </div>
    );
};

export default Features;