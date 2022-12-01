import React from 'react';
import st from "./PostgreSQL.module.css";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Code from "../../components/Code/Code";
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../img/icons/arrow-right.svg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import Image from "../../components/Image/Image";

export const PostgreSQL = () => {
        const advantagesList = [
                {content: "Надежность. Надёжность СУБД PostgreSQL проверена и доказана. Она обеспечивается соответствием принципам ACID (атомарность, изолированность, непротиворечивость, сохранность данных), многоверсионностью, наличием Write Ahead Logging (WAL) — общепринятого механизма протоколирования всех существующих транзакций. Сюда же стоит отнести и возможность восстановления базы данных Point in Time Recovery (PITR), репликацию, поддержку целостности данных на уровне схемы."},
                {content: "Производительность. В СУБД PostgreSQL она основана на применении индексов, наличии гибкой системы блокировок и интеллектуального планировщика запросов, использовании системы управления буферами памяти и кэширования. Не стоит забывать и про отличную масштабируемость при конкурентной работе."},
                {content: "Расширяемость. Для СУБД PostgreSQL это означает, что пользователь может настроить систему посредством определения новых функций, типов, языков, агрегатов, индексов и операторов. А объектная ориентированность СУБД PostgreSQL даёт возможность переносить логику приложения на уровень базы данных, а это, в свою очередь, заметно упрощает разработку клиентов, ведь вся бизнес-логика находится в БД. При этом функции в Postgres однозначно определяются названием, типами и числом аргументов."},
                {content: "Поддержка SQL. Её уже упоминали, однако кроме главных возможностей, которые присущи любой SQL-базе, PostgreSQL поддерживает схемы, подзапросы, внешние связки, правила, курсоры, наследование таблиц, триггеры и много чего ещё."},
                {content: "Поддержка многочисленных типов данных. СУБД PostgreSQL поддерживает численные (целые, денежные, с фиксированной/плавающей точкой), булевые, символьные, составные, сетевые типы данных, а также перечисление, типы «дата/время», геометрические примитивы, массивы, XML- и JSON-данные. Плюс можно создавать свои типы данных"}
        ];

        return (
        <div className={st.container}>

            <div className={st.navigation}><Link to={"/home"}>Home</Link><Arrow/><span>PostgreSQL</span></div>


            <Name text={'PostgreSQL'}/>

            <Title text={"Преимущества и особенности СУБД PostgreSQL"}/>

            <Text
                text={"СУБД PostgreSQL использует для своих баз данных реляционную модель, поддерживая стандартный язык запросов SQL. При этом PostgreSQL предоставляет широкий спектр возможностей. Можно сказать, что Postgres обладает почти всеми возможностями, существующими в других базах данных (как коммерческих, так и Open Source), а также рядом дополнительных."}
            />

            <Text
                text={"Сегодня СУБД PostgreSQL работает почти на всех UNIX-платформах, в том числе и на UNIX-подобных системах (FreeBSD и Linux). Вы сможете использовать эту базу данных и на Windows NT Server, и на Windows 2000 Server, и для разработки рабочих станций ME."}/>
            <Text text={"Рассмотрим краткий перечень преимуществ и функциональных возможностей СУБД PostgreSQL:"}/>
            <UnorderedList props={advantagesList}/>


            <Title text={"Архитектура PostgreSQL"}/>
            <Text text={"Приложенная ниже картинка иллюстрирует архитектуру PostgreSQL"} />
            <Image src={require("../../img/postg.png")}/>
            <Title text={"Установка"}/>

            <Code code={"sudo apt-get install postgresql"} lang={"SQL"}></Code>
            <br/>
        </div>
    );
};

