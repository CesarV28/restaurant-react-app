
import { useEffect, useState } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { motion } from 'framer-motion';

import { foodCategories } from '../utilities/foodData';
import { RowContainer } from './RowContainer';

import { useRestaurantStore } from '../hooks/useRestaurantStore';


export const MenuContainer = () => {

    const [foodFilter, setFoodFilter] = useState('chicken');
    const { filterProduct, startFilterProduct } = useRestaurantStore();

    useEffect(() => {
        startFilterProduct(foodFilter)
    }, [])
    
    const onCategoryClick = (category) => {
        setFoodFilter(category);
        startFilterProduct(category);
    }

  return (
    <section className="w-full my-6" id='menu'>
        <div className='w-full flex flex-col items-center justify-center'>
            <p className='mr-auto text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
                 Our hot dishes
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                {foodCategories && foodCategories.map(foodCategory => (
                    <motion.div 
                        whileTap={{ scale: 0.75 }}
                        key={foodCategory.id} 
                        onClick={() => onCategoryClick(foodCategory.urlParamName)}
                        className={`group ${foodFilter === foodCategory.urlParamName ? 'bg-red-600' : 'bg-card'} hover:bg-red-600 w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center`}
                    >
                        <div className={`${foodFilter === foodCategory.urlParamName ? 'bg-white' : 'bg-red-600'} w-10 h-10 rounded-full group-hover:bg-white flex items-center justify-center shadow-lg`}>
                            <IoFastFood className={`${foodFilter === foodCategory.urlParamName ? 'text-textColor' : 'text-white'} group-hover:text-textColor text-lg`}/>
                        </div>
                        <p className={`${foodFilter === foodCategory.urlParamName ? 'text-white' : 'text-textColor'} text-sm group-hover:text-white`}>
                            {foodCategory.name}
                        </p>
                    </motion.div>
                ))
                }
            </div>

            <div className='w-full'>
                <RowContainer 
                    flag={false} 
                    data={filterProduct}
                />
            </div>

        </div>
    </section>
  )
}
