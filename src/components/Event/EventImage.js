import React from "react";

import style from './EventImage.module.css'

const EventImage=props=>{
    return(
        <div className={style.eventImage}>
            <img src={props.src} />
        </div>
    );
}

export default EventImage;