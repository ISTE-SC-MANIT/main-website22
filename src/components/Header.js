import React from "react";

import style from './Header.module.css';

import BreakLine from "./UI/BreakLine";

const Header=props=>{
    return(
        <div className={style.headDiv}>
            <BreakLine/>
            <h1>ISTE SC MANIT</h1>
            <h3>Best Students' Chapter in Madhya Pradesh-Chhattisgarh Region from 3 consecutive years.
            </h3>
            <BreakLine />
        </div>
    );
}
export default Header;