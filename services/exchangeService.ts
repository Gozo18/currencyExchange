import axios from "axios"

const getExchangeRate = async (fromCurrency: string, toCurrency: string) => {
  const response = await axios.get(
    `https://open.er-api.com/v6/latest/${fromCurrency}`
  )
  const rates = response.data.rates
  const exchangeRate = rates[toCurrency]
  return exchangeRate
}

export default getExchangeRate
