import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifApp=()=>{
    const  [categories, setCategories]= useState(['Honda', 'Kawasaki'])

    
    

    // const addBrand =()=>{ 
    //     setCategories(categories.push())
    // }

    // const deleteBrandOne =()=>{ 
    //     setCategories(categories.shift())
    // }


    // const deleteBrandLast =()=>{ 
    //     setCategories(categories.pop())
    // }


    return (
    <>  
    <h2 align="center">GifApp</h2>
    <hr />
    <AddCategory setCategories={setCategories}/>
    
    {/* <button onClick={addBrand}>añadir</button>
    <button onClick={deleteBrandOne}>Borrar Primero</button>
    <button onClick={deleteBrandLast}>Borrar Ultimo</button> */}
    <ol>
       {
            categories.map((category)=>
               <GifGrid 
               key={category}
               category={category}/>            
               
               
               )
       }
    </ol>
    </>
    )
}


export default GifApp;