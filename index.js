//criando um bando ByteBank

//Criando uma classe Cliente
class Cliente {
  //atributos
  nome;
  cpf;
}

// criando a classe ContaCorrente
class ContaCorrente {
  //atributos
  agencia;
  //#saldo; //atributo privado
  _saldo = 0; //atributo protegido (convenção)

  //método saque (só sacar se tiver #saldo suficiente)
  saque(valor) {
    //#saldo dessa conta conrrente tem que ser maior ou igual ao valor do saque
    if (this._saldo >= valor) {
        //se for maior ou igual, então pode fazer o saque
      contaCorrente1._saldo -= valor;
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

//criando o objeto cliente1
const cliente1 = new Cliente();
//atribuindo valores aos atributos do objeto cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 12345678900;

//criando o objeto cliente2
const cliente2 = new Cliente();
//atribuindo valores aos atributos do objeto cliente2
cliente2.nome = "Alice";
cliente2.cpf = 98765432100;

//imprimindo os objetos cliente1 e cliente2
console.log(cliente1, cliente2);

//--------------------------------------------------------------------

//criando o objeto contaCorrente1
const contaCorrente1 = new ContaCorrente();
//atribuindo valores aos atributos do objeto contaCorrente1
contaCorrente1.agencia = 1001;
contaCorrente1._saldo = 0;

//imprimindo o #saldo contaCorrente1
console.log("saldo: " + contaCorrente1._saldo);

//imprimindo o objeto contaCorrente1
console.log("Informações atuais da conta: " + "Ag: " + contaCorrente1.agencia, "saldo: " + contaCorrente1._saldo);
//--------------------------------------------------------------------

//fazendo deposito na contaCorrente1
contaCorrente1.deposito(500);

//constante valorSacado = valor que quero sacar;
const valorSacado = contaCorrente1.saque(100);

//imprimindo valor sacado
console.log("Valor sacado: " + valorSacado);



