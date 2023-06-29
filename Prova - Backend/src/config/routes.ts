import { Router } from "express";
import { BuscaFolha } from "../controllers/buscarFolha.controller";
import { CadastroFolha } from "../controllers/cadastroFolha.controller";
import { ListagemFolha } from "../controllers/listarFolha.controller";

const router : Router = Router();

router.post("/folha/cadastrar", new CadastroFolha().cadastrarFolha)
router.get("/", new ListagemFolha().listarFolha)
router.get("/folha/:cpf", new BuscaFolha().buscarFolha)






export { router };