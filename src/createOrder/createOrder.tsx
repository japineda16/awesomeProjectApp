import { Box, FlatList, Text, Image, Divider, Button, useToast } from "native-base";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { postQuery } from "../services/query/query.service";
import { getAllData, readData } from "../services/storage/AysncStorage.service";

export const CreateOrder = ({route, navigation}) => {
    const toast = useToast();
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let data: any = await getAllData();
        for (const item of data) {
            let product = await readData(item);
            product = JSON.parse(product);
            setProducts([...products, product]);
        }
    }

    const onConfirmOrder = () => {
        let order = [];
        for (let item of products) {
            order.push({id: item.id, quantity: item.cart});
        }
        const data = {
            orderNumber: Math.floor(Math.random()*90000) + 10000,
            total: totalPrice,
            products: order
        }
        onSubmitData(data);
    }

    const onSubmitData = async (data: any) => {
        setLoading(true);
        const query = await postQuery('orders', data).catch( (e) => {
            setLoading(false);
            console.log(e)
            Alert.alert('Error', 'No se ha podido realizar la petición, vuelva a intentarlo mas tarde.');
        } );
        setLoading(false);
        toast.show({
            render: () => {
                return <Box backgroundColor='success.500' px={4} py={3}>
                    <Text color='white'>Se ha creado exitosamente la orden {query.data.orderNumber} .</Text>
                </Box>
            }
        });
        navigation.navigate('Lista de ordenes');
    }

    useEffect( () => {
        let total = 0;
        for (const item of products) {
            total = total + (item.quantity * item.price);
        }
        const getAllProducts = async () => {
            await getProducts();
        }
        getAllProducts()
        setTotalPrice(total);
    }, []);

    return (
        <>
            <Box height='full' backgroundColor='white'>
                <FlatList
                    height='90%'
                    data={products}
                    renderItem={ ({item, index}) => 
                        <Box backgroundColor={index % 2 ? 'gray.100' :  'white'} paddingX='25px' paddingTop='2.5' flex='2' flexDirection='row' flexWrap='wrap'>
                            <Box maxWidth='50%'>
                                <Text fontSize='2xl' bold>
                                    {item.name}
                                </Text>
                                <Text bold>
                                    En carrito: {item.quantity}
                                </Text>
                                <Text fontSize='md'>
                                    Precio unitario: {item.price}
                                </Text>
                                <Text>
                                    Total: {item.quantity * item.price}
                                </Text>
                            </Box>
                            <Box maxWidth='50%' marginLeft='auto'>
                                <Image
                                size='xl'
                                alt='Harina'
                                source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                            </Box>
                            <Divider />
                        </Box>
                    } />
                    <Box marginX='3.5' marginBottom='4'>
                        <Text fontSize='3xl'>Total: {totalPrice}</Text>
                        <Button isLoading={isLoading} onPress={onConfirmOrder}>
                            <Text color='white' fontSize='lg'>Confirmar orden</Text>
                        </Button>
                    </Box>
            </Box>
        </>
    );
}