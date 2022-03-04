import React from 'react';
import {useSelector} from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
    const products = useSelector(el => el?.cartReducer?.products)



    return (
        <div className="cart">
            <div className="container">
                {
                    products?.map((product, idx) => (
                        <CartProduct product={product} idx={idx}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;