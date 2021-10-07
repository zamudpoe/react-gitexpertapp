import React, { useState } from 'react'
import PropTypes from "prop-types"

export const AddCategory = ( { setCategories } ) => {

  const [ inputValue, setInputValue ] = useState("")
  const handleInputChange             = ( e ) => { setInputValue(e.target.value) }
  const handleSubmit                  = ( e ) => {  
    e.preventDefault() 
    console.log("%c<AddCategory /> %s","color: coral; font-size: 1.2rem;", inputValue)

    if ( inputValue.trim().length > 2 ) {  
      setCategories( categories => [ inputValue, ...categories ] )
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

