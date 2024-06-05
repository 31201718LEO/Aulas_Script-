// Blocos de Variávies Locais e Globais

let num1 = 100;  //Variável Global * por estar fora dos blocos
{
    let num2 = 30; //   Variável local * está dentro do bloco 
    console.log(num1);
    console.log(num2);
    {
        console.log(num2);
    }
}
console.log(num1);
//console.log(num2);
