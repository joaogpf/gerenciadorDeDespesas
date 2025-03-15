import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../components/styles/header.css'


const HeaderDashboard = () => {

    const navigate = useNavigate()
    const logOut = () => {
        navigate('/')
    }
 

        return (
            <>
                <header>
                    <h1>Control+</h1>
                    <button onClick={logOut}>Sair</button>
                   
                    
                </header>
                <main>
                    <Outlet />
                </main>
            </>

        )
    
}

export default HeaderDashboard