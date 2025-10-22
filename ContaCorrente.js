// criando a classe ContaCorrente
export class ContaCorrente {
  //atributos
  agencia;
  //#saldo; //atributo privado
  _saldo = 0; //atributo protegido (convenção)

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
}