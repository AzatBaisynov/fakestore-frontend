import React, {useState} from 'react';
import AuthInput from "./AuthInput";
import axios from "axios";
import store from "../../store/store";
import {logIn} from "../../store/actionCreators/auth";
import {URL} from "../../data/data";

const AuthForm = () => {
    const [info, setInfo] = useState({})
    const [error, setError] = useState("")

    const handleClick = async () => {
        if (info.username && info.password) {
            info.username = info.username.trim().toLowerCase()
            console.log(info)
            const config = {
                url: `${URL}/auth/sigh-in`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(info)
            }

            try {
                const { data } = await axios(config)
                if ( data.token ) {
                    store.dispatch(logIn(data.token))
                    setError("")
                }
            } catch (e) {
                setError(e?.response?.data?.error)
            }
        } else {
            setError("enter login and password")
        }
    }

    const handleEnterPress = async (e) => {
        if (e.key === "Enter") {
            await handleClick()
        }
    }

    return (
        <div className="auth" onKeyPress={handleEnterPress}>
            <AuthInput className="auth__inp" type="text" info={info} setInfo={setInfo} placeholder="username" field="username"/>
            <AuthInput className="auth__inp" type="password" info={info} setInfo={setInfo} placeholder="password" field="password"/>
            <button className="auth__login" onClick={handleClick}>Login</button>
            <div className="auth__alert">
                <p className="auth__error">{error}</p>
            </div>
        </div>
    );
};

export default AuthForm;