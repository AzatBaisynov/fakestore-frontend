import { ADD_TO_CART, REFRESH_CART, DELETE_FROM_CART_BY_ID } from "../actions/cart";

const initialState = {
    products : JSON.parse(localStorage.getItem("products")) || []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART :
            return {...state, products : [...state.products, action.value] }
        case DELETE_FROM_CART_BY_ID :
            return {...state, products: state.products.filter((product, index) => action.idx !== index)}
        case REFRESH_CART :
            return {...state, products: []}
        default :
            return state
    }
}

export default cartReducer