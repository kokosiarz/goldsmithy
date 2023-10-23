import { useContext } from 'react'
import { Text } from 'react-native-paper'
import { View } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import useSettings from '../../hooks/useSettings'
import { SettingsContext } from '../../contexts/settings'

const Settings = () => {
  const [settings, setSettings] = useContext(SettingsContext)
  return (
        <View>
            <Text> spread Low:</Text>
            <NumericInput onChange={value => setSettings({ spreadLow: value })} minValue={0} initValue={settings.spreadLow || 0} />
        </View>
  )
}

export default Settings
