import type { DollarPrice } from "../types/interfaces"

const API_URL = import.meta.env.PUBLIC_DOLLAR_PRICES_API_URL

const getDollarPrices = async (): Promise<DollarPrice[]> => {
  const response = await fetch(API_URL)
  const data = await response.json() as DollarPrice[]

  return data
}

export { getDollarPrices }