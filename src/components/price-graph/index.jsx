import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { useGoldPriceHistoryQuery } from '../../services/nbp/useGoldPriceQuery'
export const PriceGraph = () => {
  const { data } = useGoldPriceHistoryQuery()
  const yOffset = data ? Math.min(...data.map((item) => item.value)) - 20 : 200
  return data && <LineChart
    data={data}
    adjustToWidth
    width={Dimensions.get('window').width - 65}
    height={Dimensions.get('window').height - 550}
    hideDataPoints
    initialSpacing={0}
    thickness={1}
    xAxisColor={'gray'}
    yAxisColor={'gray'}
    yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
    yAxisOffset={yOffset}
    color='gray'
  />
}

export default PriceGraph
