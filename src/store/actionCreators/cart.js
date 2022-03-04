import {ADD_TO_CART, DELETE_FROM_CART_BY_ID, REFRESH_CART} from "../actions/cart";

export const addToCart = (value) => {
    const products = JSON.parse(localStorage.getItem("products"))
    if ( products ) {
        const arr = [...products, value]
        localStorage.setItem("products", JSON.stringify(arr))
    } else {
        localStorage.setItem("products", JSON.stringify([value]))
    }
    return {
        type : ADD_TO_CART,
        value : value
    }
}

export const deleteFromCartById = (value, idx) => {
    const products = JSON.parse(localStorage.getItem("products"))
    if ( products ) {
        const arr = products.filter((product, index) => index !== idx)
        localStorage.setItem("products", JSON.stringify(arr))
    }
    return {
        type : DELETE_FROM_CART_BY_ID,
        value : value,
        idx : idx
    }
}

export const refreshCart = () => {
    return {
        type : REFRESH_CART
    }
}