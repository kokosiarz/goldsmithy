import { useEffect, useState } from 'react'
import _ from "lodash";
import schema from '../../configuration/schema'
import useAsyncStorage from '../useAsyncStorage'

const validateSettings = (settings) => {
    let newSettings = {}
    schema.forEach((item) => {
        console.log("item", item)
        newSettings[item.key] = (settings && settings[item.key]) || item.default
    })
    return newSettings
}

const useSettings = () => {
    const [getStoreValue, setStoreValue] = useAsyncStorage()
    const [settings, setSettings] = useState({})
    const initializeSettings = async () => {
        // get settings from storage
        let settingsStringFromStore = {}
        try {
            settingsStringFromStore = JSON.parse(await getStoreValue('settings'))
        }
        catch (e) {
            console.log(e)
        }
        const validatedSettings = validateSettings(settingsStringFromStore)
        await setStoreValue('settings', JSON.stringify(validatedSettings))
        setSettings(validatedSettings)
        console.log('initializing settings', validatedSettings)
    }

    useEffect(() => {
        initializeSettings()
    }, [])

    const updateSettings = async (newSettings) => {
        const updatedSettings = { ...settings, ...newSettings }
        try {
            await setStoreValue('settings', JSON.stringify(updatedSettings))
            setSettings(updatedSettings)
        }
        catch (e) {
            console.log(e)
        }
    }

    return [settings, updateSettings]
}

export default useSettings
