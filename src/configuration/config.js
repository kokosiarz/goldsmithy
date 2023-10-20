export const config = {
  defaults: {
    spread: {
      low: 0.2,
      high: 0.3
    }
  },
  constants: {
    caratages: [
      {
        name: '.999',
        value: 1
      },
      {
        name: '.750',
        value: 0.585
      },
      {
        name: '.585',
        value: 0.585
      },
      {
        name: '.333',
        value: 0.333
      }
    ]
  },
  urls: {
    npbGoldPriceApi: 'http://api.nbp.pl/api/cenyzlota'
  }
}

export default config
