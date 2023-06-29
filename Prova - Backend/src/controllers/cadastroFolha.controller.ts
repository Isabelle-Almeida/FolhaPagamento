import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class CadastroFolha {
  async cadastrarFolha(request: Request, response: Response): Promise<Response> {
    const { cpf, horas, valorHora, mes, ano } = request.body;
    try {
      const folha = await prismaClient.folhadePagamento.create({
        data: {
          cpf,
          horas,
          valorHora,
          mes,
          ano,
        },
      });
      return response.json(folha);
    } catch (e) {
      return response.status(200).json({ error: "Folha já cadastrada" });
    }
  }
}

export class DeletarFolha {
  async deletarFolha(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const deletar = await prismaClient.folhadePagamento.delete({
        where: {
          id: parseInt(id),
        },
      });
      return response
        .status(200)
        .json({ message: "Folha de pagamento deletada com sucesso" });
    } catch (e) {
      return response
        .status(400)
        .json({
          message: "A folha que você está tentando deletar não foi cadastrada",
        });
    }
  }
}