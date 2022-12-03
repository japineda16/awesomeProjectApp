import { Box, Divider, Text, ScrollView, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { Alert, RefreshControl, StyleSheet } from "react-native";
import { getQuery } from "../services/query/query.service";

export default function Order({ navigation })  {
    const [orders, setOrders] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    let [page, setPage] = useState({current: 1, finalItem: 0, skip: 0});

    const getOrders = async () => {
        const skip = (page.current * 5) - 5;
        setRefreshing(true);
        const {data} = await getQuery('orders?page=' + page.current).catch( () => {
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
            setRefreshing(false);
        } );
        setPage({...page, finalItem: data[1], skip: skip});
        setRefreshing(false);
        if (data != 0) setOrders([...orders, ...data[0]]);
    }

    const onRefresh = async () => {
        setOrders([]);
        const {data} = await getQuery('orders?page=1').catch((err) => {
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
        });
        setPage({current: 1, finalItem: data[1], skip: 0});
        setOrders(data[0]);
    }

    const onScroll = () => {
        if (page.finalItem >= page.skip) {
            setPage({...page, current: page.current++});
            getOrders();
        }
    }

    useEffect( () => {
        onRefresh();
    }, []);

    return (
        <>
            <Box backgroundColor='white'
            flex={1}
            flexDirection='column' py='2.5'>
                <Box style={styles.body}>
                    <Text fontSize='2xl' fontWeight='bold' marginBottom={3}>Listado de ventas</Text>
                    <Divider></Divider>
                    <FlatList height='full' data={orders} renderItem={ ({item, index}) => 
                        <Box mb={orders[orders.length - 1].id == item.id ? 20 : 0}>
                            <Box marginY={5}>
                                <Text onPress={() => {
                                    navigation.navigate('Orden', item);
                                }} fontSize='xl' fontWeight='semibold'>
                                    Orden {item.orderNumber}
                                </Text>
                                <Text>Cliente: {item.client?.name}</Text>
                                <Text>Dirección: {item.client?.address}</Text>
                            </Box>
                            <Divider></Divider>
                        </Box>
                }
                onEndReached={onScroll}
                onEndReachedThreshold={0}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                />
                </Box>
            </Box>
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 25
    }
});