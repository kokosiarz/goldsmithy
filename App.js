import { GoldPrice } from './src/components/price-table'
// import PriceGraph from './src/components/price-graph'
import { StyleSheet, View } from 'react-native'
import {
  QueryClient
} from '@tanstack/react-query'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24 // 24 hours
    }
  }
})

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage
})

export default function App () {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <View style={styles.container}>
        {/* <PriceGraph /> */}
        <GoldPrice />
      </View>
    </PersistQueryClientProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  }
})
