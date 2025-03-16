import { useState } from 'react'
import { React } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../components/styles/register.css'


const Register = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/usuario',{
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
        <div className="formRegisterContainer">
             <form onSubmit={handleRegister}>

                <div className="inputContainer">
                    <label>E-mail</label>
                    <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                    <label>Senha</label>
                    <input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required/>
                    {error && <p>error</p>}
                    <button type="submit">Cadastrar</button>
                </div>

            </form>
        </div>
       
    )  
}

export default Register