import React from "react";
import axios from 'axios'


const TransacaoContainer = ({transacoes, setTransacoes, setOnEdit}) => {

    const handleEdit = (item) => {
        setOnEdit(item)
    }
    

    const apagarTransferência = async ({id}) => {
      
        await axios.delete(`http://localhost:3000/transacao/${id}`)
        .then({ data }) => {
            const newArray = transacoes.filter(transacao) => transacao.id_transacao !== id
            setTransacoes(newArray)
        }
    }

    return (
        <div>
            <div className="nomeTransacao"> {nome} </div>
            <div className="valorTransacao"> {valor} </div>
            <div className="metodoTransacao"> {metodo} </div>
            <div className="dataTransacao"> {data} </div>
            <div className="categoriaTransacao"> {categoria} </div>
            <button onClick={() => apagarTransferência({id})}> Apagar </button>
            <button onClick={() => apagarTransferência({id})}> Editar </button>
        </div>
    )
}


export default TransacaoContainer