// src/utils/authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setAuthToken } from './authSlice';

export const registerUser = async (email, password) => {
   
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (email, password) => {
   

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};



export const setToken = (token) => {
     localStorage.setItem('authToken', token);
     };
      
export const getToken = () => { 
    return localStorage.getItem('authToken') || null ;
 }; 

 export const removeToken = () => {
      localStorage.removeItem('authToken');
     };