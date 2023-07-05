import React, { useContext, useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const { user, logaut, loading } = useAuth();
    const navigate = useNavigate()

    console.log(user)

    const [api, setApi] = useState("")

    const handleLogaut = async () => {
        await logaut();
        // navigate("/Login")
    }

    if(loading) return <h1>Loading</h1>

    // useEffect(() => {
    //     fetch("https://www.omdbapi.com/?apikey=ee927cef&s=harry")
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Error en la solicitud');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             // Aquí puedes trabajar con los datos obtenidos de la API
    //             setApi(data)
    //         })
    //         .catch(error => {
    //             // Manejo de errores
    //             console.error(error);
    //         });

    //     console.log(api)
    // }, [api])

    return (
        <div>
            <div>
                <h1 className='text-dark'>Bienvenido {user.email}</h1>
            </div>
            <button onClick={() => handleLogaut()}>Cerrar Sesion</button>
        </div>

    )
}
