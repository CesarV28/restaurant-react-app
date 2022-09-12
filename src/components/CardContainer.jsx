
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';

import { useRestaurantStore } from '../hooks/useRestaurantStore';

import EmptyCart from '../img/emptyCart.svg';

export const CardContainer = ({ setToggle }) => {

    const { 
        cart, 
        startCleaningCart, 
        startDecrementAmountProduct, 
        startIncrementAmountProduct 
    } = useRestaurantStore();
   
    const subTotal = cart.map( item => item.price * item.count )
                         .reduce( (total, totalPrice) => total + totalPrice, 0);

    const onDecrement = ( product ) => {
        startDecrementAmountProduct(product);
    }

    const onIncrement = ( product ) => {
        startIncrementAmountProduct(product);
    }

  return (
    <motion.div 
        initial={{ opacity: 0, x: 200}}
        animate={{ opacity: 1, x: 0}}
        exit={{ opacity: 0, x: 200}}
        className="fixed right-0 bottom-0 w-full md:w-375 h-screen z-[101] bg-white drop-shadow-md flex flex-col"
    >
        <div className="w-full flex items-center justify-between p-4">
            {/* Exit cart button */}
            <motion.div whileTap={{ scale: 0.75 }} className='cursor-pointer' onClick={() => setToggle(false)}>
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            <p className='text-textColor text-lg font-semibold'>Cart</p>
            {/* Clear button */}
            <motion.p 
                whileTap={{ scale: 0.75 }} 
                onClick={ startCleaningCart }
                className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor'>
                Clear 
                <RiRefreshFill/> 
            </motion.p>
        </div>  

        <div className={`${cart.length !== 0 ? 'hidden' :'flex'} w-full h-full pt-10 px-4  items-center flex-col`}>
            <p className='text-xl text-textColor font-semibold py-4 text-center'>
                Your cart is empty, add something delicios!
            </p>
            <img 
                src={EmptyCart} 
                alt="Empty cart" 
                className='object-cover'
            />    
        </div>
        {/* Button section */}
        <div className={` ${cart.length === 0 ? 'hidden' :'flex'} flex-col w-full h-full bg-cartBg rounded-t-[2rem] `}>
            <div className='w-full md:40 h-340 px-6 py-10 flex flex-col gap-3 overflow-y-scroll'>
                {/* Cart item */}
                {cart.length > 0 && cart.map( (item) => (
                    <div key={item.id} 
                        className={` ${ item.count === 0 && 'opacity-70'} w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2`}
                    >
                        <img 
                            src={item.imgSrc} 
                            alt="Cart Img" 
                            className='w-20 h-20 max-w-[60px] rounded-full object-contain'
                        />
                        {/* Name section */}
                        <div className='flex flex-col gap-2'>
                            <p className='text-base text-gray-50'>
                                {item.name}
                            </p>
                            <p className='text-sm block text-gray-300 font-semibold'>
                                {item.price}
                            </p>
                        </div>
                        {/* Button section */}
                        <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                            <motion.div 
                                onClick={() => onDecrement(item)}
                                whileTap={{ scale: 0.75}}
                            >
                                <BiMinus className='text-gray-50'/>
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
                                {item.count}
                            </p>
                            <motion.div 
                                onClick={() => onIncrement(item)}
                                whileTap={{ scale: 0.75}}
                            >
                                <BiPlus 
                                    className='text-gray-50'
                                />
                            </motion.div>
                        </div>
                    </div> 
                ))}
            </div>
            {/* Cart total section */}
            <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Sub-total</p>
                    <p className='text-gray-400 text-lg'>${subTotal}</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Delivery</p>
                    <p className='text-gray-400 text-lg'>$2.50</p>
                </div>
                <div className='w-full border-b border-gray-600 my-2'>

                </div>
                <div className='w-ful flex items-center justify-between'>
                    <p className='text-gray-200 text-xl font-semibold'>
                        Total
                    </p>
                    <p className='text-gray-200 text-xl font-semibold'>
                        ${ subTotal + 2.50 }
                    </p>
                </div>
                <motion.button 
                    whileTap={{ scale: 0.75 }}
                    type='button'
                    className='w-full p-2 rounded-full bg-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg'
                >
                    Check out
                </motion.button>
            </div>
        </div>
    </motion.div>
  )
}
