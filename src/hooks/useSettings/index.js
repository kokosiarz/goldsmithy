import useAsyncStorage from '../useAsyncStorage'
import { useEffect, useState } from 'react'

const useSettings = () => {
  const [getValue, setValue] = useAsyncStorage()
  const [settings, setSettings] = useState({})

  useEffect(() => {
    const getSettings = async () => {
      const settings = await getValue('settings')
      console.log("read settings", settings)
      if (settings) {
        setSettings(JSON.parse(settings))
      }
    }
    getSettings()
  }, [])

  const updateSettings = async (newSettings) => {
    await setValue('settings', JSON.stringify(newSettings))
    setSettings(newSettings)
  }

  return [settings, updateSettings]
}

export default useSettings
