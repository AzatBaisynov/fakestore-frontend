import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {URL} from "../../data/data";
import {useSelector} from "react-redux";
import axios from "axios";
import spinner from "../../assets/images/spinner.svg"
import BuyModal from "./BuyModal";
import store from "../../store/store";
import {addToCart} from "../../store/actionCreators/cart";

const Product = () => {
    const { id } = useParams()

    const token = useSelector(el => el?.authReducer?.token)

    const [isLoaded, setIsLoaded] = useState(false)
    const [product, setProduct] = useState({})
    const [isModal, setIsModal] = useState(false)
    const [error, setError] = useState(0)



    const getProduct = async () => {

        const conf = {
            method : "get",
            url : `${URL}/product/byid/${id}`,
            headers : {
                "Authorization" : token
            }
        }
        try {
            const { data } = await axios(conf)
            console.log(data)
            setProduct(data)
        } catch (e) {
            if (e.response.status === 404) {
                setError(404)
            }
        }
        setTimeout(() => setIsLoaded(true), 1000)
    }

    useEffect(getProduct, [id])

    const handleOpenModal = () => {
        setIsModal(!isModal)
    }

    const addProductToCart = () => {
        store.dispatch(addToCart(product))
    }

    if (!isLoaded) {
        return (
            <div className="product__spinner">
                <img src={spinner} alt=""/>
            </div>
        )
    } else if (error) {
        return (
            <div style={{height: "calc(100vh - 100px)", display : "flex", justifyContent: "center", alignItems: "center", fontSize: "135px"}}>
                404
            </div>
        )
    } else {
        return (
            <section className="product">
                <div className="container">
                    <h1 className="product__title">{product.title}</h1>
                    <div className="product__grid">
                        <div className="product__img">
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div className="product__content">
                            <p className="product__price">{product.price} $</p>
                            <div onClick={addProductToCart}>
                                <button className="product__buy" onClick={handleOpenModal}>BUY</button>
                            </div>
                            <p className="product__desc">{product.description}</p>
                            <p className="product__rating">rate: {product?.rate}</p>
                        </div>
                    </div>
                </div>
                {
                    isModal && <BuyModal product={product} close={handleOpenModal} />
                }
            </section>
        );
    }


};

export default Product;