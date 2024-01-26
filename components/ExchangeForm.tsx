import { useState } from "react"

type Props = {
  currencies: string[]
  onExchange: (amount: number, fromCurrency: string, toCurrency: string) => void
}

export default function ExchangeForm({ currencies, onExchange }: Props) {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState(currencies[0])
  const [toCurrency, setToCurrency] = useState(currencies[1])

  return (
    <>
      <input
        className="w-full h-10 mb-4 pr-4 text-slate-800 text-right rounded-md"
        type="number"
        min="1"
        value={amount}
        onChange={(e) =>
          Number(e.target.value) > 0
            ? setAmount(Number(e.target.value))
            : setAmount(1)
        }
      />
      <div className="flex justify-end items-center mb-4 text-slate-800">
        <span className="text-slate-100">from:</span>
        <select
          className="mx-4 pl-2 w-20 h-10 rounded-md"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency: string) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="text-slate-100">to:</span>
        <select
          className="ml-4 pl-2 w-20 h-10 rounded-md"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency: string) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button
        className="w-full h-10 bg-orange-500 rounded-md"
        onClick={() => onExchange(amount, fromCurrency, toCurrency)}
      >
        Exchange
      </button>
    </>
  )
}
