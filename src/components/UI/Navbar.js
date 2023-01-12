import React, {useState} from "react";

import Navlink from "./Navlink";

import ISTElogo from '../../assets/ISTElogo.svg'
import ham from '../../assets/ham.png';
import style from './Navbar.module.css';


const Navbar = props => {

    const [mobNav, setMobNav]=useState(false);
    const hamClickHandler=event=>{
        event.preventDefault();
        if(mobNav===true){
            setMobNav(false);
        }
        else{ 
            setMobNav(true);
        }
    }

    return (
        <div className={style.navbar}>
            <div className={`${style['logo']} ${mobNav?style['hide']:''}`}>
                <img src={ISTElogo} />
            </div>
            <div className={style['navlinks-container']}>
                <Navlink href="#">Home</Navlink>
                <Navlink href="#">About us</Navlink>
                <Navlink href="#">Events</Navlink>
                <Navlink href="#">Sponsors</Navlink>
                <Navlink href="#">Our Team</Navlink>
                <Navlink href="#">Contact Us</Navlink>
            </div>

            <ul className={`${style['mobile-navlink-container']} ${mobNav?'':style['hide']}`}>
                <div className={`${style.ham} ${style['align-left']}`} onClick={hamClickHandler}>
                    <h1>X</h1>
                </div>
                <Navlink href="#">Home</Navlink>
                <Navlink href="#">About us</Navlink>
                <Navlink href="#">Events</Navlink>
                <Navlink href="#">Sponsors</Navlink>
                <Navlink href="#">Our Team</Navlink>
                <Navlink href="#">Contact Us</Navlink>
            </ul>
            <div className={`${mobNav ? style.hide : ''} ${style.ham}`} onClick={hamClickHandler}>
                <img src={ham} className={`${style.hamImg} ${mobNav ? style['hide'] : ''}`} />
            </div>
        </div>
    );
}

export default Navbar;