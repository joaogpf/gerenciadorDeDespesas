import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Categorias = () => {
    
    const [transacoes, setTransacoes] = useState([])
    const [categoria, setCategoria] = useState('')


    const filtrarCategorias = async () => {

        try {
            const response = await axios.get(`http://localhost3000/transacao/${categoria}`)
            setTransacoes(response)
        } catch (error) {
            console.error("Erro ao filtrar categorias")

        }
    }

    useEffect(() => {
        filtrarCategorias()
    }, [categoria])

    return (
        <div>
             <select placeholder="Filtrar Categoria" 
            onChange={(e) => {setCategoria(e.target.value)}}>
                <option value="">Filtrar por Categoria...</option>
                <option value="Lazer">Lazer</option>
                <option value="Investimento">Investimento</option>
                <option value="Despesa Essencial">Despesas Essenciais</option>
                <option value="Gasto Pessoal">Gastos Pessoais</option> 
            </select>
        </div>
    )
}

export default Categorias 