import React, { useState } from "react";
import axios from "axios";

const BuscarFolha = () => {
  const [cpf, setCpf] = useState("");
  const [folhaEncontrada, setFolhaEncontrada] = useState<any>(null);

  const buscarFolha = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/folha/${cpf}`);
      const folha: any = response.data;
      setFolhaEncontrada(folha);
    } catch (error) {
      console.error(error);
      setFolhaEncontrada(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        placeholder="Digite o seu cpf"
      />
      <button onClick={buscarFolha}>Buscar</button>

      {folhaEncontrada ? (
        <div>
          <h2>Filme Encontrado:</h2>
          <p>ID: {folhaEncontrada.id}</p>
          <p>CPF: {folhaEncontrada.cpf}</p>
          <p>Horas: {folhaEncontrada.horas}</p>
          <p>Valor Hora: {folhaEncontrada.valorHora}</p>
          <p>Mes: {folhaEncontrada.mes}</p>
          <p>Bruto: {folhaEncontrada.bruto}</p>
          <p>IR: {folhaEncontrada.ir}</p>
          <p>INSS: {folhaEncontrada.inss}</p>
          <p>FGTS: {folhaEncontrada.fgts}</p>
          <p>Liquido: {folhaEncontrada.liquido}</p>
        
        </div>
      ) : <p>Folha não encontrado </p>}
    </div>
  );
};

export default BuscarFolha;
