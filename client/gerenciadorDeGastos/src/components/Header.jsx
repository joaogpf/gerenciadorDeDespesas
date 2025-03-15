import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../components/styles/header.css'
import { useState } from "react";

const Header = () => {
 

        return (
            <>
                <header>
                    <h1>Control+</h1>
                   
                    
                </header>
                <main>
                    <Outlet />
                </main>
            </>

        )
    
}
   
    
    


export default Header