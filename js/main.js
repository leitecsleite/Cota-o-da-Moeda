const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'

/* moeda */

setInterval(() => {
    fetch(url)
        .then(resolv => resolv.json())
        .then(result => {
            const data = result

            const { BTCBRL, EURBRL, USDBRL } = data
            const { bid } = BTCBRL
            let dataMoeda = []
            dataMoeda = [BTCBRL, EURBRL, USDBRL]

            const valueMoeda = dataMoeda.map(moeda => {
                const moedinha = (parseFloat(moeda.bid)).toFixed(2)
                return moedinha
            })

            const valueAsk = dataMoeda.map(moeda => {
                const moedaSell = (parseFloat(moeda.ask)).toFixed(2)
                return moedaSell 
            })
             
            
            /*console.log(dataMoeda)
             console.log(valueMoeda)*/

            buyDolar.innerHTML = valueMoeda[2]
            buyEuro.innerHTML = valueMoeda[1]
            buyBitcoin.innerHTML = valueMoeda[0]
        

            tableBuyDolar.textContent = valueMoeda[2]
            tableBuyEuro.textContent = valueMoeda[1]
            tableBuyBitcoin.textContent = valueMoeda[0]

            tableSellDolar.textContent = valueAsk[2]
            tableSellEuro.textContent = valueAsk[1]
            tableSellBitcoin.textContent = valueAsk[0]

        })
}, 1000)

/* Relogio */

setInterval(() => {
    const data = new Date();

    const hora = data.getHours();
    const min = data.getMinutes();
     let seg = data.getSeconds();


    const valueSeconds = parseInt(seconds.textContent);
    const valueMinutes = parseInt(minute.textContent);
    const valueHour = parseInt(hours.textContent)
 
    if (valueSeconds < 9 || valueSeconds == 59) {
        seconds.innerHTML = `0${seg}`;
        
    } else {
        seconds.innerHTML = seg 
    }

    if (valueMinutes < 9 || valueMinutes == 56) {
        minute.innerHTML = `0${min}`;
    } else {
        minute.innerHTML = min;
    }

    if (valueHour < 9||  valueHour == 23) {
        hours.innerHTML = `0${hora}`;
    } else {
        hours.innerHTML = hora;
    }

}, 1000)