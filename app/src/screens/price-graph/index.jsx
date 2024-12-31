import { Dimensions, View, SafeAreaView } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { Text } from 'react-native-paper'
import { common } from '../../content'
import ScreenWrapper from '../../components/screen-wrapper'
import { useGoldPriceHistoryQuery } from '../../hooks/useGoldPriceQuery'
import ScreenTitle from '../../components/screen-title'
export const PriceGraph = () => {
  const { isPending, error, data } = useGoldPriceHistoryQuery()
  const yOffset = data ? Math.min(...data.map((item) => item.value)) - 20 : 200
  return <ScreenWrapper>
      {data && <SafeAreaView >
        <ScreenTitle text='Au' />
        <View style={{ padding: 10 }}>
          <LineChart
            data={data}
            adjustToWidth
            width={Dimensions.get('window').width - 90}
            hideDataPoints
            initialSpacing={0}
            thickness={1}
            xAxisColor={'gray'}
            yAxisColor={'gray'}
            yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
            yAxisOffset={yOffset}
            color='gray'
          />
        </View>
    </SafeAreaView >}
    {error && <Text>{common.apiError}</Text>}
    {isPending && <Text>{common.apiFetch}</Text>}
  </ScreenWrapper>
}

export default PriceGraph
