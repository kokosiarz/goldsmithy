import { GoldPrice } from './src/components/price-table'
// import PriceGraph from './src/components/price-graph'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
          {/* <PriceGraph /> */}
          <GoldPrice />
      </View>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // paddingTop: 150,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  }
})
