import React from 'react';
import st from "./DBInfo.module.css";
import Name from "../../components/Name/Name";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";
import Code from "../../components/Code/Code";
import UnorderedList from "../../components/UnorderedList/UnorderedList";
import {Link} from "react-router-dom";


import {ReactComponent as Arrow} from "../../img/icons/arrow-right.svg";

export const DBInfo = () => {
    const subdList = [
        {content: "Создание баз данных, изменение, удаление и объединение их по определённым признакам. "},
        {content: "Хранение данных, в том числе больших массивов, в структурированном виде и нужном формате."},
        {content: "Защита данных от взлома и нежелательных изменений при помощи распределённого доступа: когда разным группам пользователей доступны разный объём и сегменты данных."},
        {content: "Выгрузка и сортировка данных по заданным фильтрам при помощи SQL-запросов."},
        {content: "Поддержка целостности баз данных, резервное копирование и восстановление после сбоёв. "}
    ];

    const sqlList = [
        {content: "собирать и хранить данные в виде таблиц;"},
        {content: "изменять их содержимое и структуру;"},
        {content: "объединять данные и выполнять вычисления;"},
        {content: "защищать и распределять доступ."}
    ]

    return (
        <div className={st.container}>

            <div className={st.navigation}><Link to={"/home"}>Home</Link><Arrow/><span>Общая информация о СУБД</span>
            </div>


            <Name text={'Общая информация о базах данных'}/>

            <Title text={"Что такое СУБД?"}/>

            <Text
                text={"СУБД — это система управления базами данных. Первые СУБД появились ещё в 1970-х, и сегодня их используют в каждой второй компании: от небольших интернет-магазинов до Facebook, Google и Amazon.\n" +
                    "Чтобы управлять базами данных и находить нужную информацию, запросы к ним пишут на специальных языках. Самый популярный из них — SQL (от англ. Structured Query Language — «язык структурированных запросов»). "}/>

            <Title text={"Для чего нужны СУБД?"}/>
            <Text
                text={"При помощи СУБД можно создавать, объединять, удалять информацию в базах данных, предоставлять к ним доступ определённым пользователям и защищать от взлома."}
            />
            <Text text={"Основные функции СУБД: "}/>

            <UnorderedList props={subdList}/>
            <Title text={"Что такое SQL?"}/>


            <Text
                text={" SQL (сокращение от англ. Structured Query Language) — это язык запросов, который применяют, чтобы работать с базами данных, структурированных особым образом. Главные задачи SQL — составлять запросы так, чтобы находить среди большого объёма информации ту, что нужна для конкретных целей, сортировать её, структурировать и представлять в наиболее простом и понятном виде."}/>


            <UnorderedList props={sqlList}/>

            <Text text={"Структура SQL запроса: "}/>
            <Code code={`
SELECT ('столбцы или * для выбора всех столбцов; обязательно')
FROM ('таблица; обязательно')
WHERE ('условие/фильтрация, например, city = 'Moscow'; необязательно')
GROUP BY ('столбец, по которому хотим сгруппировать данные; необязательно')
HAVING ('условие/фильтрация на уровне сгруппированных данных; необязательно')
ORDER BY ('столбец, по которому хотим отсортировать вывод; необязательно')
            `} lang={"SQL"}/>

            <Title text={"Сфера использования SQL"}/>

            <Text text={"SQL используют в Facebook, Google, Amazon, Uber, Netflix, Airbnb. Например, для того, чтобы показывать пользователям персональные рекомендации на основе того, что они смотрят, читают и лайкают."}/>
            <Text text={"Язык SQL нужен разработчикам, тестировщикам, аналитикам данных, администраторам, маркетологам — всем тем, кому по работе нужно выгружать и обрабатывать большие объёмы данных. Правильно организованные запросы помогают извлекать полезную информацию о клиентах и пользователях, сортируют её по определённым категориям, анализируют работу сайта или бизнеса."}/>
            <Text text={"Например, интернет-магазин доставляет товары по всей стране. У него обширная база клиентов. Владелец магазина хочет понять, как улучшить доставку и на какие регионы обратить внимание. Для этого он ставит задачу аналитику, который с помощью SQL-запросов выгружает данные о каждом регионе и сортирует их по объёму заказов."}/>

            <Title text={"Синтаксис"}/>

            <Code code={`SELECT [ TOP term ] [ DISTINCT | ALL ] selectExpression [,...] 
FROM tableExpression [,...] [ WHERE expression ] 
[ GROUP BY expression [,...] ] [ HAVING expression ] 
[ { UNION [ ALL ] | MINUS | EXCEPT | INTERSECT } select ] [ ORDER BY order [,...] ] 
[ [ LIMIT expression ] [ OFFSET expression ] [ SAMPLE_SIZE rowCountInt ] ] 
[ FOR UPDATE ]`} lang={"SQL"}/>

            <Text text={"Чтобы получить все доступные поля, используйте следующий синтаксис."}/>
            <Code code={`SELECT * FROM table_name;`} lang={"SQL"}/>

            <Title text={"Пример"}/>
            <Text text={"Рассмотрим таблицу CUSTOMER, имеющую следующие записи:"}/>

            <Code code={"+---+----------+------+-------------+----------+\n" +
                " | ID | NAME     | AGE | ADDRESS   | SALARY   | \n" +
                "+---+----------+-----+--------------+----------+ \n"
                +"|  1    | Ramesh   |  32  | Ahmedabad |  2000.00 | \n"
                + "|  2    | Khilan      |  25  | Delhi               |  1500.00  | \n"
                + "|  3    | kaushik    |  23  | Kota                |  2000.00| \n"
                + "|  4    | Chaitali   |  25  | Mumbai          |  6500.00 | \n"
                + "|  5    | Hardik     |  27  | Bhopal            |  8500.00 | \n"
                + "|  6    | Komal      |  22  | MP                   |  4500.00 | \n"
                + "|  7    | Ramesh   |  25  | Indore             | 10000.00| \n"

                +"+---+----------+------+-------------+----------+\n"
            } lang={"SQL"}></Code>
            {/*одной строкой он криво отрисовывает((*/}
            <Text text={"Чтобы получить таблицу клиентов вместе с данными, выполните следующие запросы."}/>
            <Code code={`CREATE TABLE CUSTOMER (id number, name varchar(20), age number, address varchar(20), 
salary number);  

INSERT into CUSTOMER values (1, 'Ramesh', 32, 'Ahmedabad', 2000); 
INSERT into CUSTOMER values (2, 'Khilan', 25, 'Delhi', 1500); 
INSERT into CUSTOMER values (3, 'kaushik', 23, 'Kota', 2000); 
INSERT into CUSTOMER values (4, 'Chaitali', 25, 'Mumbai', 6500); 
INSERT into CUSTOMER values (5, 'Hardik', 27, 'Bhopal', 8500); 
INSERT into CUSTOMER values (6, 'Komal', 22, 'MP', 4500); 
INSERT into CUSTOMER values (7, 'Muffy', 24, 'Indore', 10000);`} lang={"SQL"}/>

            <Text text={"Следующая команда является примером, который извлекает поля ID, Имя и Зарплата клиентов, доступных в таблице CUSTOMER."}></Text>

            <Code code={`SELECT ID, NAME, SALARY FROM CUSTOMERS;`}/>
            <Text text={`Результат: `}/>
           <Code code={`+--+---------+-----+-----------+----------+
| ID | NAME     | AGE | ADDRESS   | SALARY   |
+--+---------+-----+-------------+-----------+
|  1 | Ramesh  |  32 | Ahmedabad |  2000.00 |
|  2 | Khilan     |  25 | Delhi               |  1500.00 |
|  3 | kaushik   |  23 | Kota                |  2000.00 |
|  4 | Chaitali  |  25 | Mumbai          |  6500.00 |
|  5 | Hardik    |  27 | Bhopal            |  8500.00 |
|  6 | Komal     |  22 | MP                   |  4500.00 |
|  7 | Muffy      |  24 | Indore            | 10000.00 |
+----+----------+-----+-----------+----------+`} lang={"SQL"}/>

            <Title text={"Вставка"}/>

            <Text text={"Оператор SQL INSERT используется для добавления новых строк данных в таблицу в базе данных."}/>

            <Text text={"Синтаксис: "}/>

            <Code code={`INSERT INTO tableName 
{ [ ( columnName [,...] ) ] 
{ VALUES 
{ ( { DEFAULT | expression } [,...] ) } [,...] | [ DIRECT ] [ SORTED ] select } } | 
{ SET { columnName = { DEFAULT | expression } } [,...]             `}/>
            <Text text={"Пример: "}/>

            <Code code={`INSERT INTO CUSTOMER VALUES (1, 'Ramesh', 32, 'Ahmedabad', 2000); 
INSERT INTO CUSTOMER VALUES (2, 'Khilan', 25, 'Delhi', 1500); 
INSERT INTO CUSTOMER VALUES (3, 'kaushik', 23, 'Kota', 2000); 
INSERT INTO CUSTOMER VALUES (4, 'Chaitali', 25, 'Mumbai', 6500); 
INSERT INTO CUSTOMER VALUES (5, 'Hardik', 27, 'Bhopal', 8500); 
INSERT INTO CUSTOMER VALUES (6, 'Komal', 22, 'MP', 4500); 
INSERT INTO CUSTOMER VALUES (7, 'Muffy', 24, 'Indore', 10000); 
`}/>

            <Title text={"Обновление:"}/>
            <Text text={"Запрос UPDATE используется для обновления или изменения существующих записей в таблице. Мы можем использовать предложение WHERE с запросом UPDATE для обновления выбранных строк, в противном случае это затронет все строки."}></Text>

            <Code code={`UPDATE tableName [ [ AS ] newTableAlias ] SET 
{ { columnName = { DEFAULT | expression } } [,...] } | 
{ ( columnName [,...] ) = ( select ) } 
[ WHERE expression ] [ ORDER BY order [,...] ] [ LIMIT expression ]`}/>
            <Text text={"Пример:"}/>

           <Code code={"UPDATE CUSTOMERS SET ADDRESS = 'Pune' WHERE ID = 6;"}/>

            <Text text={"Теперь таблица CUSTOMERS будет иметь следующие записи. Мы можем проверить записи таблицы клиентов, выполнив следующий запрос."}/>
            <Code code={`+--+---------+-----+-----------+----------+
| ID | NAME     | AGE | ADDRESS   | SALARY   |
+--+---------+-----+-------------+-----------+
|  1 | Ramesh  |  32 | Ahmedabad |  2000.00 |
|  2 | Khilan     |  25 | Delhi               |  1500.00 |
|  3 | kaushik   |  23 | Kota                |  2000.00 |
|  4 | Chaitali  |  25 | Mumbai          |  6500.00 |
|  5 | Hardik    |  27 | Bhopal            |  8500.00 |
|  6 | Komal     |  22 | Pune               |  4500.00 |
|  7 | Muffy      |  24 | Indore            | 10000.00 |
+----+----------+-----+-----------+----------+`} lang={"SQL"}/>

            <Title text={"Удаление"}/>
            <Text text={"Синтаксис:"}/>
            <Code code={"DELETE [ TOP term ] FROM tableName [ WHERE expression ] [ LIMIT term ]"}/>
            <Text text={"Следующая команда удалит данные клиента, чей идентификатор равен 6:"}/>
            <Code code={"DELETE FROM CUSTOMERS WHERE ID = 6;"}/>

            <Text text={"После выполнения вышеуказанной команды проверьте таблицу Customer, выполнив следующую команду."}/>

            <Code code={"SELECT * FROM CUSTOMERS; "}/>

            <Text text={"Приведенная выше команда производит следующий вывод:"}/>
            <Code code={`+--+---------+-----+-----------+----------+
| ID | NAME     | AGE | ADDRESS   | SALARY   |
+--+---------+-----+-------------+-----------+
|  1 | Ramesh  |  32 | Ahmedabad |  2000.00 |
|  2 | Khilan     |  25 | Delhi               |  1500.00 |
|  3 | kaushik   |  23 | Kota                |  2000.00 |
|  4 | Chaitali  |  25 | Mumbai          |  6500.00 |
|  5 | Hardik    |  27 | Bhopal            |  8500.00 |
|  7 | Muffy      |  24 | Indore            | 10000.00 |
+----+----------+-----+-----------+----------+`} lang={"SQL"}/>
<br/>
        </div>
    );
};

