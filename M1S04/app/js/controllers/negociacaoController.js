import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    #campoData
    #campoQuantidade
    #campoValor
    constructor() {
        this.#campoData = document.getElementById('campoData');
        this.#campoQuantidade = document.getElementById('campoQuantidade');
        this.#campoValor = document.getElementById('campoValor');
    }
    
    criarNegociacao(){
        let data = new Date(this.#campoData + "T00:00:00-03:00").toLocaleDateString();
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        console.log(data, quantidade, valor);

        var novaNegociacao = new Negociacao(data, quantidade, valor);
        console.log(novaNegociacao);
        // controller.criarNegociacao();
    }

}

