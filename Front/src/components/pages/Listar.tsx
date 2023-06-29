import axios from "axios";
import { useEffect, useState } from "react";

function ListarFolha() {
    const [folhasDePagamento, setFolhasDePagamento] = useState([] as any[]);
  
    function carregarDados() {
      axios
        .get("http://localhost:3001")
        .then((resposta) => {
          console.log(resposta.data); // Verifique a resposta da API no console
          setFolhasDePagamento(resposta.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  
    useEffect(() => {
      carregarDados();
    }, []);
  
    return (
      <div>
        <h1>Listagem</h1>
        <table>
          <thead>
            <tr>
              <th>CPF</th>
              <th>Horas</th>
              <th>Valor/Hora</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Bruto</th>
              <th>IR</th>
              <th>INSS</th>
              <th>FGTS</th>
              <th>Liquido</th>
            </tr>
          </thead>
          <tbody>
            {folhasDePagamento.map((folha: any) => (
              <tr key={folha.Id}>
                <td>{folha.cpf}</td>
                <td>{folha.horas}</td>
                <td>{folha.valorHora}</td>
                <td>{folha.mes}</td>
                <td>{folha.ano}</td>
                <td>{folha.bruto}</td>
                <td>{folha.irff}</td>
                <td>{folha.inss}</td>
                <td>{folha.fgts}</td>
                <td>{folha.liquido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ListarFolha;
  