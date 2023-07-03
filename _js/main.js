$.ajax({
    type: "GET",
    dataType: "JSON",
    url: "https://economia.awesomeapi.com.br/json/all",
    success: function (data) {
      resultado = data;
      console.log(data)
    },
    error: function (data) {
      alert('Erro! O site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
    }
  });

  
  
  function Converter() {
    var valorElemento = document.getElementById("valor").value;
    var valorConverter = parseFloat(valorElemento);
    var selecao = document.getElementById("selecao").value;
    var convertido = document.getElementById("convertido").value;
  
    if (resultado) {
      var dolar = resultado["USD"]["bid"];
      var euro = resultado["EUR"]["bid"];
      var libra = resultado["GBP"]["bid"];
  
      var valorReal; // Declaração da variável valorReal
  
      //Real
      if (selecao === "Dólar USA" && convertido === "Real") {
        valorReal = valorConverter / dolar;
      } else if (selecao === "Euro" && convertido === "Real") {
        valorReal = valorConverter * euro;
      } else if (selecao === "Libra" && convertido === "Real") {
        valorReal = valorConverter * libra;
      } else if (selecao === "Real" && convertido === "Real"){
            valorReal = valorConverter;
      
    //Dolar
      } else if (selecao === "Real" && convertido === "Dólar USA") {
        valorReal = valorConverter * dolar;
      } else if (selecao === "Euro" && convertido === "Dólar USA") {
        valorReal = (valorConverter * euro) / dolar;
      } else if (selecao === "Libra" && convertido === "Dólar USA") {
        valorReal = (valorConverter * libra) / dolar;
     } else if (selecao === "Dólar USA" && convertido === "Dólar USA"){
        valorReal = valorConverter;
  
    //Euro
      } else if (selecao === "Dólar USA" && convertido === "Euro") {
        valorReal = (valorConverter * dolar) / euro;
      } else if (selecao === "Real" && convertido === "Euro") {
        valorReal = valorConverter / euro;
      } else if (selecao === "Libra" && convertido === "Euro") {
        valorReal = (valorConverter * libra) / euro;
    } else if (selecao === "Euro" && convertido === "Euro"){
        valorReal = valorConverter;
  
    //Libra
      } else if (selecao === "Dólar USA" && convertido === "Libra") {
        valorReal = (valorConverter * dolar) / libra;
      } else if (selecao === "Real" && convertido === "Libra") {
        valorReal = valorConverter / libra;
      } else if (selecao === "Euro" && convertido === "Libra") {
        valorReal = (valorConverter / libra) * euro;
      }
    } else if (selecao === "Libra" && convertido === "Libra"){
        valorReal = valorConverter;
    }
      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido = valorReal.toFixed(2);
      elementoValorConvertido.value = valorConvertido;
} 

    // Adicione os eventos onchange nos elementos do formulário
    
    document.getElementById("valor").onchange;
    document.getElementById("selecao").onchange ;
    document.getElementById("convertido").onchange ;