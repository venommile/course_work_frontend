import React, {useState} from 'react';
import st from "./Header.module.css";
import {ReactComponent as Logo} from "../../img/icons/bdIcon.svg";
import {Link, NavLink} from "react-router-dom";
import cn from "classnames";


const Header = () => {
    const [isOpenedNav, setIsOpenedNav] = useState(false);

    const closeNavbar = () => {
        if (isOpenedNav)
            setIsOpenedNav(!isOpenedNav);
    }


    return (
        <>
            <div className={st.navbar2}></div>
            <div className={st.navbar}>
                <div className={st.container}>
                    <div className={st.logoAndPages}>
                        <Link to="/home"><Logo className={st.logo}/></Link>
                        <div className={cn(st.pages, {[st.pagesOpened]: isOpenedNav})}>
                            <NavLink to="/postgresql" onClick={closeNavbar} className={st.page}
                                     activeClassName={st.page_active}>PostgreSQL</NavLink>
                            <NavLink to="/sql-lite" onClick={closeNavbar} className={st.page}
                                     activeClassName={st.page_active}>SQLite</NavLink>
                            <NavLink to="/mysql" onClick={closeNavbar} className={st.page}
                                     activeClassName={st.page_active}>MySQL</NavLink>
                            <NavLink to="/oracle" onClick={closeNavbar} className={st.page}
                                     activeClassName={st.page_active}>Oracle</NavLink>
                            <NavLink to="/h2" onClick={closeNavbar} className={st.page}
                                     activeClassName={st.page_active}>H2</NavLink>
                            <NavLink to="/db-info" onClick={closeNavbar} className={st.page}
                                     activeClassName={st.page_active}>Общая информация о СУБД</NavLink>
                        </div>
                        <div className={cn(st.shadow, {[st.shadowOpened]: isOpenedNav})}
                             onClick={() => setIsOpenedNav(false)}></div>
                    </div>
                    <div className={st.authBlock}>
                        <Link to={"/login"} className={st.auth}>Войти</Link>
                        <Link to={"/register"} className={st.register}>
                            <div className={st.registerBG}></div>
                            <span>Регистрация</span>
                        </Link>
                        <div className={st.burger_block} onClick={() => setIsOpenedNav(!isOpenedNav)}>
                            <svg className={cn(st.burger, {[st.burger_opened]: isOpenedNav})} width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line className={st.burgerFirstLine} x1="2" y1="5" x2="22" y2="5" stroke="black"
                                      strokeWidth="2" strokeLinecap="round"/>
                                <line className={st.burgerSecondLine} x1="2" y1="12" x2="22" y2="12" stroke="black"
                                      strokeWidth="2" strokeLinecap="round"/>
                                <line className={st.burgerThirdLine} x1="2" y1="19" x2="22" y2="19" stroke="black"
                                      strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Header;