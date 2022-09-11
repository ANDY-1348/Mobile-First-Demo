import React from 'react';
import Bell from '../assets/images/Bell.png';
import Search from '../assets/images/search.png';
import SubCategory from './SubCategory';
import Category from './Category';
import ProductCard from './ProductCard';
import { categoriesData, productsData } from '../assets/dummyData';
import BottomMenu from './BottomMenu';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <main>
        <div className='banner'>
          <span>Explore What Your Hospital Needs</span>
          <img width='20px' height='20px' src={Bell} alt='Bell' />
        </div>
        <Link to={'/search'}>
          <div className='inputBox '>
            <img
              width='15.26px'
              height='15.26px'
              src={Search}
              alt='Search'
              className='searchIcon'
            />
            <input type='text' placeholder='Syringe, Centrifuge, Ventilator,' />
          </div>
        </Link>
        <div className='productContainer'>
          <div className='categoryCard'>
            <SubCategory name='Categories' />
          </div>
          <div className='rowContainer'>
            {categoriesData &&
              categoriesData.length &&
              categoriesData.map((category) => (
                <Category key={category.id} {...category} />
              ))}
          </div>
          <div className='categoryCard'>
            <SubCategory name='Products' />
          </div>
          <div className='productItemContainer'>
            {productsData &&
              productsData.length &&
              productsData.map((data) => (
                <ProductCard key={data.id} {...data} />
              ))}
          </div>
        </div>
      </main>
      <BottomMenu />
    </>
  );
}

export default Main;
