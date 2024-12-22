import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebage/firebage.confige';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';


export const AuthContext = createContext();



const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    const userRegister = (email, password, name, photo) => {
        return createUserWithEmailAndPassword(auth, email, password, name, photo)
    }

    // user Login

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // user GoogleLogin

    const GoogleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //sign out
    const SingOut = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        userLogin,
        userRegister,
        GoogleLogin,
        SingOut
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (correntUser) => {
            if (correntUser) {
                setUser(correntUser);
            } else {
                setUser(null);
            }
            setLoading(false)
        });
        return () => {
            unsubcribe();
        };

    }, []);
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;