import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static descricao = 'Você tem o meu arco!'
    static tipo = 'Arqueiro'
    destreza

    constructor(nome, destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5)
            return `Dominador de flechas`

        return super.obterInsignia()
    }
}