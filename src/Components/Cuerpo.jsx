import React, { useEffect, useState } from 'react'
import { Pelicula } from "./Pelicula"

export const Cuerpo = () => {
    // useState: estados que guardan los datos llamados de la api 
    const [harry, setPeliculasHarry] = useState([]);
    const [comedia, setPeliculasComedia] = useState([])
    //listado de peliculas que aparecen al inico de la pantalla 
    const peliculasPrincipales = ["Harry Potter", "comedia"]

    //useEffect: realiza la consulta para traer los datos que mostramos al inicio de la pantalla 
    useEffect(() => {
        ConsultarPeliculas()
    }, [])
    // funcion que utilizamos para poder hacer un mapeo y traer las pelicuas las cuales agregamos a la lista [peliculasPrincipales]
    const ConsultarPeliculas = () => {
        peliculasPrincipales.map(pelicula => ConsultarApiPeliculas(pelicula))
    }
    // funcion que usamos para consultar a la api y traer peliculas de la web
    const ConsultarApiPeliculas = async (pelicula) => {
        try {
            //hacemos la consulta a la api
            const api = await fetch(`https://www.omdbapi.com/?apikey=ee927cef&s=${pelicula}`)
            //convertimos los datos traidos en un json para poder utilizarlos 
            const resultado = await api.json();
            if (pelicula === "Harry Potter") {
                setPeliculasHarry(resultado.Search)
            } else {
                setPeliculasComedia(resultado.Search)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=' m-3 mx-4'>
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
            <div>
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
            </div>
        </div>
    )
}
