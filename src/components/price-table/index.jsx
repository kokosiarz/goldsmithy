import { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import { View } from 'react-native'
import { DataTable, Text } from 'react-native-paper'
import useGoldPriceQuery from '../../services/nbp/useGoldPriceQuery'
import config from '../../configuration/config'
import styles from './styles'

const [spreadLow, spreadHigh] = [config.defaults.spread.low, config.defaults.spread.high]

export const GoldPrice = () => {
  const [amount, setAmount] = useState(1)
  const { isPending, error, data } = useGoldPriceQuery()
  return (data && <View style={styles.container}>
        <Text variant="headlineLarge" style={{ padding: 10 }}>Au</Text>
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
        <View style={styles.info}>
          <Text variant="labelSmall">Dane pobrano: {data.data}</Text>
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.label}> Ile gramów:</Text>
          <NumericInput onChange={value => setAmount(value)} valueType='real' totalHeight={42} minValue={0} initValue={amount} />
        </View>
      {error && <Text>Problem w trakcie pobierania danych...</Text>}
      {isPending && <Text>pobiram dane...</Text>}
    </View>
  )
}

export default GoldPrice
