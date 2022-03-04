import { LOG_IN, LOG_OUT } from "../actions/auth";

const initialState = {
    token : localStorage.getItem("token") || ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return { token: action.value}
        case LOG_OUT:
            return { token: ""}
        default:
            return state
    }
}

export default authReducer