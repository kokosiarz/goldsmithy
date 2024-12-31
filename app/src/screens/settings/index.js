import { Divider } from 'react-native-paper'
import { View, SafeAreaView, Modal } from 'react-native'
import schema from '../../configuration/schema'
import Number from './components/number'
import Switch from './components/switch'
import MultipleChoice from './components/multiple-choice'

const Settings = () => {
  return (
    <SafeAreaView >
      {schema.map((item) => {
        const listItem = {
          'number': <Number name={item.key} />,
          'switch': <Switch name={item.key} />,
          'multiple-choice': <MultipleChoice name={item.key} options={item.options}/>,
        }[item.type]
        return (
          <View key={item.key}>
            {listItem}
            <Divider />
          </View>
        )
      })}
    </SafeAreaView >
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
