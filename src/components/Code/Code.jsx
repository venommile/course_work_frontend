import React from 'react';
import Highlight from "react-highlight";
import st from "./Code.module.css";

const Code = ({code, lang}) => {
    return (
        <div className={st.container}>
            <Highlight className={`${lang} ${st.code}`}>
                {code}
            </Highlight>
        </div>
    );
};

export default Code;