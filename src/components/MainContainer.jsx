import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';

import { HomeContainer } from './HomeContainer';
import { RowContainer } from './RowContainer';
import { MenuContainer } from './MenuContainer';
import { CardContainer } from './CardContainer';

// import { carouselData } from '../utilities/heroData'

import { useRestaurantStore } from '../hooks/useRestaurantStore';

export const MainContainer = ({ toggle, setToggle}) => {

  const { products, startGetProducts } = useRestaurantStore();
 
  const [scrollValue, setScrollValue] = useState(0);
  
  useEffect(() => {
    startGetProducts();
  }, [])
  
  const scrollRight = () => {
    (scrollValue < 200)
    ? setScrollValue(200)
    :setScrollValue(value => value += 200)
  }

  const scrollLeft = () => {
    (scrollValue > 200 )
    ? setScrollValue(-200)
    : setScrollValue(value => value -= 200)
  }

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>

      <section className='w-full mt-16'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600'>
            Our top & delicious food
          </p>
          <div className='hidden md:flex gap-3 items-center'>
            {/* --- Left arrow --- */}
            <motion.div 
              whileTap={{ scale: 0.75 }} 
              onClick={scrollLeft}
              className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
            >
              <MdChevronLeft className='text-lg text-white'/>
            </motion.div>
            {/* --- Rigth arrow --- */}
            <motion.div 
              whileTap={{ scale: 0.75 }} 
              onClick={scrollRight}
              className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center'
            >
              <MdChevronRight className='text-lg text-white'/>
            </motion.div>
          </div>
        </div>
        <RowContainer 
          scrollValue={scrollValue}
          flag={true} 
          data={products}
        />
      </section>

      {/* ===== Menu container =====*/}
      <MenuContainer/>

      {/* ===== Cart =====*/}
      {toggle && <CardContainer setToggle={setToggle}/> }
  

    </div>
  )
}
