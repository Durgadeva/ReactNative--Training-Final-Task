import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAILURE,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    ADD_PROD_TO_WISHLIST,
    SET_TO_FALSE
} from "../actionTypes/product";

// export const GET_PRODUCTS = 'GET_PRODUCTS'
// export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
// export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

// export const ADD_PRODUCT = 'ADD_PRODUCT'
// export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
// export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE'

// export const GET_PRODUCT = 'GET_PRODUCT'
// export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
// export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE'

export function getProducts(page, limit) {
    return {
        type: GET_PRODUCTS,
        page,
        limit
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function getProductSuccess(product) {
    return {
        type: GET_PRODUCT_SUCCESS,
        product
    }
}

export function getProductFailure(error) {
    return {
        type: GET_PRODUCT_FAILURE,
        error
    }
}

export function addProduct(product) {
    console.log("values innnnnn",product)
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function addProductSuccess() {
    return {
        type: ADD_PRODUCT_SUCCESS,
    }
}

export function addProductFailure(error) {
    return {
        type: ADD_PRODUCT_FAILURE,
        error
    }
}

export function searchProduct(text) {
    console.log("searched text",text);
    return {
        type: SEARCH_PRODUCT,
        text
    }
}

export function searchProductSuccess(prod) {
    return {
        type: SEARCH_PRODUCT_SUCCESS,
        matchedproducts:prod
    }
}

export function searchProductFailure(error) {
    return {
        type: SEARCH_PRODUCT_FAILURE,
        error
    }
}

export function deleteProduct(id)
{
    return{
        type: DELETE_PRODUCT,
        id
    }
}

export function deleteProductSuccess()
{
    return{
        type: DELETE_PRODUCT_SUCCESS        
    }
}

export function deleteProductFailure(error)
{
    return {
        type: DELETE_PRODUCT_FAILURE,
        error
    }
}

export function addProdtoWish(id){
    console.log("id",id)
    return{
        type:ADD_PROD_TO_WISHLIST,
        id
    }
}

export function settoFalse(){
    return{
        type:SET_TO_FALSE
    }
}
