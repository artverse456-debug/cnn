export const formatCurrency = (value: number, currency = 'EUR') =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency, minimumFractionDigits: 2 }).format(value);

export const formatDate = (isoDate: string) =>
  new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(isoDate));

export const calculateProgress = (current: number, target: number) => Math.min(100, Math.round((current / target) * 100));
