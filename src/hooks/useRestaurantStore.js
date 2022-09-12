import { useDispatch, useSelector } from "react-redux";

import { 
    onGetProducts, 
    onFilterProduct, 
    onAddToCart, 
    onCleanCart,
    onDecrementProductCart,
    onIncrementProductCart
} from "../store";

// DB
    // --- it will be the DB ---
import { carouselData, filterData } from '../utilities/heroData';

export const useRestaurantStore = () => {
  
    const {
        products,
        filterProduct,
        cart,
        loading
    } = useSelector(state => state.restaurant);

    const dispatch = useDispatch();

    // ========== 
    const startGetProducts = () => {
        if( !filterData ){
            console.log('Error al cargar')
        }
 
        dispatch( onGetProducts(filterData) );
    }

    const startFilterProduct = ( query = '' ) => {
        const productFiltered = filterData.filter( product => product.category === query);
        dispatch( onFilterProduct(productFiltered));
    }

    const startAddingToCart = (product) => {
        dispatch( onAddToCart(product) )
    }

    const startCleaningCart = () => {
        dispatch( onCleanCart() )
    }

    const startDecrementAmountProduct = (product) => {
        dispatch( onDecrementProductCart(product) )
    }

    const startIncrementAmountProduct = (product) => {
        dispatch( onIncrementProductCart(product) )
    }

    return {
        products,
        filterProduct,
        cart,
        // functions
        startGetProducts,
        startFilterProduct,
        startAddingToCart,
        startCleaningCart,
        startDecrementAmountProduct,
        startIncrementAmountProduct,
    }
}
