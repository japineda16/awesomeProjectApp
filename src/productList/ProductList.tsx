import { Text, Box, Image, Divider, FlatList } from 'native-base';
import { useEffect, useState } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { getQuery, getStorageItem } from '../services/query/query.service';

export default function ProductList({ navigation, route }) {

    const [product, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    let [page, setPage] = useState({current: 1, finalItem: 0, skip: 0});

    const getProducts = async () => {
        const userId = await getStorageItem('userId');
        const skip = (page.current * 25) - 25;
        setRefreshing(true);
        const {data} = await getQuery('products/user-product/' + userId +'?page=' + page.current).catch((err) => {
            setRefreshing(false);
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
        });
        setPage({...page, finalItem: data.count, skip: skip});
        if (data.products != 0) setProducts([...product, ...data.products]);
        setRefreshing(false);
    }

    const onRefresh = async () => {
        const userId = await getStorageItem('userId');
        const {data} = await getQuery('products/user-product/' + userId +'?page=1').catch((err) => {
            setRefreshing(false);
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
        });
        setPage({current: 1, finalItem: 0, skip: 0});
        setProducts(data.products);
    }

    const onScroll = () => {
        setPage({...page, current: page.current++});
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
                        onRefresh={onRefresh}/>
                        } />
            </Box>
        </Box>
    );

}