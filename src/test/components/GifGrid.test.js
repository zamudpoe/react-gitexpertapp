import React from "react";
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock( '../../hooks/useFetchGifs' )  // nos ayuda a fingir datos 

describe('Pruebas en el <GifGrid />', () => {
  const category = "Hulk"
  
  // Prueba 01
  test('Debe de mostrar <GifGrid /> correctamente!', ( ) => {

    /* FALSEAMOS la data con mockReturnValue */
    useFetchGifs.mockReturnValue({
      data    : [], 
      loading : true 
    })
    
    const wrapper  = shallow( <GifGrid category = { category } /> )
    console.log("Loading: %s", wrapper.html().includes("Loading...") )
    expect( wrapper ).toMatchSnapshot()
  })

  // Prueba 02
  test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

    const gifs = [{
      id       : "100",
      url      : "https://localhost:3000",
      title    : "Titulo XXX"
    }, {
      id       : "200",
      url      : "https://localhost:5500",
      title    : "Mama esta presa"
    }]

    /* FALSEAMOS la data con mockReturnValue */
    useFetchGifs.mockReturnValue({
      data    : gifs, 
      loading : false 
    })

    const wrapper  = shallow( <GifGrid category = { category } /> )

    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('p').exists() ).toBe( false ) 
    expect( wrapper.find("GifGridItem").length ).toBe( gifs.length )

  });

});


