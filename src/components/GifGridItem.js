import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ( { id, title, url } ) => {

  /* console.log( { id, title, img } ) */
  /* https://animate.style/ */
  return (
    <div className="card animate__animated animate__zoomInDown" key={ id }>
      <img src={ url } alt={ title } />
      <p> { title } </p>
    </div>
  )

}


/* 
  1. Enzyme
    npm i --save-dev enzyme enzyme-adapter-react-16
  2. Enzyme to JSON
    
  3. PRUEBAS
    *.- Debe moistrar el componente correctamente!.
      *.- Shallow 
      *.- Wrapper
      *- wrapper .toMatchSnapshot()

*/

GifGridItem.propTypes = {
  title : PropTypes.string.isRequired, 
  url   : PropTypes.string.isRequired 
}

