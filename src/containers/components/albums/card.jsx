import React from 'react';

const card = ({artist, albumCover, disk, age, genre, recommendedSongs}) => {
    return (
        <div className="card">
            <div className="card-body">
                <img height="250px" src={albumCover} alt="" />

                <div className="descriptions">
                    <h1 className="title">{artist}</h1>
                    <h2>Nombre del disco: {disk}</h2>
                    <h2>Año Lanzamiento: {age}</h2>
                    <h2>Genero: {genre}</h2>
                    <h2>Canciones Recomendadas: {recommendedSongs}</h2>
                </div>
               
            </div>
        </div>
    )
}

export default card
