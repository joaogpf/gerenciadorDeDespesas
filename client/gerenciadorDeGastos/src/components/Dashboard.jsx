import React from "react";
import { useState, useEffect } from 'react'
import "./styles/Dashboard.css"
import Grafico from "./Grafico"
import axios from "axios";


const Dashboard = () => {

    const [transferencias, setTransferencias] = useState([]);
    const [formData, setFormData] = useState({ id_transacao: null, nome_transacao: "", valor_transacao: "", categoria_transacao: "",
         data_transacao: "", metodo_transacao: "", usuario: localStorage.getItem('token') });
    const [editando, setEditando] = useState(false);

    const API_URL = "http://localhost:3000/transacao/"

    useEffect(() => {
      axios.get(API_URL + formData.usuario)
        .then(response => setTransferencias(response.data))
        .catch(error => console.error("Erro ao buscar transferências:", error));
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        if (editando) {
          await axios.put(`${API_URL}/${formData.id_transacao}`, formData);
        } else {
          await axios.post(API_URL, formData);
        }
        
        setTransferencias(await (await axios.get(API_URL + formData.usuario)).data);
        setFormData({ id: null, nome_transacao: "", valor_transacao: "", categoria_transacao: "",
            data_transacao: "", metodo_transacao: "", usuario: localStorage.getItem('token') });
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
        <div className="formContainer">
          <form onSubmit={handleSubmit} className="formulario">
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
            <select value={formData.categoria_transacao} placeholder="categoria" 
            onChange={(e) => setFormData({ ...formData, categoria_transacao: e.target.value })} required>
                <option value="">Selecione...</option>
                <option value="Lazer">Lazer</option>
                <option value="Investimento">Investimento</option>
                <option value="Despesa Essencial">Despesas Essenciais</option>
                <option value="Gasto Pessoal">Gastos Pessoais</option> 
            </select>
            <input 
              type="date" 
              placeholder="Data" 
              value={formData.data_transacao} 
              onChange={(e) => setFormData({ ...formData, data_transacao: e.target.value })} 
              required 
              />
            <select value={formData.metodo_transacao} placeholder="Metodo" 
            onChange={(e) => setFormData({ ...formData, metodo_transacao: e.target.value })} required>
                <option value="">Selecione...</option>
                <option value="Crédito">Crédito</option>
                <option value="Débito">Débito</option>
                <option value="Pix">Pix</option>
                <option value="Espécie">Espécie</option> 
            </select>
            
            <button type="submit">{editando ? "Atualizar" : "Cadastrar"}</button>
          </form>
        </div>
  
        <h2>Lista de Transferências</h2>
        <div className="dashboard">
          <div className="transferencias">
            {transferencias.map((t) => (
              <div key={t.id_transacao} className="transferencia">
                <div className="transfCard">
                  <div className="transfInfo">
                    <p><strong>Transferência:</strong> {t.nome_transacao}</p>
                    <p><strong>Valor:</strong> R$ {t.valor_transacao}</p>
                    <p><strong>Categoria:</strong> {t.categoria_transacao}</p>
                    <p><strong>Data:</strong> {t.data_transacao}</p>
                    <p><strong>Método:</strong> {t.metodo_transacao}</p>
                  </div>
                  <div className="buttonContainer">
                    <button onClick={() => handleEdit(t)}>✏️ Editar</button>
                    <button onClick={() => handleDelete(t.id_transacao)}>❌ Excluir</button>
                  </div>
                </div>
          
              </div>
            ))}
          </div>
          <div className="grafico">
           <Grafico/>
          </div>
        </div>
      </div>
    );
  }

export default Dashboard