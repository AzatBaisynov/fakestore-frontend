import React, {useEffect, useState} from 'react';
import {URL} from "../../data/data";
import axios from "axios";
import store from "../../store/store";
import {logOut} from "../../store/actionCreators/auth";
import {useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import CardSm from "../cards/CardSm";

const Search = () => {
    const [filtered, setFiltered] = useState([])
    const token = useSelector(el => el.authReducer.token)
    const { search } = useParams()

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
            const filteredProducts = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
            setFiltered(filteredProducts)
        } catch (e) {
            store.dispatch(logOut())
        }
    }, [search])

    return (
        <section className="home">
            <h1 className="home__title">Search: {search}</h1>
            <div className="container home__grid">
                {
                    filtered?.map(({_id, image, title, price}, idx) => (
                        <NavLink to={`/product/${_id}`} key={idx}>
                            <CardSm
                                img_url={image}
                                title={title}
                                price={price}
                            />
                        < /NavLink>
                    ))
                }
                {
                    !filtered[0] && (<h1>NOT FOUND</h1>)
                }
            </div>
        </section>
    );
};

export default Search;