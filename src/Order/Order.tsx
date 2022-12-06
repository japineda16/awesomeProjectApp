import { useIsFocused } from "@react-navigation/native";
import { Box, Divider, Heading, Text, Icon, ScrollView, Image } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { getQuery } from "../services/query/query.service";

export default function Order({ navigation, route })  {
    const [products, setProducts] = useState([]);
    let data = route.params;
    const isFocused = useIsFocused();
    
    const getOrder =  async () => {
        const {data} = await getQuery('orders/' + route.params.id).catch((e) => {
            alert('Hubo un error, por favor vuelva a intentarlo')
        });
        setProducts(data);
    }
    useEffect( () => {
        const init = () => {
            getOrder();
            data = route.params;
        }
        init();
    }, [isFocused]);
    return (
        <>
        <Box style={styles.body} backgroundColor='blueGray.100'>
            <Box style={styles.titleOrder}>
                <Text fontSize='2xl' bold>Orden {data.orderNumber}</Text>
                <Text fontSize='xl'>Datos del cliente</Text>
                <Text fontSize='lg'>{data.client.name}</Text>
                <Text fontSize='lg'>{data.client.address}</Text>
                <Text fontSize='lg'>{data.client.phone}</Text>
                <Text fontSize='lg'>{data.client.mail}</Text>
            </Box>
            <Box backgroundColor='white'>
                <Box style={styles.bodyStructure}>
                    <Divider></Divider>
                    <ScrollView  height='full'>

                    {
                        products.map( (item, index) => {
                            return (
                                <Box key={item.id}>
                                    <Box key={index} flex={2} flexDirection='row' height='32' my={1.5} backgroundColor='white'>
                                    <Box marginX={3} marginY={2.5} width='1/3'>
                                        <Image
                                            width='full'
                                            height='full'
                                            source={{ uri: item.product.image }}
                                            alt='prueba'></Image>
                                    </Box>
                                    <Box marginX={3} marginY={2.5} width='3/5'>
                                        <Box marginY='auto'>
                                            <Text fontSize='lg' fontWeight='bold'>{item.product.name}</Text>
                                            <Text fontSize='md'>Cantidad: {item.quantity}</Text>
                                        </Box>
                                    </Box>
                                </Box><Divider my={1.5}></Divider>
                                </Box>
                            )
                        } )
                    }

                    </ScrollView>
                </Box>
            </Box>
        </Box>
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column'
    },
    bodyStructure: {
        marginHorizontal: 15
    },
    titleOrder: {
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 15
    }
});