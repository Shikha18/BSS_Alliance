import React from 'react';
import BSS_logo from '../../Assests/BSS_Alliance.png';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.container}>
        <img src={BSS_logo} alt = 'logo' />
        <div>Bharat Supply & Support of Military Materials and Advance Technologies</div>
    </div>
  )
}

export default Header;
