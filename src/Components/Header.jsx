import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import IconLogout from "../img/iconLogout.png"

export const Header = ({ setFiltro, filtro }) => {

  const { logaut } = useAuth();
  const [listaDePeliculas, setListaDePeliculas] = useState([""])

  // funcion para cerrar sesion<
  const handleLogaut = async () => {
    await logaut();
  }

  // funcion que usamos para consultar a la api y traer peliculas de la web
  const ConsultarApiPeliculas = async (pelicula) => {
    try {
      const api = await fetch(`https://www.omdbapi.com/?apikey=ee927cef&s=${pelicula}`)
      const resultado = await api.json();
      if (resultado) {
        setListaDePeliculas(resultado.Search);
      } else {
        setListaDePeliculas([])
      }

      // console.log("resultado", resultado.Search)
      // console.log("filtro", filtro)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    ConsultarApiPeliculas(filtro)

  }, [filtro])
  console.log(listaDePeliculas)

  return (
    // <div className='headerContainer'>
    <nav className="navbar  bg-dark d-flex justify-content-between ">
      {/* <div className='d-flex'> */}
        <h3 className='mb-0 ms-2 title '>Todo Peliculas</h3>
        {/* <div className='seccionDeBotones'>
          <button className='btn'>
            Home
          </button>
          <button className='btn'>
            Peliculas
          </button>
          <button className='btn'>
            Categorias
          </button>
        </div> */}
      {/* </div> */}

      <div className="hedearRight">
        <div className=' d-flex '>
          <input id='inputBusqueda' onChange={(e) => setFiltro(e.target.value)} list='listaPeliculas' autoComplete='off' className="form-control inputBuscar" type="search" placeholder="Buscar" aria-label="Search" />
          {/* funcion que muestra las peliculas que buscamos mediante el buscador*/}
          {
            listaDePeliculas &&
            <datalist id='listaPeliculas'>
              {
                listaDePeliculas?.map((pelicula) => {
                  return <option
                    key={pelicula.imdbID}>
                    {pelicula.Title}
                    {console.log(pelicula.Title)}
                  </option>
                  // console.log(pelicula)
                })
              }
            </datalist>
          }
        </div>

        <button className='btn btn-outline-danger logaut' onClick={() => handleLogaut()}>
          <img src={IconLogout} alt="" />
          <p id='parrafoLogout' >CerrarSesion </p>
        </button>

      </div>

      {/* </div> */}
    </nav>

    // </div>
  )
}
