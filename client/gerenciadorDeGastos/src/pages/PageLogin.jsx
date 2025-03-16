import React from "react";
import Login from "../components/Login";
import AcessarRegistro from "../components/AcessarRegistro";

const PageLogin = () => {
    localStorage.setItem('token', null)
    return (
        <div>
             <Login/>        
        </div>
       
    )
}

export default PageLogin