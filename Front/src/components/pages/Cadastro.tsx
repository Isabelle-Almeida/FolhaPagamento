import axios from "axios";
import { useState } from "react";
import { Folha } from "../../models/folha.model";

function CadastroFolha() {
  const [cpf, setCpf] = useState("");
  const [horas, setHoras] = useState("");
  const [valorHora, setValorHora] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  function enviar() {
    let folhas: Folha = new Folha();
    folhas.cpf = cpf;
    folhas.horas = Number.parseInt(horas);
    folhas.valorHora = Number.parseInt(valorHora);
    folhas.mes = Number.parseInt(mes);
    folhas.ano = Number.parseInt(ano);

    axios
      .post("http://localhost:3001/folha/cadastrar", folhas)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setCpf("");
        setHoras("");
        setValorHora("");
        setMes("");
        setAno("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Folha de Pagamento</h1>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
      </div>
      <div>
        <label>Horas:</label>
        <input
          type="text"
          value={horas}
          onChange={(event) => setHoras(event.target.value)}
        />
      </div>
      <div>
        <label>Valor/Hora:</label>
        <input
          type="text"
          value={valorHora}
          onChange={(event) => setValorHora(event.target.value)}
        />
      </div>
      <div>
        <label>Mês:</label>
        <input
          type="text"
          value={mes}
          onChange={(event) => setMes(event.target.value)}
        />
      </div>
      <div>
        <label>Ano:</label>
        <input
          type="text"
          value={ano}
          onChange={(event) => setAno(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroFolha;
