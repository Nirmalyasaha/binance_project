interface Coin {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
  }


  /////
  interface ExchangeData{
    exchangeId: string
  name: string
  rank: string
  percentTotalVolume: string
  volumeUsd: string
  tradingPairs: string
  socket: boolean
  exchangeUrl: string
  updated: number
}


