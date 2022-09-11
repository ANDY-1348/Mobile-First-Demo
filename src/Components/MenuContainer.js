import React from 'react';

function MenuContainer({ icon, total }) {
  return (
    <div className='menu'>
      <img className='icon' src={icon} alt='icon' />
      {total && <p className='total'>{total}</p>}
    </div>
  );
}

export default MenuContainer;
