import React from 'react';
import style from './Partner1.module.scss';
import logo from '../../Assests/BSSML.png';
import JSON from '../../JSON/Partner1.json';

const Partner1 = () => {
    return (
        <div className={style.container}>

            <div className={style.left} >
                <img src={logo} alt="logo" />
                <p>Website : <a href={JSON.website} >{JSON.website}</a></p>
                <p>Email :  <a href={JSON.email}>{JSON.email}</a></p>
                <ol>{
                    JSON.play_video?.map((item, key) => {
                        return (
                            <div key={key}>
                                <li>{item.text} <button onClick={(e) => {
                                    if (e.target.value)
                                        return <a href={item.link} target="_blank" />
                                }}
                                >{item.button}</button></li>
                            </div>
                        )
                    })
                }
                </ol>
            </div>

            <div className={style.right}>
                <desc>{JSON.desciption}</desc>
                <p>{JSON.pointsHeader}</p>
                {
                    JSON.options?.map((item, key) => {
                        return (
                            <div key={key}>
                                <ul>
                                    <li>
                                        {item.text} {
                                            item.button?.map(btnObj => {
                                                return (
                                                    <a href={btnObj.link} target="_blank" >
                                                        <button>{btnObj.label}</button>
                                                    </a>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Partner1;