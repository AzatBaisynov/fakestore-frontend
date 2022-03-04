import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const BuyModal = ({product, close}) => {

    useEffect(() => {
        setTimeout(() => {
            close()
        }, 4000)
    }, [])

    return (
        <div>
            <div className="product__modal animate__animated animate__fadeInDown">
                <button className="product__close" onClick={close}>X</button>
                <h2 className="product__add">Has been added to cart</h2>
                <h2 className="product__title product__title_sm">{product.title}</h2>
                <div className="product__grid product__grid_6">
                    <div className="product__img">
                        <img src={product.image} alt=""/>
                    </div>
                    <div className="product__control">
                        <p className="product__price product__price_sm">{product.price}</p>
                        <Link to={"/cart"}><button  className="product__buy product__buy_sm"> buy </button></Link>
                    </div>
                </div>
            </div>
            <div className="product__overlay"/>
        </div>
    );
};

export default BuyModal;