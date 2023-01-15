export interface SelectOption {
  value: number
  text: string
}

export interface DollarPrice {
  id:         string;
  prices:     Prices;
  created_at: string;
}

export interface Prices {
  BCV:               number;
  EnParaleloVzla:    number;
  DolarToday:        number;
  MonitorDolar:      number;
  EnParaleloVzlaVip: number;
  Binance:           number;
}

export type DollarProvider = keyof Prices