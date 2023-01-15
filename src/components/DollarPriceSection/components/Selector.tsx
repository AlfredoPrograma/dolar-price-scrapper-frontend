import { Listbox, Transition } from "@headlessui/react";
import type { DollarProvider } from '../../../types/interfaces'

interface SelectorProps {
  value: DollarProvider
  onChange: (dollarProvider: DollarProvider) => void
  options: DollarProvider[]
}

const Selector = ({ options, value, onChange }: SelectorProps) => {
  return(
    <div className="relative w-52 mx-auto">
      <span className="italic font-mono text-sm">Basado en:</span>
      <Listbox value={value} onChange={onChange}>
        {({ open}) => (
          <>
            <Listbox.Button className="py-2 px-4 w-full bg-white text-slate-800 rounded-md shadow-md border-2 border-gray-800 flex justify-between items-center">
              <span>{value}</span>
              <i className={`fa-solid fa-chevron-down ${open ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}></i>
            </Listbox.Button>

            <Transition
              as={"div"}
              enter="transition ease-in duration-100"
              enterFrom="opacity-30"
              enterTo="opacity-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-2 w-full text-slate-800 rounded-md border-2 border-gray-800 shadow-md overflow-hidden">
                {options.map(option => (
                  <Listbox.Option key={option} value={option}>
                    {({ active, selected }) => (
                      <li className={`${selected ? "bg-gray-800 text-white border-2 border-gray-800" : "bg-white border-transparent hover:bg-slate-200 hover:opacity-100"} py-2 border-2  px-4 text-left cursor-pointer`}>
                        {option}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            </>
        )}
      </Listbox>
    </div>

  )
}

export { Selector }