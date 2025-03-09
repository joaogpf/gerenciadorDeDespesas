import React from "react";
import { useState, useEffect } from 'react'
import TransacaoContainer from "./TransacaoContainer";
import FormTransacao from "./FormTransacao";
import axios from "axios";



const Dashboard = () => {
    const [transacoes, setTransacoes] = useState([])
    //const [onEdit, setOnEdit] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/transacao/${localStorage.getItem('token')}`)
            .then(response => {
                setTransacoes(response.data)
            })
            .catch(error => {
                console.error('Erro ao obter transações', error)
            })
    }, [setTransacoes])

    return (
    <div>
        <div>Você está logado!</div>
        <h2>Lista de Transações</h2>
        {transacoes.map((transacao) => (
            <TransacaoContainer key={transacao.id_transacao} id={transacao.id_transacao} nome={transacao.nome_transacao} 
            data={transacao.data_transacao} valor={transacao.valor_transacao} categoria={transacao.categoria_transacao} metodo={transacao.metodo_transacao}/>
        ))}
        
        <FormTransacao/>
    </div>
)
}

export default Dashboard