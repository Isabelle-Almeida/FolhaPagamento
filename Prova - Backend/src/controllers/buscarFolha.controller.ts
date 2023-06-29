import { prismaClient } from "../database/prismaClient";
import { Request, Response } from "express";

export class BuscaFolha {
    async buscarFolha(request: Request, response: Response): Promise<Response> {
        const { cpf } = request.params;
        
        
        const buscarFolha = await prismaClient.folhadePagamento.findUnique({
            where: {
                cpf
              
            },
        });

        if(!buscarFolha) {
            return response.status(404).json({ message: "Folha não encontrada"})
        }
        return response.json(buscarFolha);
    }
}