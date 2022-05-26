import React/*, { useState,useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ( { category } ) => {


  const {data:images,loading} = useFetchGifs(  category  );

  // const [ images,setImages ] = useState([]);
  // useEffect( ()=>{

  //   getGifs( category )
  //       .then( imgs => setImages( imgs ))
  //       //.then(  setImages))
  // },[ category ]);

  return (
    <>
    <h3 className="animate__animated animate__fadeIn">{ category }</h3>
    { 
      loading && <h1 className="animate__animated animate__flash">Loading</h1> 
    }
    <section className="card-grid">
      
        {
          // images.map( img => {
          //   return <li key = { img.id }> { img.title } <img  src={img.url} />
          //   </li>;
          // })


          images.map( img => {
            return <GifGridItem 
                    key = { img.id }
                    {...img }
                    />
          })
        }
    </section>
    </>
    
  )
}

export default GifGrid