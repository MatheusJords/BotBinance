import { DepthModel } from './../domain/model/depth';
import { HttpAdapter } from '../infra/adapter/http-adapter';
import { env } from './config/env';

setInterval(async () => {

    const http = new HttpAdapter()

    const binenceApiTime = await http.get({ path:'/v3/time' })
    const binenceApiDepth = await http.get<DepthModel>({ path:'/v3/depth?symbol=BTCBRL&limit=5' })

    const orders = {
        buys: binenceApiDepth.bids,
        sells: binenceApiDepth.asks
    }

    console.info(`Orders - Binance - JordansBot`)
    console.info(orders)
    
},env.crawler.crawlerInterval)