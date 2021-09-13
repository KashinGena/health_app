import React from 'react';

const PrivateOffice = ({name}) => {
    return (
        <div>
            <h1 className="contacts__title title">
                Привет, {name}
            </h1>
            <div className="contacts__btn-container">
                <button
                    className="main__login-btn main-btn btn-login"
                >
                    Выйти из аккаунта
                </button>
                <button
                    className="main__contacts-btn main-btn btn-second"
                >
                    Перейти в контакты
                </button>
            </div> 
        </div>
    );
};

export default PrivateOffice;