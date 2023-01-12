import React from "react";

import styles from './Navlink.module.css';

const Navlink=props=>{
    return(
        <a href={props.href}>{props.children}</a>
    );
}

export default Navlink;