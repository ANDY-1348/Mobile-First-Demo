import React from 'react';
import Fav from '../assets/images/fav.png';

function ProductCard({ name, price, image, discount }) {
  return (
    <div className='productCard'>
      <div className='fav'>
        <img src={Fav} alt='Fav' />
      </div>
      <div className='imgBox'>
        <img src={image} alt='product' className='productImg' />
      </div>
      <div className='productContent'>
        <h3 className='productName'>{name}</h3>
        <h3 className='price'>
          {discount ? (
            <>
              <span
                className='no_disc'
                style={{
                  color: '#AAAAAA',
                  fontSize: '12px',
                  textDecorationLine: 'line-through',
                }}
              >
                ${price}
              </span>
              <span
                className='no_disc'
                style={{
                  color: '#E24747',
                }}
              >
                ${discount}
              </span>
            </>
          ) : (
            <span className='no_disc' style={{ color: '-moz-initial' }}>
              ${price}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
}

export default ProductCard;
