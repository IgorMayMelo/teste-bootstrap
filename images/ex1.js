// Lista de exercícios de Javascript

/* 1 - Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”. (leNo entanto é preciso imprimir usando concatenação e interpolação mbre desses conceitos em C# e aplique em JS, pesquisando a diferença). Dica: Use a funcionalidade de prompt() para perguntar para o usuário esses valores e faça o JS rodar dentro do HTML como ensinado em sala */

/* 2 - Imprima a idade de uma pessoa com base no ano atual e no ano de nascimento dela */

/* 3 - Calcule a média simples de 3 números */

/* 4 - Calcule a média ponderada de 3 números */

/* 5 - Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total. */

/* 6 - Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

/* 7 - Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade. */

/* 8 - Crie um sistema que verifica se um ano é bissexto (dica: Não é só verificar se é múltiplo de 4) */

/* 9 - Crie um loop que imprima os números de 1 a 100 */

/* 10 - Crie um loop que imprima a soma de todos os números de 0 a 100. */

/* 11 - Crie um  loop que imprima o fatorial de 100 */

/* 12 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. */  

/* 13 - Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50. */



// 1 parte
let nome = prompt('Coloque seu nome');
let idade = prompt('Coloque sua idade');

const texto = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`
console.log(texto);

let ano = prompt('Digite seu ano de nascimento');
idade = 2024 - ano





console.log(`Sua idade é de ${idade} anos`);





let numero1 = (10);
let numero2 = (5);
let numero3 = (8);
media = (numero1 + numero2 + numero3) / 3;
console.log(`A média das suas notas foi de ${media} pontos`)





let x1 = 1500
let x2 = 4600
let x3 = 2800
let x4 = 3200

let p1 = 3
let p2 = 6
let p3 = 5
let p4 = 10

const media = p1*x1 + p2*x2 + p3*x3 + p4*x4 / p1+p2+p3+p4;

console.log(`A sua média ponderada foi de ${media}`)







let metros = prompt('Digite quantos metros quadrados de tinta você quer')
let litros = metros * 3
let lata = litros * 18 / 3
 
console.log(`${lata} latas de tinta vão custar reais`)  





let periodo = prompt('Digite seu turno: Noturno, Vespertino ou Matutino')

if (periodo == 'Matutino') {
    console.log('Bom Dia!')
}
else if (periodo == 'Vespertino'){
    console.log('Boa Tarde!')
}
else if (periodo == 'Noturno'){
    console.log('Boa Noite!')
}
else {
    console.log('Valor Inválido, recarregue a página e escreva novamente')
}






let idade = prompt('Digite sua idade')
if (idade >= 18) {
    console.log('Você é maior de idade')
}
else if (idade < 18) {
console.log('Você é menor de idade')
}
else {
    console.log('Valor invalido')
}





let ano = prompt('digite um ano')

if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    console.log('O ano é bissexto')
}
else {
    console.log('O ano não é bissexto')
}





for (let i = 0; i<=100 ; i++) {
    console.log(i)
}






let soma = 0;
for (let i = 0; i<= 100; i++){
    soma += i;
    console.log(soma)
}





function fatorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(100));






function refazer(){
let nome = prompt('Coloque seu nome')
let senha = prompt('Coloque sua senha')

while (senha === nome){
    console.log('A senha não pode ser igual ao nome')
    
    let nome = prompt('Coloque seu nome')
    let senha = prompt('Coloque sua senha')
break
}

console.log('Entrou com sucesso')
}
refazer();






for (let numero = 1; numero <= 50; numero++) {
    if (numero % 2 !== 0) {
        console.log(numero);
    }
}
