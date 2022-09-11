import React from 'react';
import RightArrow from '../assets/images/rightArrow.png';

function SubCategory({ name }) {
  return (
    <div className='subCategory'>
      <span>{name}</span>
      <div className='seeAll'>
        <p>See All</p>
        <img src={RightArrow} alt='-->' />
      </div>
    </div>
  );
}

export default SubCategory;
