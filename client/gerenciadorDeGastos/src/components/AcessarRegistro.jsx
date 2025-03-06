import React from "react";
import { useNavigate } from "react-router-dom";

const AcessarRegistro = () => {
    const navigate = useNavigate()

    function registrar() {
        navigate('/registro')
    }

    return (
        <button onClick={registrar}>
            Criar conta
        </button>
    )
}

export default AcessarRegistro