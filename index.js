//criando um bando ByteBank

// ------------------ importações -----------------------------
//importação da classe Cliente
import { Cliente } from "./Cliente.js";
//importação da classe ContaCorrente
import { ContaCorrente } from "./ContaCorrente.js";


//------------------------- trabalhando com objetos ----------------------
//criando o objeto cliente1 com ajuda do construtor definido na classe Cliente
const cliente1 = new Cliente("Ricardo", 12345678900);

//criando o objeto cliente2
const cliente2 = new Cliente("Alice", 98765432100);

//imprimindo os objetos cliente1 e cliente2
console.log(cliente1, cliente2);

//--------------------------------------------------------------------

//criando o objeto contaCorrente1 com ajuda do construtor definido na classe ContaCorrente
const contaCorrente1 = new ContaCorrente(cliente1, 1001);
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


// ----------------------------------------------
//Atribuindo Cliente à ContaCorrente
contaCorrente1.cliente = cliente1;

//imprimindo o cliente da contaCorrente1 
console.log("Cliente da contaCorrente1: " + contaCorrente1.cliente.nome + " - " +  contaCorrente1.cliente.cpf);

//--------------------------------------------------------------------
console.log("--------------------------------------------------");
//criando o objeto contaCorrente2

const contaCorrente2 = new ContaCorrente(1002, cliente2);
contaCorrente2._saldo = 0;

//imprimindo o objeto contaCorrente2
console.log("Informações atuais da conta2: " + "Ag: " + contaCorrente2.agencia, "saldo: " + contaCorrente2._saldo);

// imprimir o cliente da contaCorrente2 
console.log("Cliente da contaCorrente2: " + contaCorrente2.cliente.nome + " - " +  contaCorrente2.cliente.cpf); 
//--------------------------------------------------------------------

//fazendo a transferência da contaCorrente1 para a contaCorrente2
console.log("--------------------------------------------------");
console.log("Realizando transferência de contaCorrente1 para contaCorrente2");
let valorTransferencia = 200;
contaCorrente1.transferencia(valorTransferencia, contaCorrente2);
console.log("--------------------------------------------------");
console.log("Saldos após a transferência: ");
//imprimindo os saldos após a transferência
console.log("Saldo contaCorrente1 após transferência: " + contaCorrente1._saldo);
console.log("Saldo contaCorrente2 após transferência: " + contaCorrente2._saldo);

//--------------------------------------------------------------------
//Acessando o atributo cidade adicionado dinamicamente
console.log("--------------------------------------------------");
console.log("Acessando o atributo cidade adicionado dinamicamente à contaCorrente2");
console.log("Cidade da contaCorrente2: " + contaCorrente2.cidade);

//--------------------------------------------------------------------
//tenatndo atribuir um valor ao saldo diretamente (não recomendado)
console.log("--------------------------------------------------");
console.log("tenatndo atribuir um valor ao saldo diretamente");
//contaCorrente2.saldo = 1000000; //não recomendado
console.log("Saldo da contaCorrente1 após atribuição direta: " + contaCorrente2._saldo);

//--------------------------------------------------------------------
// imprimindo clientes com ajuda do construtor da classe Cliente
console.log("--------------------------------------------------");
console.log("Clientes criados com o construtor da classe Cliente:");
console.log("Cliente1: " + cliente1.nome + " - " + cliente1.cpf);
console.log("Cliente2: " + cliente2.nome + " - " + cliente2.cpf);

// imprimindo clientes com ajuda do construtor da classe Cliente
console.log("--------------------------------------------------");
console.log("Imprimir os objetos ContaCorrente:");
console.log(contaCorrente1);
console.log(contaCorrente2);


// imprimindo clientes com ajuda do construtor da classe Cliente
console.log("--------------------------------------------------");
console.log("Número de contas criadas: " + ContaCorrente.numeroDeContas);