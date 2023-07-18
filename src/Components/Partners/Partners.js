import React from 'react';
import Partner1 from '../Partner1/Partner1';
import Partner2 from '../Partner2/Partner2';
import Partner3 from '../Partner3/Partner3';
import Partner4 from '../Partner4/Partner4';
import style from './Partners.module.scss';

const Partners = () => {
  return (
    <div className={style.container}>
        <Partner1 />
        <hr/>
        <Partner2 />
        <hr/>
        <Partner3 />
        <hr/>
        <Partner4 />
    </div>
  )
}

export default Partners;