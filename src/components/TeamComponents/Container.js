import React from "react";

import style from './Container.module.css';

const Container=props=>{
    console.log(props.data);
    return(
        <div className={style.wrapper}>
            <h1 className={style.heading}>{props.year} Year</h1>
            <div className={style.container}>
                
            </div>
        </div>
    );
}

export default Container;