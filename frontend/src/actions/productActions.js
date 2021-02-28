import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_UPLOAD_REQUEST,
    PRODUCT_UPLOAD_SUCCESS,
    PRODUCT_UPLOAD_FAIL
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products/')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const addProductDetails = (productDetails) => async (dispatch) => {
    console.log(productDetails)
    try {
        dispatch({ type: PRODUCT_UPLOAD_REQUEST })
        console.log(productDetails)

        const { data } = await axios.post(`/api/products/`, productDetails)
        console.log(data);
        dispatch({
            type: PRODUCT_UPLOAD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_UPLOAD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}