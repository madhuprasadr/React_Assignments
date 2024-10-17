import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import Hooks from './components/hooksDemo.jsx'; // Import your Hooks component

// Select the root element from your HTML file
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the Hooks component inside the root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
