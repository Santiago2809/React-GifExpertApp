import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Attack on Titan']);
    // const handleAdd = () => {
    //     setCategories( [...categories,'HunterxHunter']);

    //     // setCategories( cats => [...cats,'HunterxHunter']);
    // };
    return (
        <>
            <h2 className="h2-titulo">GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key={ category } 
                            category={ category } 
                        />
                    )
                }
            </ol>
        </>
    );
};
export default GifExpertApp;