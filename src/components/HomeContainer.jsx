
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';

import { heroData } from '../utilities/heroData'

export const HomeContainer = () => {
  return (
    <section className=' grid grid-cols-1 md:grid-cols-2 gab-2 w-full' id='home'>

      <div className='py-2 flex-1 flex flex-col gap-6 items-start justify-center'>
        <div className='flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full'>
        <p className='text-base text-orange-600 font-semibold'>Bike delivery</p>
        <div className='w-8 h-8 rounded-full bg-white overflow-hidden drop-shadow-xl'>
          <img src={ Delivery } className='w-full h-full object-contain' alt="delivery-img" />
        </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor'>
          The fastest Delivery in  
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'> Your city</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quaerat neque autem dolor exercitationem quibusdam quisquam 
          mollitia pariatur, dolorem quam aperiam repellendus ex, 
          dignissimos dolores!
        </p>
        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
          Order Now
        </button>
      </div>

      <div className='relative w-full py-2 flex-1 flex items-center justify-center'>
        <img 
            src={HeroBg} 
            className='lg:absolute top-4 right-0 w-full lg:w-375 h-370 lg:h-full md:h-510' 
            alt="hero-background" 
        />
        
        <div className='mt-12 w-full h-full absolute flex items-center justify-center gap-2 flex-wrap lg:px-20 py-2'>
            { heroData.map( data => (
                <div key={data.id} className=' lg:w-150 mt-4 min-w-[150px] lg:min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                    <img 
                      src={data.imgSrc} 
                      className='w-16 lg:w-36 -mt-10 lg:-mt-20'
                      alt={data.name} 
                    />
                    <p className='text-base lg:text-xl font-semibold text-textColor mt-2'>
                        {data.name}
                    </p>
                    <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-2'>
                        {data.decp}
                    </p>
                    <p className='text-sm font-semibold text-headingColor'>
                        <span className='text-xs text-red-600'>$ </span>
                        {data.price}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  )
}
