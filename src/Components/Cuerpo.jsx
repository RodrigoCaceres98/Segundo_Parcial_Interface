import React, { useEffect, useState } from 'react'
import { Pelicula } from "./Pelicula"
import { UseLocalStorage } from './UseLocalStorage';

export const Cuerpo = () => {

    const [harry, setPeliculasHarry] = useState([]);
    const [comedia, setPeliculasComedia] = useState([])
    const [listaSuprema, setListaSuprema] = UseLocalStorage("lista",[])
    const peliculasPrincipales = ["Harry Potter", "comedia"]

    useEffect(() => {
        // setListaSuprema([])
        localStorage.removeItem("lista")
        ConsultarPeliculas()
        console.log(listaSuprema)
    }, [])

    
    // funcion que utilizamos para poder hacer un mapeo y traer las pelicuas las cuales agregamos a la lista [peliculasPrincipales]
    const ConsultarPeliculas = () => {
        peliculasPrincipales.map(pelicula => ConsultarApiPeliculas(pelicula))
    }
    // funcion que usamos para consultar a la api y traer peliculas de la web
    const ConsultarApiPeliculas = async (pelicula) => {
        try {
            const api = await fetch(`https://www.omdbapi.com/?apikey=ee927cef&s=${pelicula}`)
            const resultado = await api.json();
            if (pelicula === "Harry Potter") {
                setPeliculasHarry(resultado.Search)
            } else {
                setPeliculasComedia(resultado.Search)
            }
            setListaSuprema([...listaSuprema, {nombre: pelicula, peliculas: resultado.Search}])

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=' p-3 mx-4'>
            <div>
                <h2 className='titleMaratonPeliculas'>Para maratonear con Harry Potter</h2>
                <div className='cajaPeliculas'>
                    {harry?.map(pelicula => {
                        if (pelicula.Poster !== "N/A") {
                            return (
                                <div key={pelicula.imdbID} className='m-2'>
                                    <Pelicula pelicula={pelicula} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            
            {/* <div>
                <h2 className='mt-2 titleMaratonPeliculas'>Para maratonear un poco de comedia</h2>
                <div className='cajaPeliculas'>
                    {comedia?.map(pelicula => {
                        if (pelicula.Poster !== "N/A") {
                            return (
                                <div key={pelicula.imdbID} className='m-2'>
                                    <Pelicula pelicula={pelicula} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div> */}
        </div>
    )
}
