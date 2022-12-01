import React from 'react';
import st from "./HomeBlock.module.css";
import {Link} from "react-router-dom";

const HomeBlock = ({ bd }) => {
    return (
        <div className={st.dbBlock}>
            <span className={st.dbTitle}>{bd.name}</span>
            <span className={st.dbText}>{bd.text}</span>
            <Link to={bd.link} className={st.dbGetStarted}>Подробнее</Link>
        </div>
    );
};

export default HomeBlock;