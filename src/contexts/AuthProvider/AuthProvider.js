import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProviderLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubProviderLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }        
    })
    const authInfo = {user, loading, googleProviderLogin, githubProviderLogin, registerUser, logIn, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;