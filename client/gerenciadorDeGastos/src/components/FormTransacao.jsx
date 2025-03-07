import { useState } from 'react'
import { React } from 'react'
import axios from 'axios'

const FormTransacao = () => {

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [data, setData] = useState('')
    const [metodo, setMetodo] = useState('')
    const [error, setError] = useState('')

    const handleTransacao = async (e) => {
        usuario = localStorage.getItem('token')
        e.preventDefault()
        try{
            
            const response = await axios.post('http://localhost:3000/transacao',{
                nome,
                valor,
                categoria,
                data,
                metodo,
                usuario
        })
        console.log(response)
        }

        catch(error){
            setError("Erro ao adicionar transacao")
            console.error(error)
        }
    }
    
    return (
        <form onSubmit={handleTransacao}>
            <div>
                <input type="text" value={nome} placeholder="Nome" onChange={(e) => setNome(e.target.value)} required/>
                <input type="number" value={valor} placeholder="Valor" onChange={(e) => setValor(e.target.value)} required/>
                <input type="text" value={categoria} placeholder="Categoria" onChange={(e) => setCategoria(e.target.value)} required/>
                <input type="date" value={data} placeholder="Data" onChange={(e) => setData(e.target.value)} required/>
                <select value={metodo} placeholder="Metodo" onChange={(e) => setMetodo(e.target.value)} required>
                    <option value="">Selecione...</option>
                    <option value="credito">Crédito</option>
                    <option value="debito">Débito</option>
                    <option value="pix">Pix</option>
                    <option value="especie">Espécie</option> 
                </select>
                {error && <p>error</p>}
                <button type="submit">Adicionar</button>
            </div>
        </form>
    )  
}

export default FormTransacao