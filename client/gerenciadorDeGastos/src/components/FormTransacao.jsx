import { useEffect, useState, useRef } from 'react'
import { React } from 'react'
import axios from 'axios'

const FormTransacao = ({ getTransacoes, onEdit, setOnEdit}) => {

    const ref = useRef()

    useEffect(() => {
        if(onEdit) {
            const transacao = ref.current

            transacao.nome_transacao.value = onEdit.nome_transacao
            transacao.valor_transacao.value = onEdit.valor_transacao
            transacao.categoria_transacao.value = onEdit.categoria_transacao
            transacao.data_transacao.value = onEdit.data_transacao
            transacao.metodo_transacao.value = onEdit.metodo_transacao
            transacao.usuario.value = onEdit.usuario
        }
    }, [onEdit])

    const handleTransacao = async (e) => {
        usuario = localStorage.getItem('token')
        e.preventDefault()
        const transacao = ref.current
        
        if(onEdit) {
            
        await axios.put('http://localhost:3000/transacao/' + onEdit.id,{
                nome_transacao: transacao.nome_transacao.value,
                valor_transacao: transacao.valor_transacao.value,
                categoria_transacao: transacao.categoria_transacao.value,
                data_transacao: transacao.data_transacao.value,
                metodo_transacao: transacao.metodo_transacao.value,
                usuario: transacao.usuario.value
        })
            
        } else {
            await axios.post('http://localhost:3000/transacao/', {
                nome_transacao: transacao.nome_transacao.value,
                valor_transacao: transacao.valor_transacao.value,
                categoria_transacao: transacao.categoria_transacao.value,
                data_transacao: transacao.data_transacao.value,
                metodo_transacao: transacao.metodo_transacao.value,
                usuario: transacao.usuario.value
        })
        }
        setOnEdit(null)
        getTransacoes()
    }
    
    return (
        <form ref={ref} onSubmit={handleTransacao}>
            <div>
                <input type="text" value={nome} placeholder="Nome" required/>
                <input type="number" value={valor} placeholder="Valor"  required/>
                <input type="text" value={categoria} placeholder="Categoria"  required/>
                <input type="date" value={data} placeholder="Data" required/>
                <select value={metodo} placeholder="Metodo"  required>
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