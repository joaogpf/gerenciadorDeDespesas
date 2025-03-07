import React from "react";
import { useState, useEffect } from 'react'
import TransacaoContainer from "./TransacaoContainer";
import axios from "axios";


const Dashboard = () => {
    const [transacoes, setTransacoes] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/transacao/${localStorage.getItem('token')}`)
            .then(response => {
                setTransacoes(response.data)
            })
            .catch(error => {
                console.error('Erro ao obter transações', error)
            })
    }, [])

    return (
    <div>
        <div>Você está logado!</div>
        <h2>Lista de Transações</h2>
        {transacoes.map((transacao) => (
            <TransacaoContainer key={transacao.id_transacao} id={transacao.id_transacao} nome={transacao.nome_transacao} 
            valor={transacao.valor_transacao} categoria={transacao.categoria_transacao} metodo={transacao.metodo_transacao}/>
        ))}
        

    </div>
)
}

export default Dashboard