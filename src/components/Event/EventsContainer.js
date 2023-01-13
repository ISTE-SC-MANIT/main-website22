import React from "react";

import Event from "./Event";
import vb from '../../assets/EventImages/versionBeta.jpg'

import style from './EventsContainer.module.css'

const EventsContainer=props=>{
    return(
        <div className={style.eventContainer}>
            <Event imgSrc={vb} />
        </div>
    );
}

export default EventsContainer;