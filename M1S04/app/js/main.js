import { NegociacaoController } from "./controllers/negociacaoController.js";

const controller = new NegociacaoController();
document.getElementById("formu").addEventListener("submit", () => {

    controller.criarNegociacao();
});