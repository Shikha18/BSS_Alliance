import React from 'react';
import JSON from '../../JSON/Partner4.json';
import style from './Partner4.module.scss';
import logo from '../../Assests/TrojanHunt.png';

const Partner4 = () => {
    return (
        <div className={style.container}>
            <div className={style.left} >
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

            <div className={style.right} >
                <img src={logo} alt="logo" />
                <p>Website : <a href={JSON.website} >{JSON.website}</a></p>
                <p>Email :  <a href={JSON.email} >{JSON.email}</a></p>
                <ol>{
                    Array.isArray(JSON.play_video) === '' ? JSON.play_video?.map(item => {
                        return (
                            <div>
                                <li>{item}</li>
                            </div>
                        )
                    }) : []
                }
                </ol>
            </div>
        </div>
    )
}

export default Partner4