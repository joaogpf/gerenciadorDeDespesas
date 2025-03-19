import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const Grafico = () => {
    const [dataApi, setDataApi] = useState([]);

    const carregarDados = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/transacao/${localStorage.getItem('token')}`);
            setDataApi(response.data);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    };

    useEffect(() => {
        carregarDados();
    }, [dataApi]); // ✅ Carrega apenas na montagem do componente

    function somarPorCategoria(transacoes) {
        return transacoes.reduce((acc, transacao) => {
            const { categoria_transacao, valor_transacao } = transacao;
            if (!acc[categoria_transacao]) acc[categoria_transacao] = 0;
            acc[categoria_transacao] += Number(valor_transacao);
            return acc;
        }, {});
    }

    function somarQuantidadeTransacao(transacoes) {
        const quantidades = { n_lazer: 0, n_investimento: 0, n_pessoal: 0, n_essencial: 0 };
        transacoes.forEach(({ categoria_transacao }) => {
            if (categoria_transacao === "Lazer") quantidades.n_lazer++;
            else if (categoria_transacao === "Investimento") quantidades.n_investimento++;
            else if (categoria_transacao === "Gasto Pessoal") quantidades.n_pessoal++;
            else quantidades.n_essencial++;
        });
        return quantidades;
    }

    const dados = [
        {
            id: 1,
            type: "pie",
            data: {
                labels: ["Gastos Pessoais", "Lazer", "Investimentos", "Despesas Essenciais"],
                datasets: [
                    {
                        label: "Valor Gasto",
                        data: [
                            somarPorCategoria(dataApi)["Gasto Pessoal"],
                            somarPorCategoria(dataApi)["Lazer"],
                            somarPorCategoria(dataApi)["Investimento"],
                            somarPorCategoria(dataApi)["Despesa Essencial"]
                        ],
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9966FF"],
                        borderColor: "rgb(255, 255, 255)",
                        borderWidth: 1,
                    }
                ]
            }
        },
        {
            id: 2,
            type: "bar",
            data: {
                labels: ["Gastos Pessoais", "Lazer", "Investimentos", "Despesas Essenciais"],
                datasets: [
                    {
                        label: "Quantidade de Transações",
                        data: [
                            somarQuantidadeTransacao(dataApi).n_lazer,
                            somarQuantidadeTransacao(dataApi).n_investimento,
                            somarQuantidadeTransacao(dataApi).n_pessoal,
                            somarQuantidadeTransacao(dataApi).n_essencial
                        ],
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9966FF"],
                        borderColor: "rgb(255, 255, 255)",
                        borderWidth: 1,
                    }
                ]
            }
        }
    ];

    return (
        <>
            {dados.map((grafico) => (
                <div key={grafico.id} style={{ width: "400px", marginBottom: "20px" }}>
                    {grafico.type === "bar" && <Bar data={grafico.data} />}
                    {grafico.type === "pie" && <Pie data={grafico.data} />}
                </div>
            ))}
        </>
    );
};

export default Grafico;
