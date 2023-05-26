import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { navigate, useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating,setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timeout);
  })

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm.length > 0) {
      navigate(`search?query=${searchTerm}`);
      setSearchTerm('');
    }else{
      setIsAnimating(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${isAnimating ? 'animate-shake':'animate-none'} w-full relative`}>
      <input 
      onChange={handleSearchInput}
      name='search'
      className='input' 
      type='text' 
      placeholder='Search for a product...'
      value={searchTerm}
      />
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
        <FiSearch  className='text-xl'/>
      </button>
    </form>
  )
};

export default SearchForm;