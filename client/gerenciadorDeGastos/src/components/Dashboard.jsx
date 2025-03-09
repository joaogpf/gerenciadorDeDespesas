import React from "react";
import { useState, useEffect } from 'react'

import axios from "axios";


const Dashboard = () => {



    const [transferencias, setTransferencias] = useState([]);
    const [formData, setFormData] = useState({ id_transacao: null, nome_transacao: "", valor_transacao: "", categoria_transacao: "",
         data_transacao: "", metodo_transacao: "", usuario: localStorage.getItem('token') });
    const [editando, setEditando] = useState(false);

    const API_URL = "http://localhost:3000/transacao"

    useEffect(() => {
      axios.get(API_URL)
        .then(response => setTransferencias(response.data))
        .catch(error => console.error("Erro ao buscar transferências:", error));
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if (editando) {
          await axios.put(`${API_URL}/${formData.id}`, formData);
        } else {
          await axios.post(API_URL, formData);
        }
        
        setTransferencias(await (await axios.get(API_URL)).data);
        setFormData({ id: null, nome_transacao: "", valor_transacao: "", categoria_transacao: "",
            data_transacao: "", metodo_transacao: "", usuario: "" });
        setEditando(false);
      } catch (error) {
        console.error("Erro ao salvar transferência:", error);
      }
    };
  
    // 🚀 Excluir transferência
    const handleDelete = async (id_transacao) => {
      try {
        await axios.delete(`${API_URL}/${id_transacao}`);
        setTransferencias(transferencias.filter(t => t.id_transacao !== id_transacao));
      } catch (error) {
        console.error("Erro ao excluir transferência:", error);
      }
    };
  
    // 🚀 Preencher formulário para edição
    const handleEdit = (transferencia) => {
      setFormData(transferencia);
      setEditando(true);
    };
  
    return (
      <div className="container">
        <h2>{editando ? "Editar Transferência" : "Cadastrar Transferência"}</h2>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Nome" 
            value={formData.nome_transacao} 
            onChange={(e) => setFormData({ ...formData, nome_transacao: e.target.value })} 
            required 
          />
          <input 
            type="number" 
            placeholder="Valor" 
            value={formData.valor_transacao} 
            onChange={(e) => setFormData({ ...formData, valor_transacao: e.target.value })} 
            required 
          />
          <input 
            type="text" 
            placeholder="Categoria" 
            value={formData.categoria_transacao} 
            onChange={(e) => setFormData({ ...formData, categoria_transacao: e.target.value })} 
            required 
          />
          <input 
            type="date" 
            placeholder="Data" 
            value={formData.data} 
            onChange={(e) => setFormData({ ...formData, data_transacao: e.target.value })} 
            required 
          />
        <select value={formData.metodo} placeholder="Metodo" 
        onChange={(e) => setFormData({ ...formData, metodo_transacao: e.target.value })} required>
                    <option value="">Selecione...</option>
                    <option value="credito">Crédito</option>
                    <option value="debito">Débito</option>
                    <option value="pix">Pix</option>
                    <option value="especie">Espécie</option> 
                </select>
         
          <button type="submit">{editando ? "Atualizar" : "Cadastrar"}</button>
        </form>
  
        <h2>Lista de Transferências</h2>
        <div className="transferencias">
          {transferencias.map((t) => (
            <div key={t.id_transacao} className="transferencia">
              <p><strong>Transferência:</strong> {t.nome_transacao}</p>
              <p><strong>Valor:</strong> R$ {t.valor_transacao}</p>
              <p><strong>Categoria:</strong> {t.categoria_transacao}</p>
              <p><strong>Data:</strong> {t.data_transacao}</p>
              <p><strong>Método:</strong> {t.metodo_transacao}</p>
              <button onClick={() => handleEdit(t)}>✏️ Editar</button>
              <button onClick={() => handleDelete(t.id_transacao)}>❌ Excluir</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Dashboard