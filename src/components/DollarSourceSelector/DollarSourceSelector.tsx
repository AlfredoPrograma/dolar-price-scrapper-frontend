import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import type { SelectOption } from "../../types/interfaces";

interface DollarSourceSelectorProps {
  options: SelectOption[]
}

const DollarSourceSelector = ({ options }: DollarSourceSelectorProps) => {
  const [source, setSource] = useState<SelectOption>(options[0])

  return(
    <div className="relative w-52 mx-auto">
    <Listbox value={source} onChange={setSource}>
      <Listbox.Button className="py-1 w-full bg-white text-slate-800 rounded-md shadow-sm">{source.text}</Listbox.Button>

      <Transition
        as={Fragment}
        enter="transition ease-in duration-100"
        enterFrom="opacity-30"
        enterTo="opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute mt-2 w-full text-slate-800 rounded-md shadow-sm overflow-hidden">
          {options.map(option => (
            <Listbox.Option key={option.value} value={option}>
              {({ active, selected }) => (
                <li className={`${selected ? "bg-slate-600 text-white" : "bg-white"} py-1`}>
                  {option.text}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
    </div>

  )
}

export { DollarSourceSelector }