import React from "react";

import style from './Event.module.css';
import EventImage from "./EventImage";
import Button from '../UI/Button'

const Event=props=>{
    return(
        <div className={style.eventStyle}>
            <EventImage name={props.name} src={props.imageSrc} onClick={props.onClick}/>
            <Button name={props.name} onClick={props.onClick}>Know More</Button>
        </div>
    );
}

export default Event;