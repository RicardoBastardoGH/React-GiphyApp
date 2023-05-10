export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=xBmzGMNKwSErqhM6PXsKsa2VR9n8iQEB&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    console.log(data);
    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs
}