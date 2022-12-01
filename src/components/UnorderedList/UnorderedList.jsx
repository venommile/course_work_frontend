import React from 'react';
import st from "./UnorderedList.module.css"

const UnorderedList = ({props}) => {
    return (
<div className={st.container}>
        <ul className={st.textList}>
                {props.map((it, id)=>
                    <li className={st.liItem}>{it.content}</li>
                )}
            </ul>
        </div>
    );
};

export default UnorderedList;