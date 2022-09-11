import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Routes } from 'react-router-dom';

import { 
    CreateContainer, 
    Header, 
    MainContainer 
} from './components'

export const RestaurantApp = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <AnimatePresence mode='wait'>
        <div className='w-secreen h-auto flex flex-col bg-primary'>
            <Header setToggle={setToggle}/>
            <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
                <Routes>
                    <Route path='/*' element={<MainContainer toggle={toggle} setToggle={setToggle}/>} />
                    <Route path='/createItem' element={<CreateContainer/>} />
                </Routes>
            </main>
        </div>
    </AnimatePresence>
  )
}
