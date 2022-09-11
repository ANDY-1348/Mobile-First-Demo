import React from 'react';
import Search from '../assets/images/search.png';
import SearchResult from './SearchResult';
import { searchResult } from '../assets/dummyData';

function SearchComponent() {
  return (
    <main>
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
      <SearchResult name='Previous Searches' data={searchResult} image />
      <SearchResult name='Top Searches' data={searchResult} />
    </main>
  );
}

export default SearchComponent;
