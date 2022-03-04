import React from 'react';
import {Link, NavLink} from "react-router-dom";
import store from "../../store/store";
import {logOut} from "../../store/actionCreators/auth";
import {useSelector} from "react-redux";
import HeaderSearch from "./HeaderSearch";


const Header = () => {

    const handleLogout = () => store.dispatch(logOut())

    const count = useSelector(el => el?.cartReducer?.products.length)

    return (
        <header className="header">
            <div className="container header__container">
                <Link to={"/"}><h2 className="header__logo">Online Market 24/7</h2></Link>
                <div className="header__block">
                    <HeaderSearch />
                    <nav className="header__nav">
                        <NavLink to="/" className="header__link">Home</NavLink>
                        <NavLink to="/add" className="header__link">Add</NavLink>
                        <NavLink to="/cart" className="header__link" style={{position: "relative"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="feather feather-shopping-cart" width={22} height={22}>
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            {
                                count ? (
                                    <div style={{
                                        padding: "1px 8px",
                                        background: "darkred",
                                        position: "absolute",
                                        bottom: '-12px',
                                        right: '-15px',
                                        borderRadius: "50%"
                                    }}>
                                        {count}
                                    </div>
                                ) : false
                            }
                        </NavLink>
                        <div className="header__logout" onClick={handleLogout}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" fill="#fff" />
                            </svg>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;