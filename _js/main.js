//inserindo api da open exchange

$.get('https://openexchangerates.org/api/latest.json', { app_id:'[[app:9bd9fd71dd564af0b3e356a9d94127d8]]', base: 'BRL'}, function(data) {
    const rates = data.rates;
    Converter(rates);
});


//Dando funcao ao botao converter
function Converter(rates) {
    var valorElemento = document.getElementById("valor") //Pega a informacao do id valor dentro do html
    var valor = valorElemento.value; // .value pega o valor digitado
    var valorConverter = parseFloat(valor); //transforma o valor digitado em float
    
    var selecao = document.getElementById("selecao").value; //Pega a informacao e o valor do id selecao dentro do html
    var resultado = document.getElementById("resultado").value; //Pega a informacao e o valor do id resultado dentro do html

    // Cotacao do real em relaçao as demais moedas
if(selecao === "Dólar USA" && resultado === "Real"){
    valorEmReal = valorConverter / rates.USD;
    
}else if (selecao === "Euro" && resultado === "Real"){
    valorEmReal = valorConverter / rates.EUR;
    
 }else if (selecao === "Libra" && resultado === "Real"){
    valorEmReal = valorConverter /rates.GBP;
}
//Cotacao do dolar em relacao as demais moedas
else if(selecao === "Real" && resultado === "Dólar USA"){
    valorEmReal = valorConverter * rates.USD;
     
}else if (selecao === "Euro" && resultado === "Dólar USA"){
    valorEmReal = (valorConverter * rates.EUR) / rates.USD;
     
}else if (selecao === "Libra" && resultado === "Dólar USA"){
    valorEmReal = (valorConverter / rates.GBP)* rates.USD;
}
 //cotacao euro em relacao as demais moedas
else if(selecao === "Dólar USA" && resultado === "Euro"){
    valorEmReal = (valorConverter * rates.USD) / rates.EUR;
     
}else if (selecao === "Real" && resultado === "Euro"){
    valorEmReal = valorConverter / rates.EUR ;
     
}else if (selecao === "Libra" && resultado === "Euro"){
    valorEmReal = (valorConverter * rates.GBP) / rates.EUR ;
}
//cotacao da libra em relacao as demais moedas
else if(selecao === "Dólar USA" && resultado === "Libra"){
    valorEmReal = (valorConverter * rates.USD) /rates.GBP;
     
}else if (selecao === "Real" && resultado === "Libra"){
    valorEmReal = valorConverter / rates.GBP;
     
}else if (selecao === "Euro" && resultado === "Libra"){
     valorEmReal = (valorConverter * rates.EUR) * rates.GBP;     }

//Pegando os valores e convertendo
var elementoValorConvertido=document.getElementById("valorConvertido");//pega a informacao do id ValorConvertido
var valorConvertido = valorEmReal; //indica o resultado da conversao
elementoValorConvertido.value = valorConvertido //preecnhe o campo do id valorConvertido com o resultado

}