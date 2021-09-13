import React from 'react';
import './OurServiceItem.scss'

const OurServiceItem = ({title,text,img}) => {
    return (
        <div className="our-service-item">
            <div className="our-service-item__inner">
                <img alt="pic" src={img} className="our-service-item__img"/>
                <p className="our-service-item__title">{title}</p>
                <div className="our-service-item__line"></div>
                <p className="our-service-item__text">{text}</p>
            </div>
        </div>
    );
};

export default OurServiceItem;