import React from 'react';
import st from "./Home.module.css";
import preview from "../../img/preview.jpg"
import HomeBlock from "../../components/HomeBlock/HomeBlock";
import {Link} from "react-router-dom";

export const Home = () => {

    const listWithBD = [
        {
            name: "PostgreSQL",
            text: "Опенсорсная объектно-реляционная СУБД. Она имеет более 15 лет разработки и проверенную архитектуру.",
            link: "/postgresql"
        },
        {
            name: "SQLite",
            text: "Внутрипроцессная библиотека, которая реализует безсерверный механизм базы данных SQL с нулевой конфигурацией.",
            link: "/SQLite"

        },
        {
            name: "MySQL",
            text: "Быстрая и простая в использовании СУБД, используемая для многих малых и крупных предприятий.",
            link: "/mysql"

        },
        {
            name: "Oracle",
            text: "Очень популярная(занимает ~30% мирового рынка), быстрая, Enterprise СУБД.",
            link: "/oracle"
        },
        {
            name: "H2 Database",
            text: "Легковесная база данных, написанная на Java, с открытым исходным кодом.",
            link: "/h2"
        },
        {
            name: "SQL",
            text: "Общая информация для новичков о декларативном языке SQL и СУБД.",
            link: "/db-info"
        }

    ]


    return (
        <>
            <div className={st.preview}>
                <img src={preview} className={st.previewImg} alt={"preview"}/>
                <div className={st.previewContainer}>
                    <div className={st.previewBlock}>
                        <span className={st.title}>Реляционные СУБД</span>
                        <span className={st.desc}>Реляционные БД используются почти в любом Enterprise проекте.
                            Оформите подписку на рассылку и будьте в курсе всех свежих новостей о реляционных СУБД!</span>
                        <Link to={"/offer"} className={st.buyButton}>Оформить</Link>
                    </div>
                </div>
            </div>
            <div className={st.BG}>
                <div className={st.container}>

                    <div className={st.blockContainer}>
                        {listWithBD.map((bd, id) =>
                            <HomeBlock key={id} bd={bd}/>
                        )}
                        {/*{listWithBD.map((o, id) =>*/}
                        {/*    <span>{o.name}</span>*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>

        </>

    );
};

