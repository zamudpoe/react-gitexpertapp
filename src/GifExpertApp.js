import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

import "animate.css"

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']) 
  /* console.log(categories); */
  //const handleAdd = () => {
  //  //setCategories( ['HunterXHunter', ...categories ] )
  //  setCategories( categories => [ ...categories, 'nuevo ITEM'] )
  //  console.log(categories);
  //}

  /* console.log(categories); */

  return (
    <>
      <h2 className="animate__animated animate__bounce animate__delay_2s">GifExpertApp</h2>
      <hr />

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


