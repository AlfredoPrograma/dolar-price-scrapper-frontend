import { Listbox } from "@headlessui/react";
import { useState } from "react";
import type { SelectOption } from "../../types/interfaces";

const options: SelectOption[] = [
  {
    value: 1,
    text: "BCV",
  },
  {
    value: 2,
    text: "EnParaleloVzla"
  },
  {
    value: 3,
    text: "DolarToday"
  },
  {
    value: 4,
    text: "MonitorDolar"
  },
  {
    value: 5,
    text: "Binance"
  }
]

const DollarSourceSelector = () => {
  const [source, setSource] = useState<SelectOption>(options[0])

  return(
    <div className="relative">
    <Listbox value={source} onChange={setSource}>
      <Listbox.Button className="w-52 py-1 bg-white text-slate-800 rounded-sm shadow-sm">{source.text}</Listbox.Button>
      <Listbox.Options className="absolute mt-1 w-full">
        {options.map(option => (
          <Listbox.Option key={option.value} value={option}>
            {option.text}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
    </div>

  )
}

export { DollarSourceSelector }