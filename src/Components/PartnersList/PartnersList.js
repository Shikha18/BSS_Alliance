import React from 'react';
import Partner1 from '../../Assests/BSSML.png';
import Partner2 from '../../Assests/BSS_AT.png';
import Partner3 from '../../Assests/Garun.png';
import Partner4 from '../../Assests/TrojanHunt.png';
import style from './PartnersList.module.scss';

const Partners = () => {
    return (
        <div className={style.container}>
            <div>
                <a href="https://www.bssm.limited/" target="_blank">
                    <img src={Partner1} alt="1" />
                </a>
            </div>
            <div>
                <a href="https://www.bssm.limited/" target="_blank">
                    <img src={Partner4} alt="2" />
                </a>
            </div>
            <div>
                <a href="https://www.trojanhuntindia.com/" target="_blank">
                    <img src={Partner2} alt="3" />
                </a>
            </div>
            {/* <div>
                <a href="https://www.bss-at.com/" target="_blank">
                    <img src={Partner3} alt="4" />
                </a>
            </div> */}
           
        </div>
    )
}

export default Partners;