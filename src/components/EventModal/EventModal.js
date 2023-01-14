import React from "react";

import style from './EventModal.module.css';
import Button from "../UI/Button";

const EventModal=props=>{
    console.log(props.eventData);
    return(
        <>
            <div className={style.modalBackground} onClick={props.onCloseModal}>
            </div>
            <div className={style.modalCard}>
                <h1 className={style.eventHeading}>{props.eventData.heading}</h1>
                <h2 className={style.title}>{props.eventData.title}</h2>
                <p className={style.description}>{props.eventData.description}</p>
                <a href={props.eventData.website} target="_blank" className={style.website}>Visit Website</a>
                <Button onClick={props.onCloseModal}>Close</Button>
            </div>
        </>
    );
}

export default EventModal;