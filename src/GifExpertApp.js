import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {
  //const categories = ['Pulp Fiction','Enter The Matrix','V For Vendetta'];
  const [categories,setCategories] = useState(['Baki Hanma'])
  
  // const handleAdd = ()=>{
  //   //setCategories ( [...categories,'Another'] );
  //   setCategories ( cats => [...categories,'Another'] );
  // }
  console.log(categories);
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = { setCategories }/>
      <hr></hr>
      <section>
        {
          // categories.map( category => {
          //   return <li key = { category }> { category } </li>;
          // })
          //categories.map( category =><li key = { category }> { category } </li>)
          categories.map( category => 
            <GifGrid 
              category = { category }
              key = { category }
            />
            )
        }
      </section>
    </>
    
  )
}

export default GifExpertApp;

