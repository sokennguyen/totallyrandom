const crypto_api = async () => { 
  const randomCoinId = Math.floor(Math.random() * 199)
  const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${randomCoinId}`)
  return response.json().then(res => res[0].name + ' is currently '+ res[0].price_usd + ' USD')
}

export default crypto_api

