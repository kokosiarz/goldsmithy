import { GoldPrice } from './src/components/price-table'
import PriceGraph from './src/components/price-graph'
// import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import {
  QueryClient
} from '@tanstack/react-query'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

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

const Drawer = createDrawerNavigator()

export default function App () {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Table" component={GoldPrice}/>
          <Drawer.Screen name="Graph" component={PriceGraph}/>
          {/* <KeyboardAvoidingView style={styles.container}>
            <GoldPrice />
          </KeyboardAvoidingView> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </PersistQueryClientProvider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     height: '100%',
//     width: '100%',
//     justifyContent: 'space-around'
//   }
// })
