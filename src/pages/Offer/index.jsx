import React from 'react';
import st from "./Offer.module.css";
import {Link} from "react-router-dom";

const Offer = () => {
    return (
        <div className={st.container}>
            <span className={st.pageTitle}>Подписаться</span>
            <div className={st.offerBlocks}>
                <div className={st.offerBlock}>
                    <span className={st.title}>Базовая подписка</span>
                    <div className={st.priceBlock}><span className={st.price}>500 руб/месяц</span></div>
                    <Link to={"/login"} className={st.button}>Войти</Link>
                    <span style={{fontSize: 14, display: 'block'}}>(i) Всего 16 рублей в день</span>
                    <hr/>
                    <span style={{fontSize: 15, display: "block", marginBottom: 20}}>Для практикующих специалистов уровня Junior/Middle</span>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Всё то что есть в бесплатной подписке</span>
                    </div>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Доступ к закрытому чату</span>
                    </div>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Доступ к уникальным материалам</span>
                    </div>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Уведомления о выходе новой статьи</span>
                    </div>
                    <span className={st.viewText}>Посмотреть цену</span>
                </div>
                <div className={st.offerBlock}>
                    <span className={st.title}>Продвинутая подписка</span>
                    <div className={st.priceBlock}><span className={st.price}>2000 руб/месяц</span></div>
                    <Link to={"/login"} className={st.button}>Войти</Link>
                    <span style={{fontSize: 14, display: 'block'}}>(i) Всего 2 рубля в час</span>
                    <hr/>
                    <span style={{fontSize: 15, display: "block", marginBottom: 20}}>Для разработчиков Senior уровня или компаний</span>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Всё то что есть в базовой подписке</span>
                    </div>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Ранний доступ к статьям (за две недели до общего релиза)</span>
                    </div>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Доступ к переведённой документации основых СУБД спустя неделю выхода новой версии</span>
                    </div>
                    <span className={st.viewText}>Посмотреть цену</span>
                </div>
                <div className={st.offerBlock}>
                    <span className={st.title}>Бесплатная подписка</span>
                    <div className={st.priceBlock}><span className={st.price}>0 руб/месяц</span></div>
                    <Link to={"/login"} className={st.button}>Войти</Link>
                    <span style={{fontSize: 14, display: 'block'}}>(i) Бесплатно для всех пользователей</span>
                    <hr/>
                    <span style={{fontSize: 15, display: "block", marginBottom: 20}}>Для новичков в SQL</span>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Доступ к бесплатным статьям</span>
                    </div>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Доступ к бесплатным гайдам по SQL</span>
                    </div>
                    <div className={st.point}>
                        <div className={st.box}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L4.80202 6.56902C4.61309 6.81875 4.32479 6.97491 4.01146 6.99723C3.69812 7.01956 3.3904 6.90588 3.16763 6.68549L1 4.52863"
                                    stroke="#4188e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <span>Доступ к информации о предстоящих митапах/мероприятиях</span>
                    </div>
                    <span className={st.viewText}>Посмотреть цену</span>
                </div>
            </div>
        </div>
    );
};

export default Offer;


