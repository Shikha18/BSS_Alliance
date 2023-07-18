import React, {useEffect} from 'react';
import JSON from '../../../JSON/TeamLayout.json';
import {useNavigate} from "react-router-dom";
import style from './TeamLayout.module.scss';

const TeamLayout = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className={style.container}>
      <h1>||  Meet our BSS Team  ||</h1>
        {
            JSON.details?.map((item, key) => {
                console.log('desc--->', item);
                return (
                    <div key ={key}>
                       <h2>{item.title}</h2>
                       <desc>{item.desc}</desc>
                    </div>
                )
            })
        }
        <button onClick={()=>navigate("/")}>Back</button>
    </div>
  )
}

export default TeamLayout;