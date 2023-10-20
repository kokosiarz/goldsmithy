import { GoldPrice } from './src/components/gold-price'
import { StyleSheet, View } from 'react-native'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <View>
          <GoldPrice />
        </View>
      </View>
    </QueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff'
  }
})
