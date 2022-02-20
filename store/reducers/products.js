import PRODUCTS from "../../data/dummy-data";

const initialState = {
    availaibleProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(prod => prod.uid === 'u1')
}

const productReducer = (state=initialState, actions) => {
    return state;
}

export default productReducer;