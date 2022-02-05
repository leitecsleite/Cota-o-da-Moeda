const elementEnviar = document.getElementById('formExchange')

elementEnviar.addEventListener('submit', (event) => {
   event.preventDefault();

   let formExchange = document.getElementById('formExchange').elements
   if (formExchange['moeda'].value == 'valueDolar') {
      const moedaCompraDolar = document.getElementById('tableBuyDolar')
      const valueInput = document.getElementById('valueMoeda')

      const result = ((((parseFloat((valueInput.value))) /
         (parseFloat(moedaCompraDolar.textContent))).toFixed(2)).toString()).replace('.', ',');
         if (result == 'NaN') {
            alert('Dados inválido, digite número de 1 a 10 e caracter ".", ","')
         } else {
            getValue.textContent = `US$ ${result}`;
         }

   }

   if (formExchange['moeda'].value == 'valueEuro') {
      const moedaCompraEuro = document.getElementById('tableBuyEuro');
      const valueInput = document.getElementById('valueMoeda')

      const result = ((((parseFloat((valueInput.value).replace(',', '.'))) /
         (parseFloat(moedaCompraEuro.textContent))).toFixed(2)).toString()).replace('.', ',');

      if (result == 'NaN') {
         alert('Dados inválido, digite número de 1 a 10 e caracter ".", ","')
      } else {
         getValue.textContent = `EUR ${result}`;
      }



   }

   if (formExchange['moeda'].value == 'valueBitcoin') {
      const moedaCompraBitcoin = document.getElementById('tableBuyBitcoin');
      const valueInput = document.getElementById('valueMoeda')

      const result = ((((parseFloat((valueInput.value).replace(',', '.'))) /
         (parseFloat((moedaCompraBitcoin.textContent).replace('.', '')))).toFixed(6)).toString()).replace('.', ',')

      if (result == 'NaN') {
         alert('Dados inválido, digite número de 1 a 10 e caracter ".", ","')
      } else {
         getValue.textContent = `₿ ${result}`;
      }


   }
})