import { ADD_TO_CART, REMOVE_PRODUCT, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING} from './Actions'


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

export const subQuantity = (id) => {
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

export const addShipping = (id) => {
    return {
        type: ADD_SHIPPING,
        id: id
    }
}

export const subShipping = (id) => {
    return {
        type: SUB_SHIPPING,
        id: id
    }
}