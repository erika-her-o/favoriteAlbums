import React from 'react';
// import albums from '../../../resources/albums.js';

const card = ({artist, albumCover, disk, age, genre, recommendedSongs}) => {
    return (
        <div className="card">
            <div className="card-body">
                <img height="80px" src={albumCover} alt="" />
                <h1 className="title">{artist}</h1>
                <h5>Nombre del disco: {disk}</h5>
                <h5>Año Lanzamiento: {age}</h5>
                <h5>Genero: {genre}</h5>
                <h5>Canciones Recomendadas: {recommendedSongs}</h5>
            </div>
        </div>
    )
}

export default card
