import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, data: any) => {
    try {
        return await AsyncStorage.setItem(key, data);
    } catch (e) {
      alert('No se ha podido almacenar la informacion');
    }
  }

export const readData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
};

export const getAllData = async () => {
    try {
        const value = await AsyncStorage.getAllKeys();
        return value;
      } catch (e) {
        alert('Failed to fetch the input from storage');
      }
}

export const deleteData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
      } catch(e) {
        // remove error
      }
}