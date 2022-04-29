const api = require('./api');

setInterval(async () => {
    const result = await api.depth();

    const buy = parseInt(result.bids[0][0]);
    const sell = parseInt(result.asks[0][0]);

    const ordemDeCompras = {
        compras: result.bids,
        vendas:result.asks
    }

    console.clear();
    console.log("Ordem de compras - Binance - Jordansbot");
    console.log(ordemDeCompras);

    
},process.env.CRAWLER_INTERVAL)

