import React, { useState }from 'react'

export const GifGrid = ({category}) => {
    const [images, setImages]= useState([])
    const getGifs= async()=>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=El8ukj9j02TD8qV9n6s0J8Uvg0vXGAAo&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`
        const resp = await fetch(url)
        const  {data} = await resp.json()
        const gifs = data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gifs
       
    }
    getGifs()
    .then((imgs)=> setImages(imgs))

  return (
    <div className='card-grid'>
    {
        images.map((img)=>
        <div className='card' key={img.id}>
            <img src={img.url} alt={img.title}></img>
        </div>
        
        )
    }
    </div>
  )
}
