const getGifts = async (category) => {  
    /* 01 Obtenemos los gifts */
    const GIPHY_API_Key  = "GOcWQKqeSiIiopLoNpmKczCJhvhzoyM5" 
    const limit          = 10 
    const q              = category 

    const giphy_url      = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_Key}&limit=${limit}&q=${encodeURI(q)}`
    const resp           = await fetch(giphy_url)  
    const { data }       = await resp.json() 

    /* 02 Solo creamos objetos con la info que necesitamos */
    const gifs = await data.map( ( img, idx ) => {  
        return {
            id       : img.id,
            user     : img.user ,
            username : img.username,
            title    : img.title,
            url      : img.images?.downsized_medium.url
        }
    })

    /* console.log(gifs)  */    
    return (gifs)

}  

export default getGifts
