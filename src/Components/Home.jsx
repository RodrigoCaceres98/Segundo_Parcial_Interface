import React, { useContext, useState } from 'react'
import { useAuth } from '../context/authContext'

export const Home = () => {
    
    const {user} = useAuth();

    console.log(user)

    const [api, setApi] = useState("")


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
        <div>Home</div>
    )
}
