import React, { useEffect, useState } from 'react';

import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion'

import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { Link } from 'react-router-dom';
import { cart } from '../helpers/localstorageCart';

export const Header = ({ setToggle }) => {

    const [activeMenu, setActiveMenu] = useState(false);
    // const [cartItems, setCartItems] = useState([]);

    const { cartItems } = cart();

    const onLogout = () => {
        setActiveMenu(false);
        // TODO:
        // Clear local storage
        // dispatch
        // Navigate
    }

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('ACTIVE_CART'));
    //     if(items){
    //         setCartItems(items);
    //     }
    // },[])

  return (
    <header className='fixed bg-primary z-50 w-screen p-3 px-4 md:p-6 md:px-16'>
        {/* Desktop and tablet */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className='w-8 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>

            <div className='flex items-center gap-8'>
                <motion.ul 
                    initial={{ opacity: 0, x: 200}}
                    animate={{ opacity: 1, x: 0}}
                    exit={{ opacity: 0, x: 200}}
                    className='flex items-center gap-8 '
                >
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </motion.ul>
                <div 
                    onClick={() => setToggle(true)}
                    className='relative flex items-center justify-center'
                >
                    <MdShoppingBasket 
                        className='text-textColor text-2xl cursor-pointer' 
                    />
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                    </div>
                </div>

                <div 
                    className='relative'
                    onClick={ () => setActiveMenu(!activeMenu)}
                >
                    <motion.img 
                        whileTap={{ scale: 0.6 }}
                        src={Avatar} 
                        className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                        alt='user-profile'
                    />
                    {
                        activeMenu && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.6 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                exit={{ opacity: 0, scale: 0.6 }} 
                                    className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-4 py-2'
                                >
                                
                                <Link to='/createItem'><p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New item <MdAdd/> </p></Link>
                                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout/> </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </div>

        {/* Mobile */}
        <div className='flex items-center justify-between md:hidden w-full h-full'>

            <div 
                onClick={() => setToggle(true)}
                className='relative flex items-center justify-center'
            >

                <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
                </div>
            </div>

            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className='w-8 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold'>City</p>
            </Link>

            <div 
                className='relative'
                onClick={ () => setActiveMenu(!activeMenu)}
            >
                <motion.img 
                    whileTap={{ scale: 0.6 }}
                    src={Avatar} 
                    className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                    alt='user-profile'
                />
                {
                    activeMenu && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.6 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            exit={{ opacity: 0, scale: 0.6 }} 
                                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-4 py-2'
                            >
                            
                            <Link to='/createItem'><p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New item <MdAdd/> </p></Link>
                            <ul className='flex flex-col'>
                                <li className='text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                                <li className='text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                                <li className='text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                                <li className='text-base text-textColor hover:text-headingColor hover:bg-slate-100 px-4 py-2 duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                            </ul>
                            <p 
                                onClick={onLogout}
                                className='px-4 py-2 flex justify-center bg-gray-200 items-center gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout/> 
                            </p>
                        </motion.div>
                    )
                }
            </div>
        </div>
    </header>
  )
}
