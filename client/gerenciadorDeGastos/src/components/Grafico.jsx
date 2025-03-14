import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Grafico = () => {
    const [dataApi, setDataApi] = React.useState([])
    const chartRef = React.useRef(null)
 
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

    const carregarDados = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/transacao/${localStorage.getItem('token')}`)
        setDataApi(response.data)
    }  catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  }

    React.useEffect(() => {
      carregarDados()
      console.log("ijnadspia")
    }, [dataApi])

    React.useEffect(() => {
      if(chartRef.current) {
        chartRef.current.data.datasets[0].data = dataApi
        chartRef.current.update()
        console.log("oi")
      }
    }, [dataApi])
    
    const dados = {
        labels: ["Gastos Pessoais", "Lazer", "Investimentos", "Despesas Essenciais"],
        datasets: [
            {
                label: "Valor Gasto",
                data: [somarPorCategoria(dataApi)["Gasto Pessoal"], somarPorCategoria(dataApi)["Lazer"], somarPorCategoria(dataApi)["Investimento"], somarPorCategoria(dataApi)["Despesa Essencial"]],
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