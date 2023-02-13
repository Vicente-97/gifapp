import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState("")

    const handleInputChange =(e) =>{
        console.log(e)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        //no se recarga la pagina con el e.preventDefault()
        e.preventDefault();
        console.log("enviado")
        if(inputValue.trim().length>2){
          setCategories( (nuevo) => [ inputValue, ...nuevo ])
          setInputValue('')
        }
    }

    return (
     
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={ inputValue }
              onChange={handleInputChange}/>
              <button type="submit"> submit</button>

        </form>
      
    )
  }

  AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
  }