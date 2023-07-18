import React, {useState, useEffect} from 'react';
import axios from 'axios'
;import style from './Footer.module.scss';
import FacebookIcon from '../../Assests/fb.png';
import InstagramIcon from '../../Assests/insta.png';
import LinkedlnIcon from '../../Assests/linkedln.png';
import TwitterIcon from '../../Assests/twitter.png';

const Footer = () => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');
    const getWebsiteCount = () => {
        const url = "https://backend-gateway.garun.in/website-counter/count?website=bss-alliance";
        axios.get(url).then(res => {
            let newCount = res.data.data.count;
            setCount(newCount);
        }).catch(err => {
            setError(err.message);
        });
    }

    useEffect(() => {
        getWebsiteCount();
    }, [count])
    
    return (
        <div className={style.container}>
            <p>For more information write to us at</p>
            <a href="mailto:info@bss-alliace.com">info@bss-alliace.com</a>
            <div>
                <a href="" target="_blank">
                    <img src={FacebookIcon} alt="fb" />
                </a>
                <a href="https://www.instagram.com/bss.alliance/" target="_blank">
                    <img src={InstagramIcon} alt="tw" />
                </a><a href="https://twitter.com/BSS_Alliance" target="_blank">
                    <img src={TwitterIcon} alt="insta" />
                </a><a href="" target="_blank">
                    <img src={LinkedlnIcon} alt="linkedln" />
                </a>
            </div>
            <p>(c) BSS Alliance, 2022. All rights reserved</p>
            <p>The information is proprietary, logo's are TM and copyright owned by BSS Alliance and its associated/constituent companies.</p>
            
            <div className={style.count}>Website Visit : {count}</div>
            {
                error && <h2 className={style.error}>Error: {error}</h2>
            }
        </div>
    )
}

export default Footer