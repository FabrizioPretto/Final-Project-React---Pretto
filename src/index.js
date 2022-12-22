import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX-fueJmsRr1EsWbCH-Jkb2hBFDqmCJkw",
    authDomain: "e-commerce-3971f.firebaseapp.com",
    projectId: "e-commerce-3971f",
    storageBucket: "e-commerce-3971f.appspot.com",
    messagingSenderId: "1085561042046",
    appId: "1:1085561042046:web:06456ed795b9f48d61542f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

