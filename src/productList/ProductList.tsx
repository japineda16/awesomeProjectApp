import { Text, Box, ScrollView, Image, Divider, Button, FlatList, Input, IconButton, Icon } from 'native-base';
import { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { getQuery } from '../services/query/query.service';

export default function ProductList({ navigation }) {

    const [product, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [cart, setCart] = useState([]);

    const getProducts = async () => {
        setRefreshing(true);
        let {data} = await getQuery('products?page=1').catch((err) => {
            console.log(err);
        });
        setRefreshing(false);
        setCart([]);
        setProducts([...data[1]]);
    }

    const displayReportButton = () => {
        if (Object.keys(cart).length != 0) {
            return (<Button width='60%' 
                    onPress={() => createOrder()}
                    borderRadius='full' 
                    marginX='auto'>Crear orden</Button>);
        }
    }

    const createOrder = () => {
        const products: any[] = [];
        for (let item of cart) {
            products.push(product[item]);
        }
        console.log(products);
    }

    const addToCart = (id: string, quantity: number, index: number, item: JSON) => {
        setCart([...cart, index]);
        product[index] = {...item, isAdded: true, cart: 1};
    }

    const onActionAdToCart = (item: any, index: number, quantity: number) => {
        if (item.isAdded == false || item.isAdded == undefined) {
            return (<Button 
            onPress={() => addToCart(item.id, 1, index, item)}
            width='32' 
            my='auto' 
            borderRadius='full'>Ordenar</Button>)
        } else {
            return (
                <NumericInput maxValue={quantity} onChange={ value => {
                    product[index].cart = value;
                } }></NumericInput>
            )
        }
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
                    height='90%'
                    data={product}
                    renderItem={ ({item, index}) => 
                        <Box paddingX='25px' flex='2' marginTop='2.5' flexDirection='row' flexWrap='wrap'>
                            <Box maxWidth='50%'>
                                <Text fontSize='2xl' bold onPress={() => {
                                    navigation.navigate('Producto', {id: item});
                                }}>
                                    {item.name}
                                </Text>
                                <Text fontSize='md'>
                                    Precio de venta: {item.price}
                                </Text>
                                <Text>
                                    Disponible: {item.quantity}
                                </Text>
                                {onActionAdToCart(item, index, item.quantity)}
                            </Box>
                            <Box maxWidth='50%' marginLeft='auto'>
                                <Image
                                size='xl'
                                alt='Harina'
                                source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                            </Box>
                            <Divider my={2} />
                        </Box>
                    }
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