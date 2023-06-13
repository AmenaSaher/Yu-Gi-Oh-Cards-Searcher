<<<<<<< HEAD
import React from 'react'
import "./Tile.css"
export default function Tile({cards}){
  return (
    <div className='full'>
      <div className='content'>
        <p>{cards.name}</p>
        
        </div>
        
        <div className='box'>
          <span></span>
          <img className="img" src={cards["card_images"][0]["image_url"]} alt=""></img>
        </div>    
        <div className='content2'>
        <p>Type : {cards.type}</p>
        <p className='p'>Race : {cards.race}</p>
        </div>
        <div className='content3'>
        <p className='p'>Level: {cards.level ? cards.level : "-"}</p>
        <p>ATK: {cards.atk ? cards.atk : 0}</p>
        </div>
    </div>
  )
}
=======
import React from 'react'
import "./Tile.css"
export default function Tile({cards}){
  return (
    <div className='full'>
      <div className='content'>
        <p>{cards.name}</p>
        
        </div>
        
        <div className='box'>
          <span></span>
          <img className="img" src={cards["card_images"][0]["image_url"]} alt=""></img>
        </div>    
        <div className='content2'>
        <p>Type : {cards.type}</p>
        <p className='p'>Race : {cards.race}</p>
        </div>
        <div className='content3'>
        <p className='p'>Level: {cards.level ? cards.level : "-"}</p>
        <p>ATK: {cards.atk ? cards.atk : 0}</p>
        </div>
    </div>
  )
}
>>>>>>> 0fcd9077208a1fb2a1f6789d12acdfd7da6f8c89
