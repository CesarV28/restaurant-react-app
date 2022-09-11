
import { useState } from 'react';
import { motion } from 'framer-motion';

import {MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney} from 'react-icons/md';
import { Loader } from './';

import { foodCategories } from '../utilities/foodData';
import { useForm } from '../hooks/useForm';

import C1 from '../img/c1.png';


export const CreateContainer = () => {
  
  const [isLoading, setisLoading] = useState(false);
  const [imgAsset, setimgAsset] = useState(null);

  const { formState, onInputChange, onResetForm } = useForm({
      title: '',
      category: '',
      price: '',
      calories: '',
      fields: false,
      alertStatus: 'danger',
      msg: 'This is an alert',
  });

  const {
      title,  
      category,  
      price,  
      calories,  
      fields,
      alertStatus,
      msg,
  } = formState;

  const uploadImage = (e) => {
    console.log(e)
    //Revisar que si se mande algo
    if(e.target.value){
      setisLoading(!isLoading);
      setTimeout(() => {
        setisLoading(false);
        setimgAsset(C1);
      }, 2000);
    }
  }

  const onDeleteImg = () => {
    setimgAsset(null);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(formState)
    onResetForm();
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <form 
        onSubmit={onSubmitForm}
        className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center gap-5'
      >
        <motion.p
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          className={`${alertStatus && 'hidden'} w-full p-2 rounded-lg text-center text-lg font-semibold 
            ${alertStatus === 'danger'
              ? 'bg-red-400 text-red-800'
              : 'bg-emerald-400 text-emerald-800'
            }`}>
              {msg}
          </motion.p>

          {/* ============= Input title ============= */}
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
              <MdFastfood className='text-x1 text-gray-700'/>
              <input 
                type="text" 
                required 
                value={title} 
                name='title'
                onChange={ onInputChange }
                placeholder='Gime a title'
                className='w-full h-full text-lg pl-2 bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
              />
          </div>
          
          {/* ============= Select category ============= */}
          <div className='w-full'>
            <select name="category" id="" onChange={onInputChange} className='outline-none w-full text-base border-b-2 bg-white border-gray-200 p-2 rounded-md cursor-pointer'>
              <option value='select' onChange={onInputChange} className='bg-white'>--Select category--</option>
                {foodCategories && foodCategories.map(categoryItem => (
                  (<option 
                    key={categoryItem.id} 
                    name='categoty'
                    value={categoryItem.urlParamName}
                    className='text-base border-0 outline-none capitalize bg-white text-headingColor'
                  >
                    {categoryItem.name}
                  </option>
                  )
                ))}
            </select>
          </div>
          
          {/* ============= Upload img ============= */}
          <div className='group flex items-center justify-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer'>
              {/* -------- This is when a img is uploading -------- */}
              { isLoading && <Loader/>}

              {/* -------- This is when loading is false and imgAsset is !null -------- */}
              <label className={`${ (!isLoading && !imgAsset) ? '' : 'hidden'} w-full h-full flex flex-col items-center justify-center cursor-pointer`}>
                <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                    <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/>
                    <p className='text-gray-500 hover:text-gray-700'>Click here to upload</p>
                </div>
                <input 
                  type="file" 
                  name='uploadImg' 
                  accept='image/*' 
                  onChange={uploadImage}
                  className='w-0 h-0'
                />
              </label>

              {/* -------- This is when imgAsset has something -------- */}
              <div className={`${ (!imgAsset) && 'hidden'} relative w-full h-full`}>
                  <img src={imgAsset} alt="uploaded Image" className='w-full h-full object-cover'/>
                  <button 
                    type='button' 
                    onClick={onDeleteImg}
                    className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out'>
                    <MdDelete className='text-white'/>
                  </button>
              </div>
          </div>

          {/* ============= Inputs calories & price ============= */}
          <div className='w-full flex flex-col md:flex-row items-center gap-3'>
              <div className='w-full py-3 border-b border-gray-300 flex items-center gap-2'>
                  <MdFoodBank className='text-gray-700 text-2xl'/>
                  <input 
                    type="text" 
                    required 
                    placeholder='Calories'
                    value={calories}
                    onChange={onInputChange} 
                    name='calories'
                    className='w-full h-full pl-3 text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>
              </div>
              <div className='w-full py-3 border-b border-gray-300 flex items-center gap-2'>
                  <MdAttachMoney className='text-gray-700 text-2xl'/>
                  <input 
                    type="text" 
                    required 
                    placeholder='Price'
                    value={price}
                    onChange={onInputChange} 
                    name='price'
                    className='w-full h-full pl-3 text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>
              </div>
          </div>
          <div className='flex justify-center items-center w-full'>
            <button 
              type='submit' 
              className=' py-2 ml-0 w-full md:w-80 border-none outline-none bg-emerald-500 rounded-lg text-lg text-white font-semibold'
            >
                Save
              </button>
          </div>
      </form>
    </div>
  )
}
