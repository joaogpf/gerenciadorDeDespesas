import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../components/styles/header.css'
import { useState } from "react";

const Header = () => {

    const [userId, setUserId] = useState(localStorage.getItem("token"))
    const navigate = useNavigate()
    
    useEffect(() => {
        const atualizarUserId = () => setUserId(localStorage.getItem("token"))

        window.addEventListener("userLogin", atualizarUserId)
        window.addEventListener("storage", atualizarUserId)
        
        return () => {
            window.removeEventListener("storage", atualizarUserId)
            window.removeEventListener("userLogin", atualizarUserId)
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setUserId(null)

        window.dispatchEvent(new Event("userLogin"))
        navigate('/')
    }

        return (
            <>
                <header>
                    <h1>Control+</h1>
                    {userId && (
                        <button onClick={handleLogout}>sair</button>
                    )}
                    
                </header>
                <main>
                    <Outlet />
                </main>
            </>

        )
    
}
   
    
    


export default Header