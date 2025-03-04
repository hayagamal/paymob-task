import { DataTypes } from "./tableConfigs";


export function formatAmountToEGP(amountInCents: number): string {
  return `${(amountInCents / 100).toFixed(2)}`;
}

export function formatDate(value: string): string {
  return new Date(value).toDateString();
}

export function getFormatter(type: string, row?: Record<string, any>) {
  switch (type) {
    case DataTypes.DATE:
      return formatDate;
    case DataTypes.NUMBER:
      return row?.currency && currencyFormatterFactory(row?.currency);
    default:
      return (value: any) => value;
  }
}

export function currencyFormatterFactory(currency: string) {
  return function formatAmount(amountInCents: number) {
    // here we can add formatters for more currencies specific cents conversions in the futures if required
    switch (currency) {
      case "EGP":
        return formatAmountToEGP(amountInCents);
      default:
        return `${amountInCents}`;
    }
  };
}
