import React from "react";

export default function FavoriteAlbums() {
  return (
    <>
      <div>
          <h1>albumes acá</h1>
          {/* <Album
            key={albums.id}
            artista={album.artista}
                  titulo={album.titulo}
                  fecha={album.lanzamiento}
                  portada={album.portada}
                  genero={album.genero}
                  agrupacion={album.agrupacion}
          /> */}
      </div>
    </>
  );

  // function Album(props) {
  //   return (
  //     <div className="album-container">
  //       <img height="100%" src={props.portada} alt="tf" />
  //       <div className="album-contenido">
  //         <div className="album-descripcion">
  //           <h3 className="album-titulo">{props.artista}</h3>
  //           <h4 className="album-subtitulo">{props.titulo}</h4>
  //           <h4 className="album-subtitulo">
  //             ({props.fecha}) - <span className="cronologia">Hace x años</span>
  //           </h4>
  //         </div>
  //         <div className="album-pie">
  //           <span className="genero">{props.genero}</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  
}