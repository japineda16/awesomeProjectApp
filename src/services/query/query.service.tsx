import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const getQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.get('https://api-demo-ventas.katalogo.vip/' + uri, settings);
}

export const postQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.post('https://api-demo-ventas.katalogo.vip/' + uri, params, settings);
}

export const putQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.put('https://api-demo-ventas.katalogo.vip/' + uri, params, settings);
}

export const deleteQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.get('https://api-demo-ventas.katalogo.vip/' + uri, settings);
}

export const getStorageItem = async (key: string): Promise<any> => {
    return SecureStore.getItemAsync(key);
}

export const saveStorageItem = (key: string, data: any): Promise<any> => {
    return SecureStore.setItemAsync(key, data);
}