const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'

setInterval(() =>{  
fetch(url)
.then(resolv => resolv.json())
.then(result =>{
    const data = result 

    const {BTCBRL,EURBRL,USDBRL } = data
    const{bid} = BTCBRL 
     let dataMoeda = [] 
     dataMoeda = [BTCBRL,EURBRL, USDBRL]

     const valueMoeda = dataMoeda.map(moeda => {
           const moedinha = moeda.bid
           return moedinha
     })
     
        /*console.log(dataMoeda)
        console.log(valueMoeda)*/ 
    
    buyDolar.innerHTML = valueMoeda[2]
    buyEuro.innerHTML = valueMoeda[1]
    buyBitcoin.innerHTML = valueMoeda[0]

})
},1000)

setInterval(() => {
     const data = new Date(); 
     
     const hora = data.getHours();
     const min = data.getMinutes();
     const seg = data.getSeconds(); 

    /* console.log(hora,min, seg)*/

     hours.innerHTML = hora; 
     minute.innerHTML =min; 
     seconds.innerHTML =seg;

},1000)