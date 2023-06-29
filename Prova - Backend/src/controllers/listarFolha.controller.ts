import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { FolhadePagamento } from "@prisma/client";

export class ListagemFolha {
    async listarFolha(request: Request, response: Response) {

        const filme: FolhadePagamento[] = await prismaClient.folhadePagamento.findMany();

        return response.json(filme);
    }
}