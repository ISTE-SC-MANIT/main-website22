import React from "react";

import style from './Event.module.css';
import EventImage from "./EventImage";
import Button from '../UI/Button'

const Event=props=>{
    return(
        <div className={style.eventStyle}>
            <EventImage src={props.imageSrc}/>
            <Button name={props.name} onClick={props.handler}>Know More</Button>
        </div>
    );
}

export default Event;