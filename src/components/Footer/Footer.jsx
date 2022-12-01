import React from 'react';
import st from "./Footer.module.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={st.footer}>
            <div className={st.container}>
                <div className={st.information}>


                    <div className={st.links}>
                        <div className={st.social}>
                            <span>Соцсети:</span>
                            <Link to='/github'><span>Гитхаб</span></Link>
                            <Link to='/gitlab'><span>Гитлаб</span></Link>
                            <Link to='/vk'><span>Вконтакте</span></Link>
                            <Link to='/home'><span>Телеграмм</span></Link>
                        </div>
                    </div>
                    <div className={st.links}>
                        <div className={st.cow}>
                            <Link to="/home"><span>Главная</span></Link>
                            <Link to='/postgresql'><span>PostgreSQL</span></Link>
                            <Link to='/h2'><span>MySQL</span></Link>
                            <Link to='/oracle'><span>Oracle</span></Link>
                            <Link to='/sql-lite'><span>SQLite</span></Link>
                            <Link to='/h2'> <span> H2</span></Link>
                            <Link to='/home'><span>Microsoft Access</span></Link>
                        </div>
                    </div>
                    <div className={st.companyInfo}>
                        <span>+7(926)677-67-37</span>
                        <span>galtsev.mishail@gmail.com</span>
                        <span>Пн-Пт 8:00-21:00, Сб-Вс 10:00-18:00</span>
                        <span>Г. Москва, Ул. Автозаводская, 26</span>
                    </div>
                </div>
                <span className={st.rikuName}>2022  Компания “Миша Гальцев)))”</span>
            </div>
        </div>
    );
};

export default Footer;