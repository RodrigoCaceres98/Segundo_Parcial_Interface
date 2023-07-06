import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cuerpo } from './Cuerpo';

export const Home = () => {

    const { user, loading } = useAuth();
    const [filtro, setFiltro] = useState("")
    // const navigate = useNavigate()
    // // const [render, setrender] = useState(false)
    // // useEffect(() => {
    // //     setrender(!render)
    // // }, [])

    // console.log(user)

    if (loading) return <h1>Loading</h1>

    return (
        <div className='homeContainer'>
            <div>
                <Header setFiltro={setFiltro} filtro={filtro} />
            </div>
            <div>
                <Cuerpo filtro={filtro} />
            </div>
            {/* <div>
                <Footer/>
            </div>    */}
        </div>

    )
}