import { useState } from 'react'
import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/styles/form.css'
import axios from 'axios'


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            
            const response = await axios.post('http://localhost:3000/usuario/login',{
                email,
                senha
        })
        localStorage.setItem('token', response.data.token)
        navigate('/dashboard')
        }

        catch(error){
            setError("Erro ao fazer login")
            console.error(error)
        }

        
    }
    
    return (
        <form onSubmit={handleLogin}>

            <div>
                <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required/>
                {error && <p>error</p>}
                <button type="submit">Entrar</button>
            </div>

        </form>
    )  
}

export default Login