import React from "react";

import style from './Event.module.css';
import EventImage from "./EventImage";

const Event=props=>{
    return(
        <>
            <EventImage src={props.imgSrc}/>
        </>
    );
}

export default Event;