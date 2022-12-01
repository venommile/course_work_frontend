import React from 'react';
import st from "./Title.module.css";

const Title = ({ text }) => {
    return (
        <span className={st.title}>{text}</span>
    );
};

export default Title;