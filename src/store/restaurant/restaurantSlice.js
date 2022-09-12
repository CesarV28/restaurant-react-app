import { createSlice } from '@reduxjs/toolkit';

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        products: [],
        filterProduct: [],
        cart: [],
        loading: false
    },
    reducers: {
        onGetProducts: ( state, { payload } ) => {
            state.products = payload;
        },
        onFilterProduct: ( state, { payload } ) => {
            state.filterProduct = payload;
        },
        onAddToCart: (state, { payload } ) => {
            const exist = state.cart.find( cartProduct => cartProduct.id === payload.id );
            // Revisa si hay un producto con el mismo id del payload
            ( !exist )
                ? state.cart.push(payload)
                : state.cart = state.cart.map( product => {
                    if(product.id === exist.id){
                        return { ...product, count: product.count + 1 }
                    }
                    return product;
                })
        },
        onCleanCart: ( state ) => {
            state.cart = [];
        },
        onDecrementProductCart: ( state, { payload } ) => {
            const exist = state.cart.find( cartProduct => cartProduct.id === payload.id );
            // Revisa si hay un producto con el mismo id del payload
            state.cart = state.cart.map( product => {
                    if(product.id === exist.id && product.count > 0 ){
                        return { ...product, count: product.count - 1 }
                    }
                    return product;
                })
        },
        onIncrementProductCart: ( state, { payload } ) => {
            const exist = state.cart.find( cartProduct => cartProduct.id === payload.id );
            // Revisa si hay un producto con el mismo id del payload
            state.cart = state.cart.map( product => {
                    if(product.id === exist.id){
                        return { ...product, count: product.count + 1 }
                    }
                    return product;
                })
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onGetProducts, 
    onFilterProduct, 
    onAddToCart, 
    onCleanCart, 
    onDecrementProductCart,
    onIncrementProductCart,
} = restaurantSlice.actions;