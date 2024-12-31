import { KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const ScreenWrapper = ({ children }) => <KeyboardAvoidingView style={styles.container}>
    {children}
</KeyboardAvoidingView>

ScreenWrapper.propTypes = {
  children: PropTypes.node
}
export default ScreenWrapper
