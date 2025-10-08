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
  saldo;

  //método saque (só sacar se tiver saldo suficiente)
  saque(valor) {
    //saldo dessa conta conrrente tem que ser maior ou igual ao valor do saque
    if (this.saldo >= valor) {
        //se for maior ou igual, então pode fazer o saque
      contaCorrente1.saldo -= valor;
      console.log("Saque realizado com sucesso! Saldo atual: " + this.saldo);
    }
  }

    //método deposito
    deposito(valor) {
        //adiciona o valor ao saldo
        this.saldo += valor;
        console.log("Depósito realizado com sucesso! Saldo atual: " + this.saldo);
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
contaCorrente1.saldo = 0;

//imprimindo o saldo contaCorrente1
console.log("Saldo: " + contaCorrente1.saldo);

//--------------------------------------------------------------------

//fazendo deposito na contaCorrente1
contaCorrente1.deposito(500);

//fazendo saque de 100 na minha conta corrente1
contaCorrente1.saque(100);
