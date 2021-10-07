/* import React, { useState, useEffect, Fragment } from 'react' */
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ( { category } ) => {  
  const { data:images, loading } = useFetchGifs(category)
  /* console.log(data, loading) */

  return ( 

    <>
      <h3>{ category }</h3> <hr />      

      { loading && <p>Loading...</p> }

      {/* 04 destructuramos el estado y lo enviamos al nuevo componente GifGridItem */}
      <div className="card-grid"> 

        {
          images.map( img => ( 
            <GifGridItem 
              key   = { img.id }  
              { ...img }
            />
          ))
        }

      </div>  
    </>

  ) 
}  


