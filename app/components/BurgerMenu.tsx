'use client';

// components/BurgerMenu.tsx
import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation';
// import s from './styles/BurgerMenu.module.scss'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className='flex sm:hidden flex-col space-y-1 cursor' onClick={handleClick}>
        <div className='bg-black w-7 h-1 rounded '></div>
        <div className='bg-black w-7 h-1 rounded '></div>
        <div className='bg-black w-7 h-1 rounded '></div>      
      </button>

      {
        isOpen ? (
          <HeaderNavigation className='absolute left-0 top-16 bg-white pt-8 pb-[90vh] w-[100vw]'/>
        ) : (
          <></>
        )
      }
    </>
  );
};

export default BurgerMenu;