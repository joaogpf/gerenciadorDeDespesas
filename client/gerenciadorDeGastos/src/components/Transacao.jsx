import { useState } from 'react'
import { React } from 'react'
import axios, { Axios } from 'axios'


const Transacao = () => {

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [categoria, setCategoria] = useState('')
    const [data, setData] = useState('')
    const [metodo, setMetodo] = useState('')
    const [error, setError] = useState('')

    const handleTransacao = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('api',{
                nome,
                valor,
                categoria,
                data,
                metodo
        })
        }

        catch(error){
            setError("Erro ao fazer login")
            console.error(error)
        }
    }
    
    return (
        <form onSubmit="handleTransacao">

            <div>
                <input type="text" value={nome} placeholder="Nome" onChange={(e) => setEmail(e.target.value)} required/>
                <input type="number" value={valor} placeholder="Nome" onChange={(e) => setEmail(e.target.value)} required/>
                <input type="text" value={categoria} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required/>
                {error && <p>error</p>}
                <button type="submite">Entrar</button>
            </div>

        </form>
    )  
}

export default Transacao