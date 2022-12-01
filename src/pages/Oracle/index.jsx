import React from 'react';
import st from "./Oracle.module.css";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Code from "../../components/Code/Code";
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../img/icons/arrow-right.svg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import Image from "../../components/Image/Image";

export const Oracle = () => {
    const oracleList = [
        {content: "табличные пространства;"},
        {content: "управляющие файлы;"},
        {content: "журналы;"},
        {content: "архивные журналы;"},
        {content: "файлы трассировки изменения блоков;"},
        {content: "ретроспективные журналы;"},
        {content: "файлы резервных копий (RMAN). "},
    ];

    return (
        <div className={st.container}>

            <div className={st.navigation}><Link to={"/home"}>Home</Link><Arrow/><span>Oracle</span></div>


            <Name text={'Oracle'}/>

            <Title text={"Описание"}/>
            <Text
                text={"Oracle Database — это объектно-реляционная СУБД (система управления базами данных), созданная компанией Oracle. В настоящее время она имеет множество разных версий и типов. Однако в этой статье мы поговорим не о видах баз данных Oracle, а о структуре и основных концепциях, которые относятся к СУБД Oracle Database. Поняв архитектуру СУБД Oracle, вы заложите фундамент, необходимый для понимания прочих средств (а они весьма обширны), предоставляемых базой данных Oracle."}/>


            <Title text={"Базы данных Oracle: экземпляры и сущности"}/>

            <Text
                text={"СУБД Oracle Database включает в себя физические и логические компоненты. Особого упоминания заслуживает понятие экземпляра. Замечено, что некоторые используют термины «база данных» и «экземпляр» в качестве синонимов. Да, это взаимосвязанные, но всё же разные вещи. База данных в терминологии Oracle — это физическое хранилище информации, а экземпляр — это программное обеспечение, которое работает на сервере и предоставляет доступ к информации, содержащейся в базе данных Oracle. Экземпляр исполняется на конкретном сервере либо компьютере, в то самое время как база данных хранится на дисках, подключённых к этому серверу: "}/>

            <Text
                text={"При этом база данных Oracle является физической сущностью, состоящей из файлов, которые хранятся на дисках. В то же самое время, экземпляр – это сущность логическая, состоящая из структур в оперативной памяти и процессов, которые работают на сервере. Экземпляр может являться частью только одной базы данных. При этом с одной базой данных бывает ассоциировано несколько экземпляров. Экземпляр ограничен по времени жизни, тогда как БД, условно говоря, может существовать вечно."}/>

            <Text
                text={"Также стоит заметить, что у пользователей нет прямого доступа к информации, которая хранится в базе данных Oracle — они должны запрашивать эту информацию у экземпляра Oracle."}/>

            <Title text={"Структура базы данных Oracle"}/>
            <Text text={"База данных Oracle включает в себя:"}/>
            <UnorderedList props={oracleList}/>

            <Title text={"Архитектура OracleDB"}/>
            <Text text={"Приложенная ниже картинка демонстрирует архитектуру базы данных"}/>
            <Image src={require("../../img/oracle_cut-photo.ru.jpg")}/>
            <Title text={"Установка"}/>
            <Code code={"wget oss.oracle.com/el4/RPM-GPG-KEY-oracle -O- | sudo apt-key add -\n" +
                "apt-get update\n" +
                "apt-get install oracle-xe"}></Code>
            <br/>
        </div>
    );
};

