import React from 'react';
import st from "./H2.module.css";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Code from "../../components/Code/Code";
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../img/icons/arrow-right.svg";
import UnorderedList from "../../components/UnorderedList/UnorderedList";

export const H2 = () => {

    const characteristicsList = [
        {content: "Очень быстрый, с открытым исходным кодом, JDBC API"},
        {content: "Доступен во встроенном и серверном режимах; базы данных в памяти"},
        {content: "Консольное приложение на основе браузера"},
        {content: "Небольшой объём – около 1,5 МБ, размер файла"}
    ];

    const distinctionsList = [
        {content: "Это чрезвычайно быстрый движок базы данных."},
        {content: "H2 с открытым исходным кодом и написана на Java."},
        {content: "Он поддерживает стандартные API SQL и JDBC. Он также может использовать драйвер PostgreSQL ODBC."},
        {content: "Он имеет встроенный и серверный режим."},
        {content: "H2 поддерживает кластеризацию и многоверсионный параллелизм."},
        {content: "У этого есть сильные особенности безопасности."},
    ];
    const additionalDistinctions = [
        {content: "H2 – это базы данных и таблицы на основе дисков или в памяти, поддержка баз данных только для чтения, временные таблицы."},
        {content: "H2 обеспечивает поддержку транзакций (чтение зафиксировано), 2-фазную фиксацию нескольких соединений, блокировку на уровне таблицы."},
        {content: "H2 – это оптимизатор на основе затрат, использующий генетический алгоритм для сложных запросов, не требующий администрирования."},
        {content: "H2 содержит прокручиваемую и обновляемую поддержку набора результатов, большой набор результатов, внешнюю сортировку результатов, функции могут возвращать набор результатов."},
        {content: "H2 поддерживает зашифрованную базу данных (AES), шифрование пароля SHA-256, функции шифрования и SSL."}
    ];

    return (
        <div className={st.container}>

            <div className={st.navigation}><Link to={"/home"}>Home</Link><Arrow/><span>H2</span></div>


            <Name text={'База данных H2'}/>

            <Title text={"Описание"}/>
            <Text
                text={"H2 – это легковесная база данных Java с открытым исходным кодом. Он может быть встроен в приложения Java или работать в режиме клиент-сервер. В основном, база данных H2 может быть настроена для работы в качестве базы данных памяти, что означает, что данные не будут сохраняться на диске. Из-за встроенной базы данных она не используется для разработки продукции, но в основном используется для разработки и тестирования."}/>
            <Text
                text={"Эта база данных может использоваться во встроенном режиме или в режиме сервера. Ниже приведены основные характеристики базы данных H2:"}/>

            <UnorderedList props={characteristicsList}/>

            <Title text={"Особенности базы данных H2"}/>
            <Text text={"Основные особенности базы данных H2:"}></Text>

            <UnorderedList props={distinctionsList}/>

            <Title text={"Дополнительные возможности"}/>

            <Text text={"Ниже приведены некоторые дополнительные функции базы данных H2"}/>

            <UnorderedList props={additionalDistinctions}/>


            <Title text={"Установка базы данных H2"}></Title>


            <Text text={"Для начала проверьте установку Java. " +
                "Если JDK установлен в системе, попробуйте следующую команду, чтобы проверить версию Java."}/>

            <Code code={`java –version`} lang={"bash"}/>

            <Text text={"Если JDK успешно установлен в системе, мы получим следующий вывод."}/>

            <Code code={`java version "1.8.0_91" 
Java(TM) SE Runtime Environment (build 1.8.0_91-b14) 
Java HotSpot(TM) 64-Bit Server VM (build 25.91-b14, mixed mode)`} lang={"bash"}/>


            <Text
                text={"Мы можем запустить эту базу данных на разных платформах. В этой главе мы узнаем об установке базы данных H2 в Ubuntu."}/>

            <Text text={"Ниже приведены инструкции по установке базы данных H2 в операционной системе Linux Ubuntu."}/>
            <Code code={`sudo apt update
sudo apt install libh2-java`} lang={"bash"}/>

            <br/>
            <br/>
        </div>
    );
};

