import React from 'react'
import { useAuth } from '../context/authContext'

export const Header = () => {

  const { logaut } = useAuth();

  // funcion para cerrar sesion<
  const handleLogaut = async () => {
    await logaut();
  }
  return (
    // <div className='headerContainer'>
    <nav className="navbar  bg-dark d-flex justify-content-between ">
      <div className='d-flex'>
        <h3 className='mb-0 ms-2 title '>Todo Peliculas</h3>
        <div className='seccionDeBotones'>
          <button className='btn'>
            Home
          </button>
          <button className='btn'>
            Peliculas
          </button>
          <button className='btn'>
            Categorias
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-around w-25">
        <input className="form-control inputBuscar" type="search" placeholder="Buscar" aria-label="Search" />
        <button className='btn btn-outline-danger logaut' onClick={() => handleLogaut()}>Cerrar Sesion</button>

      </div>

      {/* </div> */}
    </nav>

    // </div>
  )
}
