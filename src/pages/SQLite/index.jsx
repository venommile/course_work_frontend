import React from 'react';
import st from "./SQLite.module.css";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Code from "../../components/Code/Code";
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../img/icons/arrow-right.svg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
export const SQLite = () => {

    const distinctions = [
        {content: "SQLite не требует отдельного процесса сервера или системы для работы (без сервера)."},
        {content: "SQLite поставляется с нулевой конфигурацией, что означает отсутствие необходимости в настройке или администрировании."},
        {content: "Полная база данных SQLite хранится в одном кросс-платформенном диске."},
        {content: "SQLite очень маленький и легкий, менее 400KiB полностью сконфигурированный или менее 250KiB с дополнительными функциями, опущенными."},
        {content: "SQLite-транзакции полностью совместимы с ACID, обеспечивая безопасный доступ к нескольким процессам или потокам."},
        {content: "SQLite поддерживает большинство функций языка запросов, найденных в стандарте SQL92 (SQL2)."},
        {content: "SQLite написан на ANSI-C и предоставляет простой и простой в использовании API."},
        {content: "SQLite является автономным, что означает отсутствие внешних зависимостей."},
        {content: "SQLite доступен в UNIX (Linux, Mac OS-X, Android, iOS) и Windows (Win32, WinCE, WinRT)."},
    ];
    return (
        <div className={st.container}>

            <div className={st.navigation}><Link to={"/home"}>Home</Link><Arrow/><span>SQLite</span></div>

            <Name text={'SQLite'}/>

            <Title text={"Описание"}/>
            <Text text={"SQLite - это встроенная библиотека, которая реализует автономный, безсерверный, нулевой конфигурации, транзакционный механизм СУБД SQL. Это база данных, которая настроена на нуль, что означает, как и другие базы данных, которые вам не нужно настраивать в вашей системе."}/>
            <Text text={"SQLite не является автономным процессом, как другие базы данных, вы можете связать его статически или динамически в соответствии с вашим требованием с вашим приложением. SQLite напрямую обращается к своим файлам хранения"}/>
            <Title text={"Особенности SQLite"}/>

            <Text text={"Основные особенности базы данных SQLite:"}/>
            <UnorderedList props={distinctions}/>

            <Title text={"Расширения языка SQL"}/>
            <Text text={"SQLite поддерживает несколько дополнений к языку SQL, которые не являются нормой в других движках баз данных. Ключевое слово EXPLAIN и манифестная типизация уже упоминались выше. SQLite поддерживает такие конструкции как REPLACE и ON CONFLICT, которые позволяют управлять разрешением конфликтов ограничений. SQLite поддерживает команды ATTACH и DETACH, которые позволяют в одном и том же запросе использовать несколько независимых баз данных. Кроме того, SQLite определяет API, которое позволяет пользователям добавлять новые функции SQL и последовательности сортировки."}/>

            <Title text={"Установка: "}/>
            <Code code={"sudo apt-get install sqlite"} lang={"bash"}/>
            <br/>
        </div>
    );
};

