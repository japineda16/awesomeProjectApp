import { useIsFocused } from "@react-navigation/native";
import { Box, Divider, Text, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { getQuery } from "../services/query/query.service";


export default function Client({navigation, route, prop}) {
    const isFocus = useIsFocused();
    let client = route.params;
    let [page, setPage] = useState({current: 1, finalItem: 0, skip: 0});
    const [products, setProducts] = useState([]);

    const getClient = async () => {
        const {data} = await getQuery('orders/client/' + client.id + '?page=' + page.current).catch(e => {
            if (e.response.status != 404) {
                alert('No se ha podido cargar la informacion del cliente.');
                console.log(e.response.data)
            }
        })
        setProducts(data);
        console.log(data)
    }

    const onReload = async () => {
        const skip = (page.current * 5) - 5;
        const {data} = await getQuery('orders/client/' + client.id + '?page=' + page.current).catch(e => {
            if (e.response.status != 404) {
                alert('No se ha podido cargar la informacion del cliente.');
                console.log(e.response.data)
            }
        })
        setPage({...page, finalItem: data[1], skip: skip});
        setProducts([...products, ...data]);
    }

    const onScroll = async () => {
        setPage({...page, current: page.current++});
        await onReload();
    }

    const emptyClient = () => {
        if (products.length == 0) {
            return (
                <Text>Este cliente todavía no tiene ordenes creadas.</Text>
            )
        }
    }

    useEffect(() => {
        const init = () => {
            client = route.params;
            setProducts([]);
            setPage({current: 1, finalItem: 0, skip: 0});
            getClient();
        }
        init();
    },  [isFocus]);
    return (
        <>
            <Box flex='1' flexDirection='column' backgroundColor='blueGray.100'>
                <Box style={styles.heading} marginX='5'>
                    <Box>
                        <Text fontSize='2xl' textAlign='center' fontWeight='semibold'>{client.name}</Text>
                        <Text fontSize='xl' textAlign='center' fontWeight='light'>{client.address}</Text>
                        <Text fontSize='xl' textAlign='center' fontWeight='light'>{client.phone}</Text>
                    </Box>
                </Box>
                <Box style={styles.body} paddingX='6'>
                    {emptyClient()}
                    <FlatList data={products} 
                    onEndReached={onScroll}
                    onEndReachedThreshold={0}
                    renderItem={ ({item, index}) => 
                        <Box>
                            <Divider width='100%' marginX='auto' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                            <Box width='full' paddingX='1'>
                                <Text fontSize='xl' 
                                onPress={() => {
                                    navigation.navigate('Orden', item);
                                }}
                                bold paddingTop='3'>Pedido # {item.orderNumber}</Text>
                                <Text fontSize='md' paddingBottom='3'>Fecha: { new Date(item.createdAt).toLocaleDateString(['ban', 'id']) }</Text>
                            </Box>
                        </Box>
                } />
                </Box>
            </Box>
        </>
    );
}

const styles = StyleSheet.create({
    heading: {
        marginHorizontal: 'auto',
        marginVertical: 25
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        paddingTop: 35
    }
});