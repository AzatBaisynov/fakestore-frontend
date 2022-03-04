import React from 'react';
import store from "../../store/store";
import {deleteFromCartById} from "../../store/actionCreators/cart";

const CartProduct = ({ product, idx }) => {
    const { _id ,title, price, count, image } = product

    const totalCounter = (price, count) => {
        return price * count
    }

    const handleDelete = () => {
        store.dispatch(deleteFromCartById(product, idx))
    }

    return (
        <div className="cart-card">
            <div className="cart-card__img">
                <img src={image} alt={title}/>
            </div>
            <div className="cart-card__info">
                <h4 className="cart-card__title">{title}</h4>
                <p className="cart-card__price">{price}$</p>
            </div>
            <p className="cart-card__count">count {count}</p>
            <p className="cart-card__total">total {totalCounter(price, count)}$</p>
            <button className="cart-card__delete" onClick={handleDelete}>X</button>
        </div>
    );
};

export default CartProduct;