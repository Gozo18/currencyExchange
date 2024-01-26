"use client"

import React, { useState } from "react"
import ExchangeForm from "../components/ExchangeForm"
import getExchangeRate from "../services/exchangeService"

export default function Home() {
  const [result, setResult] = useState<number | null>(null)
  const [currency, setCurrency] = useState<string | null>(null)
  const currencies = ["USD", "EUR", "GBP", "CZK", "PLN"]

  const handleExchange = async (
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency)
    const result: number = Math.round(amount * exchangeRate * 100) / 100
    setCurrency(toCurrency)
    setResult(result)
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-100">
      <div className="relative p-8 w-80 sm:w-96 rounded-md bg-slate-800 text-slate-100">
        <h1 className="text-xl text-center mb-4">Currency Exchange</h1>
        <ExchangeForm currencies={currencies} onExchange={handleExchange} />
        <p className="text-lg text-center mt-4">
          Result:{" "}
          {result && (
            <>
              {result} {currency}{" "}
            </>
          )}
        </p>
        {/* <div className="absolute bottom-2 right-8 text-xs">Roman Jelínek</div> */}
      </div>
    </div>
  )
}
