import { Navigate } from 'react-router-dom'
import React from 'react'

function RotaProtegida({ children }) {
    const token = localStorage.getItem('token')
    console.log(token)
    
    if (!token) {
        return <Navigate to="/" />
    }
    
    return children
}

export default RotaProtegida