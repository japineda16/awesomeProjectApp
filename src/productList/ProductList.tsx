import { Text, Box, Image, Divider, FlatList, Fab } from 'native-base';
import { useEffect, useState } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { getQuery, getStorageItem } from '../services/query/query.service';

export default function ProductList({ navigation, route }) {

    const [product, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    let [page, setPage] = useState(1);

    const getProducts = async () => {
        const userId = await getStorageItem('userId');
        setRefreshing(true);
        const {data} = await getQuery('products/user-product/' + userId +'?page=' + page).catch((err) => {
            setRefreshing(false);
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
        });
        if (data.length <= 0) setPage(page--);
        if (data.length > 0) setProducts([...data]);
        setRefreshing(false);
    }

    const onScroll = () => {
        setPage(page++);
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
            </Box>
        </Box>
    );

}