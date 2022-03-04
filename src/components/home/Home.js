import React, {useEffect, useState} from 'react';
import '../../assets/style/style.scss'
import store from "../../store/store";
import {logOut} from "../../store/actionCreators/auth";
import axios from "axios";
import {URL} from "../../data/data";
import {useSelector} from "react-redux";
import CardSm from "../cards/CardSm";
import {NavLink} from "react-router-dom";

const Home = () => {
    const token = useSelector(el => el.authReducer.token)
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
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
    }

    return (
        <section className="home">
            <h1 className="home__title">Online market products</h1>
            <div className="container home__grid">
                {
                    products?.map(({_id, image, title, price}, idx) => (
                        <NavLink to={`/product/${_id}`} key={idx}>
                            <CardSm
                                img_url={image}
                                title={title}
                                price={price}
                            />
                        < /NavLink>
                    ))
                }
            </div>
        </section>
    );
};

export default Home;