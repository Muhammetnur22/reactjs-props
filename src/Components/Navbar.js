import React from 'react';
import airbnb from '../Assets/airbnb.png'
import '../Assets/styles/App.scss'

export default function Navbar(){ 
   return (
      <nav className='nav'>
         <img  className='nav__logo' src={airbnb} alt='airbnb-logo' />
      </nav>
   )
}
