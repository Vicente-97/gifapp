import React from 'react'

export const GrifGridItem = ({id,title,url}) => {
  return (
    <div className='card' >
    <img src={url} alt={title}></img>
</div>
  )
}
