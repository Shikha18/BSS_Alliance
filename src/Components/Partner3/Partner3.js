import React from 'react';
import style from './Partner3.module.scss';
import JSON from '../../JSON/Partner3.json';
import logo from '../../Assests/Garun.png';

const Partner3 = () => {
    return (
        <div className={style.container}>
            <div className={style.left} >
                <img src={logo} alt="logo" />
                <p>Website : <a href={JSON.website} >{JSON.website}</a></p>
                <p>Email :  <a href={JSON.email} >{JSON.email}</a></p>
                {
                    Array.isArray(JSON.play_video) && JSON.play_video.length ?
                        <ol>{
                            JSON.play_video?.map(item => {
                                return (
                                    <div>
                                        <li>{item}</li>
                                    </div>
                                )
                            })
                        }
                        </ol> : null
                }
            </div>

            <div className={style.right} >
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

export default Partner3