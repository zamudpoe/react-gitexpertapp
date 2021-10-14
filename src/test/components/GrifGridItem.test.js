import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

const title   = "Ola K Ase?"
const url     = "localhost:3000"
const wrapper = shallow( <GifGridItem title = {title} url = {url} /> )

describe('Pruebas en componente <GrifGridItem />', () => { 

  // Prueba 01
  test('Debe de mostrar <GrifGridItem /> correctamente renderizado!', ( ) => {
    expect( wrapper ).toMatchSnapshot()
  })

  // Prueba 02
  test(`Debe tener un parrafo con el title con valor "${title}"`, () => {
    const p = wrapper.find('p')
    expect( p.text().trim() ).toBe( title )
  })

  // Prueba 03
  test(`Debe tener la imagen igual al url y alt de los props`, () => {

    const img = wrapper.find('img')
    /* console.log( img.prop("alt") ) */
    /* console.log( img.props() ) */

    expect( img.prop("src") ).toBe( url )
    expect( img.prop("alt") ).toBe( title )

  })

  // Prueba 01
  test('Debe tener la clase "animate__zoomInDown" ', () => {

    const div       = wrapper.find('div')
    const className = div.prop("className")

    expect( className.includes('animate__zoomInDown') ).toBe( true ) // una forma con incluye
    expect( div.hasClass("animate__zoomInDown") ).toBe(true) // otra forma mas directa con hasClass

  })

  

})



