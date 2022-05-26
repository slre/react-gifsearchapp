export const getGifs = async( category ) => {
  const limit = 10;
  const api_key = 'YUZ61mZNtKfKZrcoYbdnxRn3PU15W7mN';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${api_key}&limit=${limit}`;
  console.log(url);
  const resp = await fetch( url );
  const {data} = await resp.json();
  const gifs = data.map( img=>{
    return {
      id:img.id,
      title:img.title,
      url:img.images.downsized.url
    }
  })
  return gifs;
}