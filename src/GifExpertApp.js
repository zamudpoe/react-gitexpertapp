import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

import "animate.css"

const GifExpertApp = ({ defaultCategory = [] }) => {
  /* const [ categories, setCategories ] = useState( ["One Punch"] ) */
  const [ categories, setCategories ] = useState( defaultCategory ) 

  return (
    <>
      <h2 className="animate__animated animate__bounce animate__delay_2s">GifExpertApp</h2>
      <hr />

      {/* Le pasamos la funcion seteadora de estado "setCategories" por medio de la prop del mismo nombre */}
      <AddCategory setCategories = { setCategories } />

      <ol>       
        { 
          categories.map( ( category, idx ) => (
            <GifGrid 
              key      = { idx } 
              category = { category } 
            />
          ))

        } 
      </ol> 
    </>
  )
} 

export default GifExpertApp


