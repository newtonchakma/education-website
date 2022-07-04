import React from 'react';

const Teams = ({position,img,modaratorName}) => {
    return (
        <div class="  bg-base-100  text-center">
        <div class="avatar text-center">
  <div class="w-48 rounded-full ring ring-gray ring-offset-base-100  text-center">
    <img src={img} alt='' />
  </div>
</div>
        <div class=" text-center">
          <strong class="text-2xl">{modaratorName}</strong>
          <p><strong>{position}</strong></p>
        </div>
      </div>
    );
};

export default Teams;