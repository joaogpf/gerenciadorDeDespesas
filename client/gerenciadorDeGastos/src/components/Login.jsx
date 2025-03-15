import { useState } from 'react'
import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/styles/login.css'
import AcessarRegistro from './AcessarRegistro'
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
        <div className="pageContainer">
            <div className="landingContainer">
                <div className="title">
                    <h1>Aqui você economiza com inteligência.</h1>
                    <h2>Entre ou crie sua conta.</h2>
                </div>
                
            </div>
            <div className="formContainerLogin">
                <div className="content">
                    <form className="loginForm" onSubmit={handleLogin}>
                            <label htmlFor="">E-mail</label>
                            <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                            <label htmlFor="">Senha</label>
                            <input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required/>
                            {error && <p>error</p>}
                            <button type="submit">Entrar</button>
                        
                    
                    </form>
                    <AcessarRegistro/>
                </div>

            </div>
        </div>
       
    )  
}

export default Login