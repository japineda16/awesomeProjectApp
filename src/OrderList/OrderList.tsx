import { Box, Divider, Text, ScrollView, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { Alert, RefreshControl, StyleSheet } from "react-native";
import { getQuery } from "../services/query/query.service";

export default function Order({ navigation })  {
    const [orders, setOrders] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const getOrders = async () => {
        setRefreshing(true);
        const {data} = await getQuery('orders?page=1').catch( () => {
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
            setRefreshing(false);
        } );
        setRefreshing(false);
        setOrders(data);
    }

    useEffect( () => {
        getOrders();
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
                        <Box padding={0.5}>
                            <Box marginY={5}>
                                <Text onPress={() => {
                                    navigation.navigate('Orden');
                                }} fontSize='xl' fontWeight='semibold'>
                                    Orden {item.orderNumber}
                                </Text>
                                <Text>Cliente: Jose Pineda</Text>
                                <Text>Dirección: Naguanagua, Tazajal.</Text>
                            </Box>
                            <Divider></Divider>
                        </Box>
                }
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={getOrders}/>
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