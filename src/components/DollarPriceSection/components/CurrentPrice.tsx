interface CurrentPriceProps {
  price: number
}

const CurrentPrice = ({ price }: CurrentPriceProps) => {
  const truncatedPrice = price.toFixed(2)
  
  return (
    <h1 className="text-6xl font-bold">Bs. {truncatedPrice}</h1>
  )
}

export { CurrentPrice }