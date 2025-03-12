import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Grafico = () => {
    const [data, setData] = React.useState([])
    const [dadosGrafico, setDadosGrafico] = React.useState()
 
    function somarPorCategoria(transacoes) {
        return transacoes.reduce((acc, transacao) => {
          const { categoria_transacao, valor_transacao } = transacao;
      
          if (!acc[categoria_transacao]) {
            acc[categoria_transacao] = 0;
          }
      
          acc[categoria_transacao] += Number(valor_transacao);
          return acc;
        }, {});
      }

    React.useEffect(() => {
        axios.get(`http://localhost:3000/transacao/${localStorage.getItem('token')}`)
        .then(response => setData(response.data))
        .catch(error => console.error("Erro ao buscar transferências:", error));
    }, []);

    
    const dados = {
        labels: ["Gastos Pessoais", "Lazer", "Investimentos", "Despesas Essenciais"],
        datasets: [
            {
                label: "Valor Gasto",
                data: [somarPorCategoria(data)["Gasto Pessoal"], somarPorCategoria(data)["Lazer"], somarPorCategoria(data)["Investimento"], somarPorCategoria(data)["Despesa Essencial"]],
                backgroundColor: ["#FF6384", 
                "#36A2EB",
                "#FFCE56", 
                "#9966FF"], 
                borderColor: "rgb(255, 255, 255)",
                borderWidth: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: "Gastos por Mês" },
        },
      };
    
      return <Pie data={dados} options={options}/>
}

export default Grafico