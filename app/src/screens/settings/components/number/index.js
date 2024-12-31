import { useContext } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import PropTypes from 'prop-types'
import NumericInput from 'react-native-numeric-input'
import { settings as content } from '../../../../content'
import { SettingsContext } from '../../../../contexts/settings'
import styles from './styles'

const Switch = ({ name }) => {
  const [settings, setSettings] = useContext(SettingsContext)
  return (
    <View style={styles.row}>
      <Text variant='bodyMedium' style={styles.label}>{content[name]}</Text>
      <NumericInput
        onChange={value => setSettings({ [name]: value })}
        minValue={0}
        initValue={settings[name] || 0}
        totalHeight={40}
      />
    </View>
  )
}

Switch.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Switch
