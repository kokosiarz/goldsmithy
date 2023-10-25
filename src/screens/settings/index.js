import { Divider } from 'react-native-paper'
import { View } from 'react-native'
import schema from './schema'
import Number from './components/number'
import Switch from './components/switch'

const Settings = () => {
  return (
    <View>
      {schema.map((item) => {
        switch (item.type) {
          case 'number':
            return (
              <View key={item.key} style={styles.row}>
                <Number name={item.key} />
                <Divider />
              </View>
            )
          case 'switch':
            return (
              <View key={item.key}>
                <Switch name={item.key} />
                <Divider />
              </View>
            )
          default:
            return null
        }
      })}
    </View>
  )
}

const styles = {
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default Settings
