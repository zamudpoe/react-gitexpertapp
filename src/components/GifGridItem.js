
import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {
    
  /* console.log( { id, title, img } ) */
  /* https://animate.style/ */
  return (
    <div className="card animate__animated animate__zoomInDown" key={ id }>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
  
}


