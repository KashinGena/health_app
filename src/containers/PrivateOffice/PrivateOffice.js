import React from 'react';

const PrivateOffice = ({user}) => {
    console.log(user);
    
    return (
        <div>
            <h1 className="contacts__title title">
                Привет, {user}
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