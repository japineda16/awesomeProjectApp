import { Box, Text, Heading, Divider, ScrollView, Button, FlatList } from "native-base";
import { useEffect, useState } from "react";
import { Alert, RefreshControl, StyleSheet } from "react-native";
import { ModalClient } from "./component/modelClient";
import { getQuery } from "../services/query/query.service";

export default function ClientList({ navigation }) {
    const [buttonClient, setButtonClient] = useState(false);
    const [clients, setClients] = useState([]);
    const [refreshing, setRefresh] = useState(false);
    let [page, setPage] = useState({current: 1, finalItem: 0, skip: 0});

    const onInitClients = async () => {
        const skip = (page.current * 25) - 25;
        const {data} = await getQuery('clients?page=' + page.current).catch((err) => {
            Alert.alert('Error', 'Ha sucedido un error desconocido, vuelva a intentarlo.');
            console.log(err);
        });
        setPage({...page, finalItem: data.count, skip: skip});
        if (data[1] != 0) setClients([...clients, ...data[1]]);
    }

    const onRefresh = async () => {
        setClients([]);
        const {data} = await getQuery('clients?page=1').catch((err) => {
            Alert.alert('Error', 'No se pudo realizar la petición, por favor vuelva a intentarlo.');
        });
        setPage({current: 1, finalItem: 0, skip: 0});
        setClients(data[1]);
    }

    const onScroll = () => {
        setPage({...page, current: page.current++});
        onInitClients();
    }

    useEffect( () => {
        onRefresh();
    }, []);

    return (
        <>
        <Box flex='1' flexDirection='row' backgroundColor='white'>
            <Box width='full'>
                <Heading 
                style={styles.heading}
                >
                    <Text fontSize='3xl' width='100%'>Lista de clientes</Text>
                </Heading>
                <Divider _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                <FlatList 
                data={clients} renderItem={ ({item, index}) => 
                    <Box backgroundColor={index % 2 ? 'gray.100' : 'white'} width='full' padding='6'>
                        <Text fontSize='xl' onPress={() => {
                            navigation.navigate('Cliente', item);
                        }} bold>{item.name}</Text>
                        <Text fontSize='md'>{item.address}</Text>
                    </Box>
                }
                onEndReached={onScroll}
                onEndReachedThreshold={0}
                refreshControl={
                    <RefreshControl 
                    onRefresh={onRefresh}
                    refreshing={refreshing}/>
                }
                />
                <Button w='80' marginX='auto'
                    marginBottom='4' 
                    onPress={ () => {
                    setButtonClient( buttonClient == false ? true : false)} 
                    }>Añadir cliente</Button>
            </Box>
        </Box>
        <ModalClient onSubmit={onRefresh} status={buttonClient} onClose={() => setButtonClient(false)}></ModalClient>
        </>
    );
}

const styles = StyleSheet.create({
    heading: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        backgroundColor: 'white'
    },
    bodyBox: {
        marginHorizontal: '10%'
    },
    boxesStyles: {
        paddingHorizontal: '5%%',
        paddingVertical: '3%',
        width: '40%',
        marginHorizontal: '5%',
        marginVertical: '2%',
        borderRadius: 10
    },
    informationBody: {
        marginHorizontal: 'auto',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    descriptionBody: {
        marginHorizontal: '5%',
        paddingHorizontal: '6%',
        paddingVertical: '5%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d6d3d1'
    }
});