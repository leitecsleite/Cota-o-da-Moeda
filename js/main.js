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
                const moedinha = (moeda.bid).replace('.', ',')
                return moedinha
            })

            const valueAsk = dataMoeda.map(moeda => {
                const moedaSell = (moeda.ask).replace('.', ',')
                return moedaSell
            })


            buyDolar.innerHTML = ((parseFloat((valueMoeda[2]).replace(',', '.')).
            toFixed(2)).toString()).replace('.', ',');
            buyEuro.innerHTML = ((parseFloat((valueMoeda[1]).replace(',', '.')).
            toFixed(2)).toString()).replace('.', ',');
            buyBitcoin.innerHTML = ((valueMoeda[0]).replace(',', '.'));


            tableBuyDolar.textContent = ((parseFloat((valueMoeda[2]).replace(',', '.')).
            toFixed(2)).toString()).replace('.', ',');
            tableBuyEuro.textContent = ((parseFloat((valueMoeda[1]).replace(',', '.')).
            toFixed(2)).toString()).replace('.', ',');
            tableBuyBitcoin.textContent = ((valueMoeda[0]).replace(',', '.'));

            tableSellDolar.textContent = valueAsk[2];
            tableSellEuro.textContent = valueAsk[1];
            tableSellBitcoin.textContent = (valueAsk[0]).replace(',', '.');

        })
}, 1000)

