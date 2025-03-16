import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../components/styles/header.css'


const HeaderRegister = () => {

    const navigate = useNavigate()

    const backHomePage = () => {
        navigate('/')
    }
 

        return (
            <>
                <header>
                    <h1>Control+</h1>
                    <button onClick={backHomePage}>Voltar</button>
                   
                    
                </header>
                <main>
                    <Outlet />
                </main>
            </>

        )
    
}

export default HeaderRegister