import useAsyncStorage from '../useAsyncStorage'
import { useEffect, useState } from 'react'

const useSettings = () => {
  const [getStoreValue, setStoreValue] = useAsyncStorage()
  const [settings, setSettings] = useState({})

  useEffect(() => {
    const getSettings = async () => {
      const settingsFromStore = await getStoreValue('settings')
      if (settingsFromStore) {
        setSettings(JSON.parse(settingsFromStore))
      }
    }
    getSettings()
  }, [])

  const updateSettings = async (newSettings) => {
    const updatedSettings = { ...settings, ...newSettings }
    await setStoreValue('settings', JSON.stringify(updatedSettings))
    setSettings(updatedSettings)
  }

  return [settings, updateSettings]
}

export default useSettings
