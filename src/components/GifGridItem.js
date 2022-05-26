import React from 'react'

export const GifGridItem = ( {id,title,url} ) => {
 // console.log(props)
  return (
    <div className='card animate__animated animate__bounce' >
      <p>{ title }</p>
      <img src={url} alt={title} /> 
    </div>
  )
}
