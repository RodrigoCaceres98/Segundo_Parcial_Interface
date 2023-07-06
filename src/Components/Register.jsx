import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

  const { signup } = useAuth()
  const navigate = useNavigate()
  const [mensaje, setMensaje] = useState("")
  const [credenciales, setCredenciales] = useState({
    correo: "",
    contraseña: ""
  })


  // hanbleChange: funcion que utlizamos para poder tomar los valores correo y contraseña para poder hacer la autenticacion
  const hanbleChange = ({ target: { name, value } }) => {
    setCredenciales({ ...credenciales, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensaje("")
    try {
      await signup(credenciales.correo, credenciales.contraseña)
      setMensaje("Se creado el usuario con exito")
      setTimeout(() => {
        navigate("/Login")
      }, 3000);
    } catch (error) {
      setMensaje(error.code)
      if (error.code === "auth/invalid-email") {
        setMensaje("Ingrese un correo valido")
      } else if (error.code === "auth/weak-password") {
        setMensaje("la contraseña debe tener al menos 6 caracteres")
      } else {
        setMensaje("El correo ya esta registrado")
      }

      console.log(error)
    }
  }

  return (
    <div className='loginContainer'>
      <div className='card cardRegister '>
        {/* Inicio de formulario */}
        <div className=''>
          <h1>Registrar</h1>
          <div className='cajaMensaje'>
            {mensaje && <p className={`m-0 text-center ${mensaje === "Se creado el usuario con exito" ? "colorConfirmacion" : "colorError"}`}>{mensaje}</p>}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="" className='mb-2'>Correo</label>
            <input
              type='email'
              name='correo'
              className="form-control"
              placeholder='Ingrese un Correo'
              onChange={hanbleChange}
              accept="image/*" />
            <img src="" alt="" />
          </div>
          <div className="mb-5">
            <label htmlFor="" className='mb-2'>Contraseña</label>
            <input
              type='password'
              name='contraseña'
              className=" form-control"
              placeholder='Ingrese una Contraseña'
              onChange={hanbleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          <div className='lineaDivision' />
          <button onClick={() => navigate("/Login") } type="submit" className="btnLoginGoogle w-75 mt-3 btnVolverALogin">
            <p className='m-0  parrafoDeVolverALogin text-center'>Iniciar Sesion</p>
          </button>
        </form>
        {/* Fin de formulario */}
      </div>
    </div>
  )
}