import { useContext } from 'react'
import { View, Switch as RNSwitch, Text } from 'react-native'
import PropTypes from 'prop-types'
import { settings as content } from '../../../../content'
import { SettingsContext } from '../../../../contexts/settings'
import styles from './styles'

const Number = ({ name }) => {
  const [settings, setSettings] = useContext(SettingsContext)
  return (
    <View style={styles.row}>
      <Text>{content.displayNominalPrice}</Text>
      <RNSwitch
        value={settings[name]}
        onValueChange={() => setSettings({ [name]: !settings[name] })} />
    </View>
  )
}

Number.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Number
