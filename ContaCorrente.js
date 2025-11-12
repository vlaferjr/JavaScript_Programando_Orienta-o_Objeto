import { Cliente } from "./Cliente.js";

// criando a classe ContaCorrente
export class ContaCorrente {
  //atributos
  _cliente //atributo Cliente privado
  agencia;
  //#saldo; //atributo privado
  _saldo = 0; //atributo protegido (convenção)

  // -------------------------métodos getter e setter

  //para acessar a propriedade cliente
  get cliente() {
    return this._cliente;
  }

  //para definir a propriedade cliente
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      //se o novoValor for uma instância da classe Cliente atribui o valor
      this._cliente = novoValor;
    }
  }

  //acessando o #saldo
  get saldo() {
    return this._saldo;
  }

  //-------------------------- construtor
  constructor(cliente, agencia) {
    this._cliente = cliente;
    this.agencia = agencia;
  }

  // -------------------------métodos de operações bancárias

  //método saque (só sacar se tiver #saldo suficiente)
  saque(valor) {
    //#saldo dessa conta conrrente tem que ser maior ou igual ao valor do saque
    if (this._saldo >= valor) {
        //se for maior ou igual, então pode fazer o saque
      this._saldo -= valor;
      console.log("Saque realizado com sucesso! saldo atual: " + this._saldo);

      return valor; //retorna o valor sacado
    }
  }

    //método deposito
    deposito(valor) {
      //se o valor do depósito for menor ou igual a zero
        if (valor <= 0) {
            console.log("Valor inválido para depósito.");
            return; //encerra a função
        }
        //adiciona o valor ao #saldo
        this._saldo += valor;
        console.log("Depósito realizado com sucesso! saldo atual: " + this._saldo);
    }

    //método transferência
    transferencia(valor, contaDestino) {
        //tenta fazer o saque
        const valorSacado = this.saque(valor);
        //se o valor sacado for maior que zero
        if (valorSacado > 0) {
            //faz o depósito na conta destino
            contaDestino.deposito(valorSacado);
            console.log("Transferência realizada com sucesso! saldo atual: " + this._saldo);
        }
        contaDestino.cidade = "São Paulo";
    }
}