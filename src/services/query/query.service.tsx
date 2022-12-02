import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
//const baseUrl = 'https://api-demo-ventas.katalogo.vip/';
const baseUrl = 'http://localhost:3000/';

export const getQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.get(baseUrl + uri, settings);
}

export const postQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.post(baseUrl + uri, params, settings);
}

export const putQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.put(baseUrl + uri, params, settings);
}

export const deleteQuery = (uri: string, params?: any, settings?: any): Promise<any> => {
    return axios.get(baseUrl + uri, settings);
}

export const getStorageItem = async (key: string) => {
    return await SecureStore.getItemAsync(key);
}

export const saveStorageItem = async (key: string, data: any) => {
    return await SecureStore.setItemAsync(key, data);
}