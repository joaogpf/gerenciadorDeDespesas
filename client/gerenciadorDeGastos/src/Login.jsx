import { useState } from 'react'
import { React } from 'react'
import axios, { Axios } from 'axios'


const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('api',{
                email,
                senha
        })
        }

        catch(error){
            setError("Erro ao fazer login")
            console.error(error)
        }
    }
    
    return (
        <form onSubmit="handleLogin">

            <div>
                <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required/>
                {error && <p>error</p>}
                <button type="submite">Entrar</button>
            </div>

        </form>
    )  
}

export default Login