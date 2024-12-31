const content = {
  common: {
    apiError: 'Błąd pobierania danych',
    apiFetch: 'Pobieranie danych...',
    save: 'Zapisz',
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
        amount: 'Ile gramów',
      },
    },
    graph: {
      name: 'Wykres',
    },
    settings: {
      name: 'Ustawienia',
      content: {
        displayNominalPrice: 'Wyświetlaj cenę nominalną',
        spreadLow: 'Marża skupu [%]',
        spreadHigh: 'Marża sprzedaży [%]',
        caratages: 'Próby',
        currency: 'Waluta',
      },
    },
  },
}

export const common = content.common
export const priceTable = content.screens.prices.content
export const settings = content.screens.settings.content
export default content
