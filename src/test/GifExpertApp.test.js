import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas para <GifExpertApp />', () => {
  
  let wrapper  = shallow( <GifExpertApp  /> )

  test('01 Debe de renderizarse correctamente!', () => {
    console.log("renderizando  <GifExpertApp />")
    expect( wrapper ).toMatchSnapshot()
  })

  test('02 Debe de mostrar una lista de categorias!', () => {
    const categories = ["One Punch", "Superman"]    
    wrapper = shallow( <GifExpertApp defaultCategory = { categories } /> )

    expect(wrapper).toMatchSnapshot()
    expect( wrapper.find("GifGrid").length ).toBe( categories.length ) 

  });


})





