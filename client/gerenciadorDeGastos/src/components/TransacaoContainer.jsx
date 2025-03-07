import React from "react";
import axios from 'axios'


const TransacaoContainer = ({id, nome, valor, metodo, data, categoria }) => {
    

    const apagarTransferência = async ({id}) => {
        try {
            const response = await axios.delete(`http://localhost3000/transacao/${id}`)
        } catch(error) {
            console.error(error)
        }
    }
    return (
        <div>
            <div className="nomeTransacao"> {nome} </div>
            <div className="valorTransacao"> {valor} </div>
            <div className="metodoTransacao"> {metodo} </div>
            <div className="dataTransacao"> {data} </div>
            <div className="categoriaTransacao"> {categoria} </div>
            ,<button onClick={apagarTransferência(id)}>Apagar</button>
        </div>
    )
}


export default TransacaoContainer