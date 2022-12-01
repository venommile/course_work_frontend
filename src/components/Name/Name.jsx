import React from 'react';
import st from "./Name.module.css";

const Name = ({text}) => {
    return (
        <span className={st.name}>{text}</span>
    );
};

export default Name;