import React from 'react';
import st from "./MySQL.module.css";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Code from "../../components/Code/Code";
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../img/icons/arrow-right.svg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import Image from "../../components/Image/Image";

export const MySQL = () => {
    const advList = [
        {content: "поддерживается неограниченное число пользователей, одновременно работающих в базах данных;"},
        {content: "число табличных строк может достигать 50 миллионов, чего более, чем достаточно;"},
        {content: "сервер MySQL считается одним из лучших по быстродействию, поэтому команды выполняются в сжатые сроки. А это не может не радовать;"},
        {content: "система безопасности в MySQL-сервере проста и эффективна."}
    ];

    const disadvList = [
        {content: "поддержки разных транзакций;"},
        {content: "число табличных строк может достигать 50 миллионов, чего более, чем достаточно;"},
        {content: "поддержки триггеров и хранимых процессов;"},
        {content: "поддержки представления."}
    ];
    return (
        <div className={st.container}>

            <div className={st.navigation}><Link to={"/home"}>Home</Link><Arrow/><span>MySQL</span></div>

            <Name text={'MySQL'}/>
            <Title text={"Описание"}/>
            <Text text={"MySQL-сервер баз данных был разработан компанией TcX для внутреннего потребления и быстрой обработки крупных баз данных. Сегодня это одно из лучших решений для малых и средних программных приложений, а исходники сервера баз данных MySQL компилируют на многих платформах. Лучше всего использовать MySQL-сервер на Unix-серверах — они поддерживают многопоточность, что обеспечивает существенный прирост производства. В результате возможности сервера открываются на полную мощность."}/>
            <Text text={"На сегодняшний день MySQL представляет собой бесплатный сервер, если речь идёт о некоммерческом использовании. В обратном случае вам понадобится купить лицензию. "}/>



            <Title text={"Возможности сервера баз данных MySQL"}/>
            <Text text={"MySQL-сервер поддерживает язык SQL-запросов и стандарт ANSI 92. Кроме того, поддерживается ряд расширений к этому стандарту, что выгодно отличает MySQL-сервер от конкурентов. Давайте посмотрим на некоторые функциональные возможности этого известного сервера баз данных:"}/>

            <UnorderedList props={advList}/>

            <Title text={"Минусы сервера баз данных MySQL"}/>

            <Text text={"Как мы уже говорили, MySQL-сервер обладает быстродействием, но чтобы его достичь, разработчикам пришлось принести в жертву некоторые другие требования, предъявляемые к современным системам управления базами данных (СУБД)."}/>

            <Text text={"В частности, в сервере MySQL нет:"}/>

            <UnorderedList props={disadvList}/>

            <Text text={"Но, как говорят разработчики, отсутствие некоторых возможностей как раз и позволило достичь преимуществ в быстродействии. При этом вышеперечисленные недостатки не являются критичными при разработке приложений, с чем сложно спорить. А вот поддержка вложенных запросов в MySQL уже появилась, что, разумеется, не может не радовать. "}/>

            <Title text={"Архитектура MySQL"}/>
            <Text text={"На следующих картинках представлена схема архитектуры MySQL"}/>
            <br/>

            <Image src={require("../../img/mysql1.png")}/>
            <Image src={require("../../img/mysql2.jpg")}/>

            <Title text={"Установка"}/>
            <Code code={"sudo apt install mysql-server mysql-client"} lang={"bash"}/>
            <br/>

        </div>
    );
};
