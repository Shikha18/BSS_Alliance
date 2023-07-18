import React from 'react';
import JSON from '../../JSON/AboutUs.json';
import style from './About.module.scss';

const About = () => {
  return (
    <div className={style.main}>
    <div className={style.container}>
        <div>
        <h2>{JSON.heading}</h2>
        <p>{JSON.Paragraph1}</p>
        <p>{JSON.Paragraph2}</p>
        <p>{JSON.Paragraph3}</p>
        </div>
    </div>
    </div>
  )
}

export default About;