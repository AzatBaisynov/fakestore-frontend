import { LOG_IN, LOG_OUT } from "../actions/auth";

export const logIn = ( value ) => {
    const token = `Bearer ${value}`
    localStorage.setItem("token", token)
    return {
        type : LOG_IN,
        value : token
    }
}

export const logOut = () => {
    localStorage.removeItem("token")
    return {
        type : LOG_OUT
    }
}
