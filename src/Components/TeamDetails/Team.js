import React from 'react';
import {useNavigate} from "react-router-dom";
import style from './Team.module.scss';

const Team = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
        <button onClick={()=>navigate("/teamDetails")}>Click here to know more about BSS Team.</button>
    </div>
  )
}

export default Team;