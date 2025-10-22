//criando um bando ByteBank

// ------------------ importações -----------------------------
//importação da classe Cliente
import { Cliente } from "./Cliente.js";
//importação da classe ContaCorrente
import { ContaCorrente } from "./ContaCorrente.js";


//------------------------- trabalhando com objetos ----------------------
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



