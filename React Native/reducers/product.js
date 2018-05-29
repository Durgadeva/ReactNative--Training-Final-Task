import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    ADD_PROD_TO_WISHLIST,
    SET_TO_FALSE
} from "../actionTypes/product";

export default (prevState = {
    products: [],
    product: {},
    isLoading: false,
    isRefreshing: false,
    isSearch:false,
    searchList: [],
    delprod: false,
    added:false,
    page: 1,
    limit: 8,
}, action) => {
    console.log(action.type);
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...prevState,
                isLoading: prevState.products.length > 0 ? false:true,
                page: action.page
            }
        case GET_PRODUCTS_SUCCESS:
            return { ...prevState,
                isLoading: false,
                products: prevState.page==1 ? action.products:prevState.products.concat(action.products)
            }
        case GET_PRODUCT:
            return { ...prevState,
                isLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                product: action.product
            }
        case ADD_PRODUCT:
            return { ...prevState,
                added:false
            }
        case ADD_PRODUCT_SUCCESS:
            return { ...prevState,
                isLoading: false,
                added:true
                // product: action.product
            }
        case GET_PRODUCTS_FAILURE:
        case GET_PRODUCT_FAILURE:
        case ADD_PRODUCT_FAILURE:
            return { ...prevState,
                isLoading: false,
                error: action.error
            }
        
        case SEARCH_PRODUCT:
            return { 
                ...prevState,
                isSearch:action.text.length>0 ? true:false
            }
        case SEARCH_PRODUCT_SUCCESS:
            return { ...prevState,
                searchList: action.matchedproducts,
               
            }
        case DELETE_PRODUCT:
        return {
            ...prevState,
        }
        case DELETE_PRODUCT_SUCCESS:
        {
            return{
                ...prevState,
                delprod: true
            }
        }
        case ADD_PROD_TO_WISHLIST:{
            return{
                ...prevState,
                products:prevState.products.map(product=>({
                    ...product,
                    wish:product.id==action.id ? !product.wish : product.wish
                }))
            }
        }
        case SET_TO_FALSE:{
            return{
                ...prevState,
                added:false,
                delprod:false
            }
        }
        default:
            return prevState;

    }
}