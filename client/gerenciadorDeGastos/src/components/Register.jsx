import { useState } from 'react'
import { React } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../components/styles/register.css'
import { ToastContainer, toast } from "react-toastify"



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
            toast.error("Erro ao criar usuário")
            console.error(error)
        }
      
       
    }
    
    return (
        <div className="formRegisterContainer">

            <ToastContainer/>
            
                <form className="FormRegister" onSubmit={handleRegister}>

                    <div className="inputContainer">
                        <label>E-mail</label>
                        <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                        <label>Senha</label>
                        <input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required/>
                        {error && <p>error</p>}
                        <button type="submit">Cadastrar</button>
                    </div>
                    

                </form>
                <div className="imageContainerRegister">
                        <h1 className="registerImageTitle">Crie sua Conta</h1>
                </div>
        </div>
       
    )  
}

export default Register