import React, { useState } from 'react'
import User from '../img/User.png'
import UserIcon from '../img/iconUser.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import Google from "../img/google.png"

export const Login = () => {

  const { login, user, loginWithGoogle, resetPassword } = useAuth()
  const navigate = useNavigate()
  const [mensaje, setMensaje] = useState("")
  const [credenciales, setCredenciales] = useState({
    correo: "",
    contraseña: ""
  })

  // console.log(user)

  // hanbleChange: funcion que utlizamos para poder tomar los valores correo y contraseña para poder hacer la autenticacion
  const hanbleChange = ({ target: { name, value } }) => {
    setCredenciales({ ...credenciales, [name]: value })
    // limpia el mensaje cuando escribe en algun input
    setMensaje("")
  }
  // funcion de logueo 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensaje("")
    try {
      await login(credenciales.correo, credenciales.contraseña);
      navigate("/")
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setMensaje("Ingrese un correo Valido")
      }
      else if (error.code === "auth/wrong-password") {
        setMensaje("Verifique la contraseña")
      }
    }
  }
  //funcion para inciar sesion con google
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  // funcion para resetear la contraseña
  const handleResetPassword = async () => {
    if (!credenciales.correo) return setMensaje("Por favor ingrese un correo")
    try {
      await resetPassword(credenciales.correo)
      setMensaje("Hemos envio un mensaje a su correo para que resetee su contraseña")
    } catch (error) {
      setMensaje(error.code)
    }
  }

  return (
    <div className='loginContainer'>
      <div className='card cardLogin'>
        {/* Inicio de formulario */}
        <div className='w-100 d-flex flex-column'>
          <img src={User} className='m-auto  mb-' width={"100rem"} />
          <h1 className='text-center mb-1 text-white'>Bienvenido</h1>
          <div className='cajaMensaje mb-1'>
            {mensaje && <p className={`m-0 text-center 
            ${mensaje === "Se creado el usuario con exito" ||
                mensaje === "Hemos envio un mensaje a su correo para que resetee su contraseña"
                ?
                "colorConfirmacion"
                :
                "colorError"}`}>{mensaje}</p>}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4  d-flex">
            <input
              type='email'
              name='correo'
              className="form-control"
              placeholder='Ingrese un Correo'
              onChange={hanbleChange}
              accept="image/*" />
            <img src="" alt="" />
          </div>
          <div className="mb-3 d-flex">
            <input
              type='password'
              name='contraseña'
              className=" form-control"
              placeholder='Ingrese una Contraseña'
              onChange={hanbleChange} />
          </div>
          <a href='#' onClick={handleResetPassword} className='d-flex justify-content-end mb-3'>¿Olvidaste tu contraseña?</a>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          <div className='d-flex w-100 mt-3'>
            <button onClick={handleGoogleSignin} className='btn btn-light btnLoginGoogle'>
              <img src={Google} width={"16rem"} className='me-2 mt-1 ' />
              <p className='text-dark m-0'> Iniciar con Google </p>
            </button>
          </div>
          <div className='lineaDivision' />
          <button type="button" className='btn btn-success botonCrearUsuario m-auto' onClick={() => navigate("/Register")}>Crear Usuario</button>
        </form>
        {/* Fin de formulario */}
      </div>


    </div>
  )
}