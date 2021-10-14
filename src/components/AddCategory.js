import React, { useState } from 'react'
import PropTypes from "prop-types"

export const AddCategory = ( { setCategories } ) => {
  const [ inputValue, setInputValue ] = useState("")

  const handleInputChange             = ( e ) => { 
    setInputValue(e.target.value) 

    console.log("HandleInputChange llamado");

  }

  const handleSubmit                  = ( e ) => {  
    e.preventDefault() 
    console.log("%chandleSubmit de <AddCategory /> %s","color: coral; font-size: 1.2rem;", inputValue)

    if ( inputValue.trim().length > 2 ) {  
      setCategories( categories => [ inputValue, ...categories ] )
      /* setCategories( 12345 ) */ // forzamos que falle la prueba con esta linea y comentando la de arriba
      setInputValue("")
    } else {  
      console.log("%cPor favor dame mas de dos letras!","color: tomato;")  
    }  
  }

  return (
    <form onSubmit= { handleSubmit }>
      <h1>{ inputValue }</h1>
      <input 
        type        = "text" 
        value       = { inputValue }
        onChange    = { handleInputChange }        
        onSubmit    = { handleSubmit }
        placeholder = "Introduce un valor"
      />
    </form>
  ) 
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

