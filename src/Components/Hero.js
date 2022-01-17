import React from 'react';
import content from '../Assets/image.jpg';
export default function Hero() {
   return (
      <section className='hero'>
         <img className="hero__photo" src={content} alt='content' />
         <h1 className='hero__header'>Online Experience</h1>
         <p className='hero__text'>Join unique interactivies led by one-of-kind hosts-all without leaving home.</p>
       </section>
    )
 }