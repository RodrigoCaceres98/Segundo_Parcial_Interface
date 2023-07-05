import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom';

export const ProtectedRouter = ({ children }) => {
    
    const { user, loading } = useAuth();
    
    // if que muestra un loading hasta que se loguee el usuario
    if (loading) return <h1>Loading</h1>
    // if que si el usuario no esta logueado lo manda a login
    if (!user) return <Navigate to="/Login"/>;

    // lo mando al home despues de estar logueado
    return <>{children}</>
}