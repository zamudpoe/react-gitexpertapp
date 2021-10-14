import React           from "react";
import "@testing-library/jest-dom";

import { shallow }     from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente <AddCategory />', () => {

  // Inicializamos variables para todas las pruebas!.  
  const setCategories = jest.fn() ; 
  let wrapper = shallow( <AddCategory setCategories = { setCategories } /> )  

  beforeEach( () => { 
    jest.clearAllMocks()  
    wrapper = shallow( <AddCategory setCategories = { setCategories } /> )  
  } )

  test('Debe de mostrarse correctamente ', () => {
    expect( wrapper ).toMatchSnapshot() 
  })


  test('Debe de cambiar la caja de texto', () => {
    const input  =  wrapper.find('input')
    const value  =  "Hola Mundo"

    // SIMULAMOS el evento "onChange" que cambia el texto del input
    // y le damos el valor de la variable 'value'  
    input.simulate('change', { target : { value } })  

    // COMPARAMOS el valor del input vs valor del 'h1' 
    expect( wrapper.find("h1").text().trim() ).toBe( value )  
  })


  test('No debe de postear la informacion con submit', () => {
    // Cambiar valor de el input para que la prueba no pase!
    /*
    const input  =  wrapper.find('input')
    const value  =  "Hola Mundo"
    input.simulate('change', { target : { value } })   
    */

    // SIMULAMOS el evento submit sin cambiar el valor de la caja de texto!. 
    wrapper.find('form').simulate('submit' , { preventDefault(){} })  
    expect( setCategories ).not.toHaveBeenCalled()  
  })


  test('Debe de llamar el setCategories y limpiar la caja de texto!', () => {

    /*
      1. simular el inputChange
      2. simular el submit 
      3. setCategories se debe de haber llamado!
      4. el input debe de estar vacio!
    */

    // 1. simular el inputChange
    let value    =  "Hola Mundo"
    wrapper.find('input').simulate('change', { target : { value } })  

    // 2. simular el submit 
    wrapper.find('form').simulate('submit' , { preventDefault(){} })  

    // 3. setCategories se debe de haber llamado!
    expect( setCategories ).toHaveBeenCalled()
    expect( setCategories ).toHaveBeenCalledTimes(1) 
    expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) )

    // 4. el input debe de estar vacio!
    expect( wrapper.find('input').prop( 'value' ) ).toBe( '' )    

  });


});



