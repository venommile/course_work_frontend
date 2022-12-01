import React from 'react';
import st from "./Text.module.css";

const Text = ({ text }) => {
    return (
        <span className={st.text}>{ text }</span>

    );
};

export default Text;