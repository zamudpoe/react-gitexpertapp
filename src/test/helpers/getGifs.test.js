import getGifs from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {

  test('Debe de traer 10 registros', async() => {

    const gifs = await getGifs('Hulk')
    console.log( "Registros recibidos: [%s]",gifs.length )

    expect( gifs.length ).toBe( 10 )

  })


  test('Debe de traer 0 registros', async() => {

    const gifs = await getGifs('')

    /* console.log( gifs ) */

    expect( gifs.length ).toBe( 0 )

  })


  
  



});