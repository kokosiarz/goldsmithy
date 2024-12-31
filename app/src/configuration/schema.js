export const schema = [
  {
    key: 'spreadLow',
    type: 'number',
    default: 20
  },
  {
    key: 'spreadHigh',
    type: 'number',
    default: 30
  },
  {
    key: 'displayNominalPrice',
    type: 'switch',
    default: false
  },
  {
    key: 'caratages',
    type: 'multiple-choice',
    options: ['.333', '.375', '.500', '.585', '.750', '.960', '.999'],
    default: ['.333', '.375', '.585', '.750', '.999']
  }
//   {
//     key: 'currency',
//     type: 'select-list',
//     options: ['PLN', 'EUR', 'USD'],
//     default: 'PLN'
//   }
]

export default schema
