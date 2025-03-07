import React from "react";
import axios from 'axios'


const TransacaoContainer = ({id, nome, valor, metodo, data, categoria }) => {
    

    const apagarTransferência = async ({id}) => {
        try {
            const response = await axios.delete(`http://localhost:3000/transacao/${id}`)
        } catch(error) {
            console.error(error)
        }
    }

    const editarTransferencia = async ({nome, valor, categoria, data, metodo}) => {
        try {
            const response = await axios.put(`http://localhost:3000/transacao/${id}`, 
                {
                    nome,
                    valor,
                    categoria,
                    data,
                    metodo
            }

            )
        } catch(error){
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
            <button onClick={() => apagarTransferência({id})}> Apagar </button>
            <button onClick={() => apagarTransferência({id})}> Editar </button>
        </div>
    )
}


export default TransacaoContainer