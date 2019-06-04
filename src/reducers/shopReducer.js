import { SET_SHOP_PRODUCTS, FILTER_PRODUCTS_WITH_CATEGORY_ID, SET_SHOP_CATEGORIES } from '../actions/types'

const INITIAL_STATE = {
    categories: [],
    filteredProducts: [],
    products: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            const categories = action.payload
            return {
                ...state,
                categories
            }
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload 
            }
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            let filteredProducts = [] 
            state.products.map(product => {
                if (product.category.includes(action.payload)) {
                    filteredProducts.push(product)  
                }
            }) 
            return {
                ...state,
                filteredProducts 
            }
        default: return state 
    }
}