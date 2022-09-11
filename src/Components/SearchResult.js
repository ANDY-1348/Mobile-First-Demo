import React from 'react';
import history from '../assets/images/history.png';

function SearchResult({ name, data, image }) {
  return (
    <div className='searchResult'>
      <div className='searchHeading'>{name}</div>
      {data &&
        data.length &&
        data.map((e) => (
          <div className='searchName'>
            {image && <img src={history} alt='history' />}
            {e}
          </div>
        ))}
    </div>
  );
}

export default SearchResult;
