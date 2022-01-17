import React from 'react';
import cardImage from "../Assets/img_avatar3.png";
import star from "../Assets/star.png";

export default function Card(props) {
   console.log(props.img)
   return (
      <div className='card'>
         <img src={`../Assets/${props.img}`} alt='card' className='card__image' />
         <div className='card__stats'>
            <img src={star} alt="star" className='card__star'/>
            <span>{ props.rating }</span>
            <span className='gray'>({props.reviewCount}) * </span>
            <span className='gray'>{props.country}</span>
         </div>
         <p>{props.title }</p>
         <p><span className='bold'>From ${ props.price}</span> / person</p>
      </div>
   )
}