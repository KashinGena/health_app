import React from 'react';
import './PrivateOffice.scss'
import { NavLink } from 'react-router-dom';

const PrivateOffice = ({user,onLogout}) => {
    return (
        <div>
            <h1 className="private-office__title title">
                Привет, {user}
            </h1>
            <div className="private-office__btn-container">
                <button
                    onClick={onLogout}
                    className="main__login-btn main-btn btn-login"
                >
                    Выйти из аккаунта
                </button>
                <NavLink to="/contacts"
                    className="main__contacts-btn main-btn btn-second"
                >
                    Перейти в контакты
                </NavLink>
            </div> 
        </div>
    );
};

export default PrivateOffice;