import React from 'react'

export const GifGridItem = ( {img} ) => {
    
    const {title,url} = img; 

    return (
        <div className="card animate__animated animate__fadeInUpBig animate__faster">
            <img src={ url } alt="GIF"/>
            <p> { title } </p>
        </div>
    )
}
