const content = {
  common: {
    apiError: 'Błąd pobierania danych',
    apiFetch: 'Pobieranie danych...'
  },
  screens: {
    prices: {
      name: 'Skup/Sprzedaż',
      content: {
        caratage: 'PRÓBA',
        buy: 'SKUP',
        nbp: 'NBP',
        sell: 'SPRZEDAŻ',
        date: 'Dane pobrano',
        amount: 'Ile gramów'
      }
    },
    graph: {
      name: 'Wykres'
    },
    settings: {
      name: 'Ustawienia'
    }
  }
}

export const common = content.common
export const priceTable = content.screens.prices.content
export default content
