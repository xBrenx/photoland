import React from 'react';

import Hero from '../components/Hero';
import LastestProduct from '../components/LastestProduct';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data } = useFetch('/products');
  console.log("data --> " , data);

  return ( 
    <section>
      <Hero />
      <LastestProduct/>
    </section>
  )};

  export default Home;