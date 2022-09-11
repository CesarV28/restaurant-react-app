import { useEffect, useState } from "react";

export const cart = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('ACTIVE_CART'));

        if( items ){
            setCartItems(items);
        }
    },[]);


    const crateCart = (cartInfo) => {

        if( cartItems.length === 0 ) {
            localStorage.setItem('ACTIVE_CART', JSON.stringify([ {...cartInfo, cartId: new Date().getTime()} ]));
            setCartItems([ ...cartItems, cartInfo ]);
            return;
        }

        const items = JSON.parse(localStorage.getItem('ACTIVE_CART'));
        setCartItems([ ...cartItems, cartInfo ]);

        localStorage.setItem('ACTIVE_CART', JSON.stringify( [...items, cartInfo ] ));
    }

    const countCart = () => {

        let cartItemCount = {};
        

        cartItems.forEach( item => {
            
            if(!cartItemCount[item.name]){
                cartItemCount[item.name] = {...item, count: 1};
            }else{
                // cartItemCount[item.name] = cartItemCount[item.name] + 1
                cartItemCount[item.name] = {...item, count: cartItemCount[item.name].count + 1};
            }

        });
         return Object.values(cartItemCount);
    }

    const clearCart = () => {
        localStorage.clear();
        setCartItems([]);
    }

    return {
        cartItems,

        setCartItems,
        crateCart,
        clearCart,
        countCart,
    }

}