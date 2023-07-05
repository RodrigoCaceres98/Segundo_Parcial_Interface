import React, { useContext, useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cuerpo } from './Cuerpo';

export const Home = () => {

    const { user, loading } = useAuth();
    const navigate = useNavigate()

    if (loading) return <h1>Loading</h1>

    return (
        <div className='homeContainer'>
            <div>
                <Header />
            </div>
            <div>
                <Cuerpo />
            </div>
            {/* <div>
                <Footer/>
            </div>    */}
        </div>

    )
}