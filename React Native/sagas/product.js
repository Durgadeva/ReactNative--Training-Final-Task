import {
    put,
    takeLatest
} from "redux-saga/effects";
import * as actionCreators from "../actionCreators/product"
import {
    GET_PRODUCTS, ADD_PRODUCT, SEARCH_PRODUCT, DELETE_PRODUCT
} from "../actionTypes/product";
import { searchProductSuccess } from "../actionCreators/product";

let URI = "http://172.16.100.23:4000";

function* getProducts(action) {
    try {
        let products = yield fetch(`${URI}/products?_page=${action.page}&_limit=${action.limit}`).then(r => r.json());
        yield put(actionCreators.getProductsSuccess(products))
    } catch (error) {
        yield put(actionCreators.getProductsFailure(error))
    }
}

function* productSearch(action) {
    try {
        let prod = yield fetch(`${URI}/products?q=${action.text}`, {
            method: 'GET',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.prod)
        }).then(r => r.json());
        console.log("searched product",prod)
        yield put(searchProductSuccess(prod));
    }
    catch (error) {
        yield put(searchProductFailure(error));
    }}


    function* productDelete(action){
        try {
            let prod = yield fetch(`${URI}/products/${action.id}`, {
                method: 'DELETE'
            }).then(r => r.json());
            yield put(actionCreators.deleteProductSuccess());
        }
        catch (error) {
            yield put(actionCreators.deleteProductFailure(error));
        }
    }


    export function* productWatchers() {
        yield [takeLatest (GET_PRODUCTS, getProducts),
            takeLatest(SEARCH_PRODUCT, productSearch),
        takeLatest(DELETE_PRODUCT, productDelete),
        takeLatest(ADD_PRODUCT,addProduct)]
    }
// function* getProduct(action) {
//     try {
//         let product = yield fetch(`${URI}\product\${action.id}`).then(r => r.json());
//         yield put(actionCreators.getProductSuccess(product))
//     } catch (error) {
//         yield put(actionCreators.getProductFailure(error))
//     }
// }

function* addProduct(action) {
    try {
        let product = yield fetch(`${URI}/products`, {
            body: JSON.stringify(action.product),
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(r => r.json());
        yield put(actionCreators.addProductSuccess(product))
    } catch (error) {
        yield put(actionCreators.addProductFailure(error))
    }
}

