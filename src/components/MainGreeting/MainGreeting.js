import React from 'react';
import './MainGreeting.scss'
import cancer from '../../assets/cancer.png'
import emergency from '../../assets/emergency.png'
import online from '../../assets/online.png'
import OurServiceItem from '../OurServiceItem/OurServiceItem';


const services =[
    {title:"Онлайн помощь", text:"Рыба текст",img:online},
    {title:"Экстренный случай", text:"Рыба текст",img:emergency},
    {title:"Лечение рака", text:"Рыба текст",img:cancer},

]
const MainGreeting = () => {

    return (
        <div className="main">
            <p className="main__title">
            Место для получения медицинской помощи
            </p>
            <div className="main__btn-container">
                <button className="main__login-btn main-btn btn-login">Войти</button>
                <button className="main__contacts-btn main-btn btn-second">Контакты</button>
            </div>
            <div className="main__our-service ">
                <ul className="main__our-service-list">
                    {services.map((service,index) => {
                        return (<li key={index}>
                            <OurServiceItem
                                title={service.title}
                                text={service.text}
                                img={service.img}
                            />
                        </li>)
                    })}
                </ul>
            </div>
            
        </div>
    );
};

export default MainGreeting;