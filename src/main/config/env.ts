import 'dotenv/config'

export const env = {
    global:{
        nodeEnv: process.env.NODE_ENV || 'development',
        secret: process.env.SECRET_KEY || 'secret'
    },
    crawler:{
        crawlerInterval: Number(process.env.CRAWLER_INTERVAL) || 3000,
        profit: process.env.PROFITABILITY || '1.1'
    },
    api:{
        url: process.env.API_URL  || 'http://localhost:5050',
        key: process.env.API_KEY  || 'any-key'
    }
}