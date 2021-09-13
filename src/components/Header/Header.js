import React from 'react';
import './Header.scss'
import logo from '../../assets/logo.png'

const Header = ({onLoginClick,isLoggedIn}) => {
    console.log(isLoggedIn);
    
    return (
        <header className='header'>
            <div className="header__inner">
                <div className="header__logo">
                    <img alt='logo' src={logo} className="header__logo-img"/>
                </div>
                <div className="header__container">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                Контакты
                            </li>
                        </ul>
                    </nav>
                    <button className='header__login-btn'
                            onClick={onLoginClick}
                    >
                        {isLoggedIn?'Выйти':'Войти'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;