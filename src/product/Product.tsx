import { Box, Text, Image, Divider, ScrollView, Icon, Button, Select, useToast } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet } from "react-native";
import { useState } from "react";
import NumericInput from "react-native-numeric-input";
import {deleteData, readData, saveData} from '../services/storage/AysncStorage.service'

export default function Product({ navigation, route }: any) {
    const toast = useToast();
    let productData = route.params.id;
    const [statusCart, onStatusCart] = useState(false);
    const [cart, setCart] = useState({item: productData.productId, quantity: 0, price: 0, image: productData.product.image, name: productData.product.name});

    const onCartChange = (input: string, data: any) => {
        setCart({...cart, [input]: data});
    }

    const onDeleteCart = async () => {
        deleteData(cart.item);
        setCart({item: productData.productId, quantity: 0, price: 0, image: productData.image, name: productData.name});
        onStatusCart(false);
        toast.show({
            render: () => {
                return (
                <Box backgroundColor='success.500' px={4} py={3}>
                    <Text color='white'>Se ha borrado exitosamente el carrito.</Text>
                </Box>
                )

            }
        });
    }

    const onAddCart = async () => {
        if (cart.price > 0 && cart.quantity > 0) {
            saveData(cart.item, JSON.stringify(cart));
            toast.show({
                render: () => {
                    return (
                    <Box backgroundColor='success.500' px={4} py={3}>
                        <Text color='white'>Se ha agragado al carrito correctamente.</Text>
                    </Box>
                    )
    
                }
            });
        }
        else {
            toast.show({
                render: () => {
                    return (
                    <Box backgroundColor='danger.500' px={4} py={3}>
                        <Text color='white'>Falta que selecciones un precio y/o cantidad</Text>
                    </Box>
                    )
    
                }
            });
        }
    }

    return (
        <>
        <Box flex='1' flexDirection='row'>
            <Box width='full'>
                <Divider mt='1' _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                <ScrollView backgroundColor='gray.50'>
                    <Box style={styles.bodyBox}>
                        <Text fontSize='2xl'>{productData.product.name}</Text>
                        <Image 
                        size='2xl'
                        alt='Prueba'
                        marginX='auto'
                        source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}}/>
                    </Box>
                    <Divider width='95%' marginX='auto' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                    <Box style={styles.informationBody}>
                        <Box style={styles.boxesStyles} backgroundColor='green.100'>
                            <Box marginY='auto'>
                                <Icon as={FontAwesome5} size='3xl' color='green.700' name='dollar-sign' />
                                <Text fontSize='md' color='green.700'>Venta {productData.product.price}$</Text>
                            </Box>
                        </Box>
                        <Box style={styles.boxesStyles} backgroundColor='blue.100'>
                            <Box marginY='auto'>
                                <Icon as={FontAwesome5} style={{width: '115%'}} size='3xl' color='blue.700' name='money-bill-alt' />
                                <Text fontSize='md' color='blue.800'>Costo {productData.product.cost}$</Text>
                            </Box>
                        </Box>
                        <Box style={styles.boxesStyles} backgroundColor='orange.100'>
                            <Box marginY='auto'>
                                <Icon as={FontAwesome5} style={{width: '115%'}} size='3xl' color='orange.700' name='box' />
                                <Text fontSize='md' color='orange.800'>{productData.product.quantity} disponible(s)</Text>
                            </Box>
                        </Box>
                        <Box style={styles.boxesStyles} backgroundColor='yellow.100'>
                            <Box marginY='auto'>
                                <Icon as={FontAwesome5} style={{width: '115%'}} size='3xl' color='yellow.700' name='file-invoice-dollar' />
                                <Text fontSize='md' color='yellow.800'>Costo total {productData.product.totalCost}$</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box marginX='4%' marginY='3%'>
                        <Box display={statusCart ? 'none' : 'block'}>
                            <Button onPress={() => onStatusCart(true)}>Agregar al carrito</Button>
                        </Box>
                        <Box display={!statusCart ? 'none' : 'block'}>
                            <Box flex='2' flexDirection='row' my='2.5' mb='3.5'>
                                <Box w='1/2' mt='auto' mb='auto'>
                                    <Select height='12' placeholder="Selecciona un precio" selectedValue={cart.price}
                                        onValueChange={(item) => {
                                            onCartChange('price', item);
                                        }}>
                                        <Select.Item label={ productData.price_1 + '$' } value={ productData.price_1 }/>
                                        <Select.Item label={ productData.price_2 + '$' } value={ productData.price_2 } />
                                        <Select.Item label={ productData.price_3 + '$' } value={ productData.price_3 } />
                                    </Select>
                                </Box>
                                <Box ml='8%'>
                                    <NumericInput initValue={cart.quantity} value={cart.quantity} onChange={(value) => onCartChange('quantity', value)}></NumericInput>
                                </Box>
                            </Box>
                            <Box flex='2' flexDirection='row'>
                                <Button w='48%' mx='1%' bgColor='red.500' onPress={() => onDeleteCart()}>Cancelar</Button>
                                <Button w='48%' mx='1%' bgColor='blue.500' onPress={() => onAddCart()}>Agregar al carrtio</Button>
                            </Box>

                        </Box>
                    </Box>
                    <Divider width='95%' marginX='auto' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                    <Box style={styles.descriptionBody}>
                        <Text>
                            {productData.product.description}
                        </Text>
                    </Box>
                </ScrollView>
            </Box>
        </Box>
        </>
    );
}

const styles = StyleSheet.create({
    heading: {
        width: '100%',
        marginHorizontal: '5%',
        paddingVertical: '3%',
        backgroundColor: 'white'
    },
    bodyBox: {
        marginHorizontal: '10%'
    },
    boxesStyles: {
        paddingHorizontal: '4%%',
        paddingVertical: '3%',
        width: '40%',
        marginHorizontal: '4%',
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