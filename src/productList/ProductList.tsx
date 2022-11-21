import { Text, Box, Image, Divider, FlatList, Fab } from 'native-base';
import { useEffect, useState } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { getQuery, getStorageItem } from '../services/query/query.service';

export default function ProductList({ navigation, route }) {

    const [product, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [cart, setCart] = useState([]);
    let [page, setPage] = useState(1);

    const getProducts = async (setPage?: number) => {
        const userId = await getStorageItem('userId');
        setRefreshing(true);
        const {data} = await getQuery('products/user-product/' + userId +'?page=' + page).catch((err) => {
            setRefreshing(false);
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
        });
        setRefreshing(false);
        setCart([]);
        setProducts([...data]);
    }

    const displayReportButton = () => {
        if (Object.keys(cart).length != 0) {
            return (<Fab
                    onPress={() => createOrder()}
                    borderRadius='full'
                    right='25%' w='1/2' bottom='10%' label={
                        <Text color='white' fontSize='md'>Crear orden</Text>
                    } />);
        }
    }

    const onScroll = () => {
        setPage(page++);
        console.log(page);
    }

    const createOrder = () => {
        let products: any[] = [];
        for (let item of cart) {
            products.push(product[item]);
        }
        navigation.navigate('Crear-orden', products);
        products = [];
        getProducts();
    }

    useEffect(() => {
        let callingApi = async () => {
            await getProducts();
        }
        callingApi();
    }, []);

    return (
        <Box flex='1' backgroundColor='white'>
            <Box>
                <FlatList
                    height='full'
                    data={product}
                    renderItem={ ({item, index}) => 
                        <Box paddingX='25px' flex='2' marginTop='2.5' flexDirection='row' flexWrap='wrap'>
                            <Box maxWidth='50%'>
                                <Box my='auto'>
                                    <Text fontSize='2xl' bold onPress={() => {
                                        navigation.navigate('Producto', {id: item});
                                    }}>
                                        {item.product.name}
                                    </Text>
                                    <Text fontSize='md'>
                                        Precio general: {item.product.price}
                                    </Text>
                                    <Text>
                                        Disponible: {item.product.quantity}
                                    </Text>
                                </Box>
                            </Box>
                            <Box maxWidth='50%' marginLeft='auto'>
                                <Image
                                size='xl'
                                alt='Harina'
                                source={{uri: item.product.image}} />
                            </Box>
                            <Divider my={2} />
                        </Box>
                    }
                    onEndReached={onScroll}
                    onEndReachedThreshold={0}
                    refreshControl={
                        <RefreshControl
                        refreshing={refreshing}
                        onRefresh={getProducts}/>
                        } />
                        {displayReportButton()}
            </Box>
        </Box>
    );

}