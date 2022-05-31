import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( { setCategories } ) => {

  const [ inputValue , setInputValue ] = useState('');

  const handleInputChange = ( e ) =>{
    setInputValue( e.target.value );
    console.log('handleInputChange invoked');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('HAndle Submit');
    if( inputValue.trim().length>2 ){
      setCategories ( cats => [inputValue,...cats  ] );
      setInputValue('');
    }
    
    //console.log(setCategories);
  } 

  return (
      <form onSubmit={ handleSubmit }>
        <h1>{ inputValue }</h1>
        <input
          type='text'
          value = { inputValue }
          onChange = { handleInputChange  }
        />
      </form>

  )

}
AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired
}
export default AddCategory