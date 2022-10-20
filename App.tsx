import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import Login from './src/auth/Login';
import Client from './src/Client/Client';
import ClientList from './src/ClientList/ClientList';
import OrderList from './src/OrderList/OrderList';
import Product from './src/product/Product';
import ProductList from './src/productList/ProductList';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex='1'>
        <OrderList></OrderList>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
