import React from "react";

const TransacaoContainer = ({ nome, valor, metodo, data, categoria }) => {
    
    return (
        <div>
            <div className="nomeTransacao"> {nome} </div>
            <div className="valorTransacao"> {valor} </div>
            <div className="metodoTransacao"> {metodo} </div>
            <div className="dataTransacao"> {data} </div>
            <div className="categoriaTransacao"> {categoria} </div>
            ,<button>Apagar</button>
        </div>
    )
}


export default TransacaoContainer