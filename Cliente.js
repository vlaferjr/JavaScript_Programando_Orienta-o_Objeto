//Criando uma classe Cliente
export class Cliente {
  //atributos
  nome;
  #cpf;

  // -------------------------métodos getter
  get cpf() {
    return this.#cpf;
  }

  // ------------------------- método construtor
  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
    
  }
}