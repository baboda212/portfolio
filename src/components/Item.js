/* Item.js */
import React from 'react'

export default function Item({
    title, desc, link, img
}) {
    
  return (
    <div className='item'>
        <div className='text'>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={link} >작품보러가기</a>
        </div>
        <div className="img">
            <img src={img} alt={title} />
        </div>
    </div>
  )
}
