import React from 'react';
import st from "./Image.module.css";

const Image = ({ src }) => {
    return (
        <img src={src} className={st.image} alt={"docPhoto"}/>
    );
};

export default Image;