import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google sign up
    // =================

    const googleProviderLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Github sign up
    // ==================

    const githubProviderLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Register
    // ==========

    const registerUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login
    // ========

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Verify Email
    // =================

    const verifyEmail =()=>{
        return sendEmailVerification(auth.currentUser);
    }

    // Logout
    // =======

    
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside auth state change', currentUser);

            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        });


        return () => {
            unsubscribe();
        }        
    })
    const authInfo = {user, loading, setLoading, googleProviderLogin, githubProviderLogin, verifyEmail, registerUser, logIn, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;