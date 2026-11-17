import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./personagem.js";
import { Mago } from "./mago.js";


export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static descricao ='Detentor de lanças e flechas mágicas!'
    static tipo = 'ArqueiroMago'

    constructor(nome, destreza, elementoMagicco, levelMagico, inteligencia) {
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagicco, levelMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}
