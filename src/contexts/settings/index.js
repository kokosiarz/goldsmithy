import { createContext } from 'react'
import PropTypes from 'prop-types'
import useSettings from '../../hooks/useSettings'

export const SettingsContext = createContext()

export const SettingsProvider = ({
  children
}) => {
  const [settings, setSettings] = useSettings()
  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
            {children}
    </SettingsContext.Provider>
  )
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default SettingsProvider
