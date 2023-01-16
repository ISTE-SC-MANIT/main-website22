import React from "react";

import style from './EventImage.module.css'

const EventImage=props=>{
    return(
        <div  name={props.name} className={style.eventImage} onClick={props.onClick}>
            <img src={props.src} name={props.name}/>
        </div>
    );
}

export default EventImage;