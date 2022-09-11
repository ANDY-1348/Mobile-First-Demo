import React from 'react';
import MenuContainer from './MenuContainer';
import Home from '../assets/images/home.png';
import Message from '../assets/images/message.png';
import Cart from '../assets/images/cart.png';
import Like from '../assets/images/like.png';
import Profile from '../assets/images/profile.png';

function BottomMenu() {
  return (
    <div className='bottom_menu'>
      <MenuContainer link={'#'} icon={Home} />
      <MenuContainer link={'#'} icon={Message} />
      <MenuContainer link={'#'} icon={Cart} total='2' />
      <MenuContainer link={'#'} icon={Like} />
      <MenuContainer link={'#'} icon={Profile} />
    </div>
  );
}

export default BottomMenu;
