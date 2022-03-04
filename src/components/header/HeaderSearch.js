import React, {useEffect, useState} from 'react';
import {URL} from "../../data/data";
import axios from "axios";
import store from "../../store/store";
import {logOut} from "../../store/actionCreators/auth";
import {useSelector} from "react-redux";
import {Link, NavLink, useNavigate} from "react-router-dom";

const HeaderSearch = () => {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const [filtered, setFiltered] = useState([])
    const token = useSelector(el => el.authReducer.token)

    const handleInput = (e) => {
        setSearch(e.target.value)
    }
    useEffect(async () => {
        const conf = {
            url : `${URL}/product/all`,
            method : "GET",
            headers : {
                "Authorization" : token
            }
        }
        try {
            const { data } = await axios(conf)
            setProducts(data)
        } catch (e) {
            store.dispatch(logOut())
        }
    }, [])

    useEffect(() => {
        if (search.length > 3) {
            const filteredProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
            setFiltered(filteredProducts)
        } else {
            handleClose()
        }
    }, [search])

    const handleSearch = () => {
        console.log(filtered)
    }

    const handleClose = () => {
        setFiltered([])
    }
    const handleClear = () => {
        setSearch("")
    }

    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${search}`)
            handleClose()
            handleClear()
        }
    }

    return (
        <div className="header__search">
            <input value={search} type="text" onInput={handleInput} onKeyPress={handleKeyPress} className="header__inp"/>
            <Link to={`/search/${search}`} className="header__btn" onClick={() => {
                handleClear()
                handleClose()
            }}>Search</Link>
            {
                filtered[0] && (
                    <div className="header__modal">
                        {
                            filtered.map(product => (
                                <NavLink key={product._id} onClick={() => {
                                    handleClear()
                                    handleClose()
                                }} to={`/product/${product._id}`} className="header__product">{product.title}</NavLink>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default HeaderSearch;