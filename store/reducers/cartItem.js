import PRODUCTS from "../../data/dummy-data";
import CartItem from "../../models/CartItem";
import { ADD_TO_CART } from "../actions/cartItem";

const initialState = {
    items: {},
    amount: 0,
}

const cartReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.name;

            if(state.items[addedProduct.id]) {
                const updatedProduct = new CartItem(state.items[addedProduct.id].quantity ++, prodTitle, prodPrice, (state.items[addedProduct.id].quantity ++ * prodPrice));
                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]:updatedProduct},
                    amount: state.amount+prodPrice
                }
            }
            else {
                const newitem = new CartItem(1,prodTitle, prodPrice, prodPrice);
                // state.items[addedProduct.id] = {
                //     [state.items.addedProduct.quantity] : 1,
                //     [state.items.addedProduct.price]: newitem.price,
                //     [state.items.addedProduct.title]: newitem.title,
                //     [state.items.addedProduct.sum]: parseInt(newitem.sum)
                // }
                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: newitem},
                    amount: state.amount+prodPrice
                }
            }
    }
        
    return state;
}

export default cartReducer;