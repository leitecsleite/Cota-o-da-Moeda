const elementEnviar = document.getElementById('formExchange')

elementEnviar.addEventListener( 'submit', (event) =>{
     event.preventDefault(); 
     
     let formExchange = document.getElementById('formExchange').elements
     if(formExchange['moeda'].value == 'valueDolar'){
        const moedaCompraDolar = document.getElementById('tableBuyDolar')
        const valueInput = document.getElementById('valueMoeda')

        const result = ((((parseFloat((valueInput.value).replace(',' , '.'))) /
        (parseFloat(moedaCompraDolar.textContent))).toFixed(2)).toString()).replace('.',',');
      
        getValue.textContent = `US$ ${result}`; 

     }

     if(formExchange['moeda'].value == 'valueEuro'){
         const moedaCompraEuro = document.getElementById('tableBuyEuro'); 
         const valueInput = document.getElementById('valueMoeda')

         const result =((((parseFloat((valueInput.value).replace(',' , '.'))) / 
         (parseFloat(moedaCompraEuro.textContent))).toFixed(2)).toString()).replace('.',',');
         
         getValue.textContent = `EUR ${result}`; 
     }

     if(formExchange['moeda'].value == 'valueBitcoin'){
        const moedaCompraBitcoin = document.getElementById('tableBuyBitcoin'); 
        const valueInput = document.getElementById('valueMoeda')

        const result =((((parseFloat((valueInput.value).replace(',' , '.'))) /
        (parseFloat((moedaCompraBitcoin.textContent).replace('.' ,'')))).toFixed(6)).toString()).replace('.',',')
        
        getValue.textContent = `₿ ${result}`; 
     }
} )