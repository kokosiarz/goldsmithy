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
    await setStoreValue('settings', JSON.stringify(newSettings))
    setSettings(newSettings)
  }

  return [settings, updateSettings]
}

export default useSettings
