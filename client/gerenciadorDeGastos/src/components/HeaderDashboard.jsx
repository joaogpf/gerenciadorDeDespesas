import React from "react";
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
                    <div className="headerContainer">
                        <h1>Control+</h1>
                        <button className="logout"onClick={logOut}>Sair</button>
                    </div>
                    
                   
                    
                </header>
                <main>
                    <Outlet />
                </main>
            </>

        )
    
}

export default HeaderDashboard