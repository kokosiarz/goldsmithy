import { useState, useContext } from 'react'
import NumericInput from 'react-native-numeric-input'
import { View, SafeAreaView } from 'react-native'
import { DataTable, Text } from 'react-native-paper'
import { SettingsContext } from '../../contexts/settings'
import { priceTable as content, common } from '../../content'
import ScreenTitle from '../../components/screen-title'
import ScreenWrapper from '../../components/screen-wrapper'
import useGoldPriceQuery from '../../hooks/useGoldPriceQuery'
import config from '../../configuration/config'
import styles from './styles'
import caratageNameToValue from '../../mappers/caratageNameToValue'

export const GoldPrice = () => {
  const [amount, setAmount] = useState(1)
  const [settings, _] = useContext(SettingsContext)
  const { isPending, error, data } = useGoldPriceQuery()
  console.log("settings", settings);
  return (<ScreenWrapper>
    {data && <SafeAreaView >
        <ScreenTitle text='Au'/>

        <DataTable>

          <DataTable.Header>
            <DataTable.Title>
              {content.caratage}
            </DataTable.Title>
            <DataTable.Title>
              {content.buy}
            </DataTable.Title>
            {settings.displayNominalPrice && <DataTable.Title>
              {content.nbp}
            </DataTable.Title>}
            <DataTable.Title>
              {content.sell}
            </DataTable.Title>
          </DataTable.Header>

          {settings.caratages && settings.caratages.map((caratage) => <DataTable.Row key={caratage}>
            <DataTable.Cell>
              {caratage}
            </DataTable.Cell>
            <DataTable.Cell>
              {Math.round(caratageNameToValue(caratage) * amount * data.cena * (1 - settings.spreadLow / 100))}
            </DataTable.Cell>
            {settings.displayNominalPrice && <DataTable.Cell>
              {Math.round(caratageNameToValue(caratage) * amount * data.cena)}
            </DataTable.Cell>}
            <DataTable.Cell>
              {Math.round(caratageNameToValue(caratage) * amount * data.cena * (1 + settings.spreadHigh / 100))}
            </DataTable.Cell>
          </DataTable.Row>)}

        </DataTable>

        <View style={styles.info}>
          <Text variant="labelSmall">{content.date}: {data.data}</Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}> {content.amount}:</Text>
          <NumericInput onChange={value => setAmount(value)} valueType='real' totalHeight={42} minValue={0} initValue={amount} />
        </View>

      </SafeAreaView >}
      {error && <Text>{common.apiError}</Text>}
      {isPending && <Text>{common.apiFetch}</Text>}
    </ScreenWrapper>
  )
}

export default GoldPrice
