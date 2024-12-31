import { useContext, useState } from 'react'
import { View, SafeAreaView, Modal, Pressable, TouchableHighlight, Button } from 'react-native'
import { Text } from 'react-native-paper'
import { common as commonContent } from '../../../../content'
import { SettingsContext } from '../../../../contexts/settings'
import { settings as content } from '../../../../content'
import styles from './styles'

const MultipleChoice = ({ name, options }) => {
    const [settings, setSettings] = useContext(SettingsContext)
    const [visible, setVisible] = useState(false)
    const saveSettings = () => {
        setVisible(false)
    }
    const toggleOptionState = (option) => {
        console.log(settings, settings[name], option)
        setSettings({
            [name]: settings[name].includes(option)
                ? [...settings[name].filter(item => item != option)].sort().reverse()
                : [...settings[name], option].sort().reverse()
        })
    }
    return (
        <View>
            <TouchableHighlight onPress={() => setVisible(!visible)}>
                <View style={styles.row}>
                    <Text variant='bodyMedium' style={styles.label}>{content.caratages}</Text>
                    <Text variant='bodyMedium' style={styles.label}>{'>'}</Text>
                </View>
            </TouchableHighlight>
            <Modal visible={visible}>
                <SafeAreaView>
                    {options.map((option) => (
                        <TouchableHighlight onPress={() => toggleOptionState(option)} key={option}>
                            <View style={styles.row}>
                                <Text variant='bodyMedium' style={styles.label}>{option}</Text>
                                {settings[name]?.includes(option) && <Text
                                    variant='bodyMedium'
                                    style={styles.label}>
                                    X
                                </Text>}
                            </View>
                        </TouchableHighlight>
                    ))}

                    <Button onPress={saveSettings} title='OK' />
                </SafeAreaView>
            </Modal>
        </View>
    )
}

export default MultipleChoice
