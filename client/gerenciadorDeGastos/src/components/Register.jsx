import { useState } from 'react'
import { React } from 'react'
import axios from 'axios'


const Register = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:3000/usuario',{
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
        <form onSubmit={handleRegister}>

            <div>
                <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required/>
                {error && <p>error</p>}
                <button type="submit">Cadastrar</button>
            </div>

        </form>
    )  
}

export default Register