import React from 'react';
import PropTyes from 'prop-types';


export const GifGridItem = ( {id,title,url} ) => {
 // console.log(props)
  return (
    <div className='card animate__animated animate__bounce' >
      <p>{ title }</p>
      <img src={url} alt={title} /> 
    </div>
  )
}



GifGridItem.propTypes = {
  title:PropTyes.string.isRequired,
  url:PropTyes.string.isRequired,
}