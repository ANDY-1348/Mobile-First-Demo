import React from 'react';

function Category({ name, image }) {
  return (
    <div className='categoryContainer'>
      <span>{name}</span>
      <img width='56px' height='53px' src={image} alt='alt' />
    </div>
  );
}

export default Category;
