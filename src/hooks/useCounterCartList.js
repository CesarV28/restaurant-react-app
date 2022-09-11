import { useState } from "react"


export const useCounterCartList = ( ) => {
    
    const [countProductCart, setcountProductCart] = useState(0);

    const incrementProductCart = ( product ) => {
        setcountProductCart(product.count += 1 )
    }

    const decrementProductCart = () => {
        
    }

    const clearCart = () => {

    }


    return {
        countProductCart,
        incrementProductCart,
    }

}
