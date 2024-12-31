import AsyncStorage from '@react-native-async-storage/async-storage'

clearAsyncStorage = async() => {
  console.log('clearing async storage')
  AsyncStorage.clear();
}
// clearAsyncStorage()

const useAsyncStorage = () => {
  const setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
    }
  }

  const getValue = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        return value
      }
    } catch (e) {
      console.log(e)
    }
  }

  return [getValue, setValue]
}

export default useAsyncStorage
