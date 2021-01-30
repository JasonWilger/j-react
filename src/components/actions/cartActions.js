import { ADD_TO_CART, REMOVE_PRODUCT, SUB_QUANTITY, ADD_QUANTITY} from './Actions'


export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id: id
    }
}

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        id: id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id: id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id: id
    }
}