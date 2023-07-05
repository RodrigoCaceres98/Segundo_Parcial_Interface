import { createContext, useContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../Components/firebase'

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("No hay un proveedor de autenticacion")
    return context
}

export function AuthProvider({ children }) {
    // estado que se utiliza para esperar datos de usuario a la hora de loguarse: utilizada en protectedRouter
    const [loading, setLoading] = useState(true)

    // stado se utlizamos para guardar los datos de usuario
    const [user, setUser] = useState(null)

    // funcion que crear un usuario en firebase
    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    // funcion que loguea un usuario 
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    // funcion que sale de la sesion iniciada
    const logaut = () => { signOut(auth); }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    // useEffect: cumplea la funcion de guardar los datos del usuario logueado
    useEffect(() => {
        // es una escucha que devuelve una funcion para para la escucha
        const onSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => onSubcribe();
    }, [])



    return <authContext.Provider value={{ signup, login, user, logaut, loading, loginWithGoogle, resetPassword }}>{children}</authContext.Provider>

};