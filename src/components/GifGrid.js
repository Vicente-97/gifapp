import React, { useState, useEffect }from 'react'
import { GrifGridItem } from './GrifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
    //const [images, setImages]= useState([])

    const {data:images, loading} = useFetchGifs(category);

    // useEffect( ()=>{
    //     getGifs(category)
    //     .then( setImages)
    // },[])

   
  return (
    <>
     <h3> {category} </h3>
     
     { loading && <span class="loader"></span>}
    <div className='card-grid'>
    {
        
        images.map((img)=>
       <GrifGridItem 
       key={img.id}  {...img}
       ></GrifGridItem>
        
        )
    }
    </div>
    </>
  )
}
