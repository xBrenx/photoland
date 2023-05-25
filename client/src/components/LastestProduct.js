import React from 'react';
import useFetch from '../hooks/useFetch';
//Components
import ProductSlider from './ProductSlider';

const LastestProduct = () => {
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  return (
    <div className='mb-16'>
    <div className='container mx-auto'>
      <h2 className='h2 mb-6 text-center xl:text-left'>
        Lastest Products
        </h2>
    </div>
    <ProductSlider data={data}/>
  </div>
  )
};

export default LastestProduct;