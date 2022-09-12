import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion'

import { useEffect, useRef } from 'react';

import { cart } from '../helpers/localstorageCart';

import NotFound from '../img/NotFound.svg'
import { useRestaurantStore } from '../hooks/useRestaurantStore';

export const RowContainer = ({ flag, data = [], scrollValue }) => {

    const rowContainer = useRef();

    const { startAddingToCart } = useRestaurantStore();

    const { crateCart } = cart();

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);


    const onAddCart = (itemInfo = {}) => {
        
        crateCart(itemInfo);
        startAddingToCart({...itemInfo, count: 1 });
        
    }

  return (
    <div 
        ref={rowContainer} 
        className={`w-full flex items-center gap-3 scroll-smooth my-8 p-4
            ${flag 
                ? 'overflow-x-scroll overflow-y-hidden scrollbar-none' 
                : 'overflow-x-hidden flex-wrap'}`
            }
    >
        {data.length > 0 
            // ---- If there is something in the array ----
            ? data.map( item => (
            <div key={item.id} className='w-275 h-[195px] min-w-[275px] md:w-300 md:min-w-[300px] flex flex-col items-center justify-between my-12 px-4 py-10 rounded-lg shadow-md hover:bg-cardOverlay backdrop-blur-lg'>
                <div className='w-full flex items-center justify-between'>
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        className='w-40 h-40 -mt-24'
                    >
                        <img 
                            src={item.imgSrc} 
                            alt='' 
                            className='w-full h-full object-contain'
                        />
                    </motion.div>
                    <motion.div 
                        whileTap={{ scale: 0.75 }} 
                        onClick={() => onAddCart(item)}
                        className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white'/>
                    </motion.div>
                </div>
                <div className='w-full flex flex-col items-end justify-end'>
                    <p className='text-textColor font-semibold text-base md:text-lg'>
                        { item.name }
                    </p>
                    <p className='text-sm text-gray-500'>
                        45 calories
                    </p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg text-headingColor font-semibold'>
                            <span className='text-sm text-red-500 mr-1'>$</span>5.25
                        </p>
                    </div>
                </div>
            </div>
        )) 
            // ---- If there is nothing in the array ----
            : (<div className='w-full flex flex-col items-center justify-center'>
                <img src={NotFound} className='h-225'/>
                <p className='text-lg text-headingColor font-semibold'>Items NOT available</p>
              </div>)
        }

        
    </div>
  )
}
