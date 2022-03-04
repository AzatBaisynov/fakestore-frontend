import React from 'react';
import {Formik} from "formik";
import * as yup from 'yup'
import Input from "./Input";
import {useSelector} from "react-redux";
import axios from "axios";
import store from "../../store/store";
import {logOut} from "../../store/actionCreators/auth";
import {pageReload, URL} from "../../data/data";

const Add = () => {

    const formikValues = {
        title: "",
        category: "",
        count: "",
        description: "",
        image: "",
        price: "",
        rate: ""
    }

    const validationSchema = yup.object().shape({
        title: yup.string().required('Field title is required'),
        category: yup.string().required('Field category is required'),
        count: yup.number().typeError('Number is required in count').required('Field count is required'),
        description: yup.string().required('Field description is required'),
        image: yup.string().required('Field image is required'),
        price: yup.number().min(1).typeError('Number is required in price').required('Field price is required'),
        rate: yup.number().min(1).max(10).typeError('Number is required in rate').required('Field rate is required')
    })

    const token = useSelector((el) => el?.authReducer?.token)



    const handleSubmit = async (values) => {
        try {
            const conf = {
                url : `${URL}/product/create`,
                data : JSON.stringify(values),
                method : "post",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : token
                }
            }
            const { data } = await axios(conf)
            pageReload()
        } catch (e) {
            console.log(e)
            store.dispatch(logOut())
        }
    }


    return (
        <div className="add">
            <div className="container add__container">
                <h2 className="add__title">Create product</h2>
                <Formik
                    initialValues={formikValues}
                    validateOnBlur
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {
                        ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <div className="add__flex">
                                <Input
                                    name="title"
                                    type="text"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.title}
                                    errorName={errors.title}
                                    touchedName={touched.title}
                                />
                                <Input
                                    name="category"
                                    type="text"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.category}
                                    errorName={errors.category}
                                    touchedName={touched.category}
                                />
                                <Input
                                    name="count"
                                    type="text"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.count}
                                    errorName={errors.count}
                                    touchedName={touched.count}
                                />
                                <Input
                                    name="description"
                                    type="text"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.description}
                                    errorName={errors.description}
                                    touchedName={touched.description}
                                />
                                <Input
                                    name="image"
                                    type="text"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.image}
                                    errorName={errors.image}
                                    touchedName={touched.image}
                                />
                                <Input
                                    name="price"
                                    type="text"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.price}
                                    errorName={errors.price}
                                    touchedName={touched.price}
                                />
                                <Input
                                    name="rate"
                                    type="text"
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    value={values.rate}
                                    errorName={errors.rate}
                                    touchedName={touched.rate}
                                />
                                <button
                                    className="add__submit"
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type="submit"
                                >
                                    Create product
                                </button>
                            </div>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
};

export default Add;