import React from 'react'

export const Pelicula = ({ pelicula }) => {
  return (
    <div className="card cardPeliculas" style={{ width: '18rem' }}>
      <img className="tamañoDeImgPeliculas" src={pelicula.Poster} alt="Card image cap" />
      {/* <div className="card-body">
        <h5 className="card-title">{pelicula.Title}</h5>
        <ul className='custom-list '>
          <li><p className='text-dark mb-1'>Año: <span className='font-weight-bold text-dark'>{pelicula.Year}</span></p></li>
          <li><p className='text-dark'>Tipo: <span className='font-weight-bold text-dark'>{pelicula.Type}</span></p></li>
        </ul>
      </div> */}
    </div>

  )
}
