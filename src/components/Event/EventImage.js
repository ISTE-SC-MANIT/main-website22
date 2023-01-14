import React from "react";

import style from './EventImage.module.css'

const EventImage=props=>{
    return(
        <div className={style.eventImage} onClick={props.onClick}>
            <img src={props.src} />
        </div>
    );
}

export default EventImage;