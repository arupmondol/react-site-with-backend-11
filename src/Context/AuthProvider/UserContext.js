import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import{ getAuth , GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth"
import { useEffect } from 'react';
import app from '../../Firebase/Firebase.confiq';

export const AuthContext =createContext();
const auth =getAuth(app)

 const UserContext = ({children}) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
 const logOut = () =>{
  return signOut(auth)
 }
 const singInWithGoogle= () =>{
  return signInWithPopup(auth, googleProvider)
 }

 useEffect(() =>{
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser)
    setLoading(false)
  })
  return () => {
    unsubscribe(false)
  }
 },[])
  const authInfo ={user, createUser, singIn, logOut, singInWithGoogle, loading}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;