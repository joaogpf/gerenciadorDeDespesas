import React from "react";
import { Outlet } from "react-router-dom";
import '../components/styles/header.css'

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