import React, { useState } from 'react'
import User from '../img/User.png'
import UserIcon from '../img/iconUser.png'

export const Login = () => {

  const [credenciales, setCredenciales] = useState({
    correo: "",
    contraseña: ""
  })

  // hanbleChange: funcion que utlizamos para poder tomar los valores correo y contraseña para poder hacer la autenticacion
  const hanbleChange = ({ target: { name, value } }) => {
    setCredenciales({ ...credenciales, [name]: value })
  }


  return (
    <div className='loginContainer'>
      <div className='card cardLogin'>
        {/* Inicio de formulario */}
        <form className=''>
          <div className='w-100 d-flex flex-column'>
            <img src={User} className='m-auto  mb-2' width={"100rem"} />
            <h1 className='text-center mb-4 text-white'>Bienvenido</h1>
          </div>
          <div className="mb-4  d-flex">
            <input
              type='text'
              name='usuario'
              className="form-control"
              placeholder='Ingrese un Correo'
              onChange={hanbleChange}
              accept="image/*" />
            <img src="" alt="" />
          </div>
          <div className="mb-4 d-flex">
            <input
              type='text'
              name='contraseña'
              className=" form-control"
              placeholder='Ingrese una Contraseña'
              onChange={hanbleChange} />
          </div>
          <a href='#' className='d-flex justify-content-end mb-4'>¿Olvidaste tu contraseña?</a>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          <div className='lineaDivision' />
          <button type="button" className='btn btn-success botonCrearUsuario m-auto'>Crear Usuario</button>
        </form>
        {/* Fin de formulario */}
      </div>


    </div>
  )
}
