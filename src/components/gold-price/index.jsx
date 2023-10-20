import { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import { StyleSheet, View } from 'react-native'
import { DataTable, Text } from 'react-native-paper'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import config from '../../../configuration/config'

const goldPriceApiUrl = config.urls.npbGoldPriceApi
const [spreadLow, spreadHigh] = [config.defaults.spread.low, config.defaults.spread.high]

export const GoldPrice = () => {
  const [amount, setAmount] = useState(1)
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get(goldPriceApiUrl)
        .then((res) => res.data[0])
  })

  return (
    <View>
      <Text variant="headlineMedium" style={{padding: 10}}>Au</Text>
      {data && <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              PRÓBA
            </DataTable.Title>
            <DataTable.Title>
              SKUP
            </DataTable.Title>
            <DataTable.Title>
              NBP
            </DataTable.Title>
            <DataTable.Title>
              SPRZEDAŻ
            </DataTable.Title>
          </DataTable.Header>
          {config.constants.caratages.map((caratage) => <DataTable.Row key={caratage.name}>
            <DataTable.Cell>{caratage.name}</DataTable.Cell>
            <DataTable.Cell>{Math.round(caratage.value * amount * data.cena * (1 - spreadLow))}</DataTable.Cell>
            <DataTable.Cell>{Math.round(caratage.value * amount * data.cena)}</DataTable.Cell>
            <DataTable.Cell>{Math.round(caratage.value * amount * data.cena * (1 + spreadHigh))}</DataTable.Cell>
          </DataTable.Row>)}
        </DataTable>
        <Text variant="labelSmall">Dane pobrano: {data.data}</Text>
        <View style={styles.inputSection}>
          <NumericInput onChange={value => setAmount(value)} valueType='real' totalHeight={35} minValue={0} initValue={amount} />
          <Text style={styles.label}> gramów</Text>
        </View>
      </View>}
      {error && <Text>Problem w trakcie pobierania danych...</Text>}
      {isPending && <Text>pobiram dane...</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row'
  },
  inputSection: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 15
  },
  label: {
    padding: 5
  }
})

export default GoldPrice
