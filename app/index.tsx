import {
  QueryClient,
} from '@tanstack/react-query'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { GoldPrice } from './src/screens/price-table'
import { SettingsProvider } from './src/contexts/settings'
import PriceGraph from './src/screens/price-graph'
import Settings from './src/screens/settings'
import content from './src/content'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
})

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    // <NavigationContainer>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersister }}
      >
        <SettingsProvider>

          <Drawer.Navigator>
            <Drawer.Screen name={content.screens.prices.name} component={GoldPrice} />
            <Drawer.Screen name={content.screens.graph.name} component={PriceGraph} />
            <Drawer.Screen name={content.screens.settings.name} component={Settings} />
          </Drawer.Navigator>
        </SettingsProvider>

      </PersistQueryClientProvider>
    // </NavigationContainer>
  )
}
