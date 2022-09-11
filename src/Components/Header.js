import React from 'react';
import Capacity from '../assets/images/Capacity.png';
import Cellular from '../assets/images/Cellular.png';
import Wifi from '../assets/images/Wifi.png';

function Header() {
  return (
    <header>
      <span>9:41</span>
      <div className='status_icons'>
        {/* <Capacity />
        <Cellular />
        <Wifi /> */}
        <img src={Cellular} width='17px' height='10.67px' alt='Cellular' />
        <img src={Wifi} width='15.33px' height='11px' alt='Wifi' />
        <img src={Capacity} width='18px' height='7.33px' alt='Capacity' />
      </div>
    </header>
  );
}

export default Header;
