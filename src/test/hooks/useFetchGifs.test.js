import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

/* 
  Libreria para probar custom hooks
  url: https://react-hooks-testing-library.com/
*/

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe de retornar el estado inicial', async () => {
    /* const { data , loading } = useFetchGifs( category ) */
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("One Punch") )
    const { data, loading } = result.current

    await waitForNextUpdate() 

    /* console.log( data, loading )  */

    expect( data ).toEqual( [] )
    expect( loading ).toBe( true )
  })


  test('Debe de retornar un arreglo de imagenes y el "loading" en false', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs("One Punch") )
    await waitForNextUpdate() 

    const { data, loading } = result.current
    /* console.log( data, loading )  */

    expect( data.length ).toEqual( 10 )
    expect( loading ).toBe( false )
  });

});



