export function currencyBRLString(value: number) {
  return value.toFixed(2).replace('.', ',');
}
