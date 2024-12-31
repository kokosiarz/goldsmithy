import { Text } from 'react-native-paper'
import PropTypes from 'prop-types'
const ScreenTitle = ({ text }) => <Text variant="headlineLarge" style={{ padding: 10 }}>{text}</Text>

ScreenTitle.propTypes = {
  text: PropTypes.string
}

export default ScreenTitle
