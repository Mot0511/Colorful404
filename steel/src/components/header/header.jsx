import React from 'react';
import cl from './header.module.css'
import logo from '../../img/logo_steam.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={cl.header}>
            <div>
                <div>
                    <Link to={'/'}><img src={logo} className={cl.logo} alt={'здесь должно быть лого, но его нет('}/></Link>
                </div>
                <div className={cl.menu}>
                    <Link to={'/home'} className={cl.menuItem}>МАГАЗИН</Link>
                    <Link to={'/about'} className={cl.menuItem}>О STEEL</Link>
                </div>
                <div className={cl.logDiv}>
                    <a href={'/'}>
                        <button>Установить Steel</button>
                    </a>
                    <Link to={'/'} className={cl.logBt}>войти</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;