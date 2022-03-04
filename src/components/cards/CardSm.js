import React from 'react';

const CardSm = ({img_url, title, price}) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={img_url} alt=""/>
            </div>
            <h4 className="card__title">{title}</h4>
            <p className="card__price">{price}$</p>
        </div>
    );
};

export default CardSm;