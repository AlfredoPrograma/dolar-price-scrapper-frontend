import { useState } from "react";
import type { DollarPrice, Prices } from "../../types/interfaces"
import { getCurrentDate } from "../../utils/date";
import { capitalize } from "../../utils/strings";
import { CurrentPrice, Selector } from "./components";
import { dollarSourceOptions } from "./constants/options";

interface DollarPriceProps {
  dollarPrice: DollarPrice
}

const DollarPriceSection = ({ dollarPrice }: DollarPriceProps) => {
  const date = capitalize(getCurrentDate(new Date(dollarPrice.created_at)));
  const [dollarProvider, setSelectedDollarProvider] = useState<keyof Prices>("BCV")
  const handleChangeDollarProvider = (dollarProvider: keyof Prices) => setSelectedDollarProvider(dollarProvider) 

  const currentPrice = dollarPrice.prices[dollarProvider]

  return (
    <section className="text-center flex flex-col gap-2 mb-12">
      <span>{date}</span>
      <CurrentPrice price={currentPrice} />
      <Selector options={dollarSourceOptions} onChange={handleChangeDollarProvider} value={dollarProvider} />
    </section>
  )
}

export { DollarPriceSection }