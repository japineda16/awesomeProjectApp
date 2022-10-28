import { Text, Box, ScrollView, Image, StatusBar, Divider } from 'native-base';
import { useState } from 'react';

export default function ProductList({ navigation }) {

    return (
        <Box flex='1' backgroundColor='white' safeAreaBottom>
            <Box>
                <ScrollView>
                    <Box paddingX='25px' flex='2' flexDirection='row' flexWrap='wrap'>
                        <Box maxWidth='50%'>
                            <Text fontSize='2xl' bold onPress={() => {
                                navigation.navigate('Producto');
                            }}>
                                Pruebaaaaaaaaaaa
                            </Text>
                            <Text fontSize='md'>
                                Prueba
                            </Text>
                        </Box>
                        <Box maxWidth='50%' marginLeft='10'>
                            <Image
                            size='xl'
                            alt='Harina'
                            source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                        </Box>
                        <Divider my={2} />
                    </Box>
                    <Box    paddingX='25px' flex='2' flexDirection='row' flexWrap='wrap'>
                        <Box maxWidth='50%'>
                            <Text fontSize='2xl' bold>
                                Pruebaaaaaaaaaaa
                            </Text>
                            <Text fontSize='md'>
                                Prueba
                            </Text>
                        </Box>
                        <Box maxWidth='50%' marginLeft='10'>
                            <Image
                            size='xl'
                            alt='Harina'
                            source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                        </Box>
                        <Divider my={2} />
                    </Box>
                    <Box    paddingX='25px' flex='2' flexDirection='row' flexWrap='wrap'>
                        <Box maxWidth='50%'>
                            <Text fontSize='2xl' bold>
                                Pruebaaaaaaaaaaa
                            </Text>
                            <Text fontSize='md'>
                                Prueba
                            </Text>
                        </Box>
                        <Box maxWidth='50%' marginLeft='10'>
                            <Image
                            size='xl'
                            alt='Harina'
                            source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                        </Box>
                        <Divider my={2} />
                    </Box>
                    <Box    paddingX='25px' flex='2' flexDirection='row' flexWrap='wrap'>
                        <Box maxWidth='50%'>
                            <Text fontSize='2xl' bold>
                                Pruebaaaaaaaaaaa
                            </Text>
                            <Text fontSize='md'>
                                Prueba
                            </Text>
                        </Box>
                        <Box maxWidth='50%' marginLeft='10'>
                            <Image
                            size='xl'
                            alt='Harina'
                            source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                        </Box>
                        <Divider my={2} />
                    </Box>
                    <Box paddingX='25px' flex='2' flexDirection='row' flexWrap='wrap'>
                        <Box maxWidth='50%'>
                            <Text fontSize='2xl' bold>
                                Pruebaaaaaaaaaaa
                            </Text>
                            <Text fontSize='md'>
                                Prueba
                            </Text>
                        </Box>
                        <Box maxWidth='50%' marginLeft='10'>
                            <Image
                            size='xl'
                            alt='Harina'
                            source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                        </Box>
                        <Divider my={2} />
                    </Box>
                    <Box marginBottom='1/3'  paddingX='25px' flex='2' flexDirection='row' flexWrap='wrap'>
                        <Box maxWidth='50%'>
                            <Text fontSize='2xl' bold>
                                Pruebaaaaaaaaaaa
                            </Text>
                            <Text fontSize='md'>
                                Prueba
                            </Text>
                        </Box>
                        <Box maxWidth='50%' marginLeft='10'>
                            <Image
                            size='xl'
                            alt='Harina'
                            source={{uri: 'https://m.media-amazon.com/images/I/61SpU+nb-kL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg'}} />
                        </Box>
                        <Divider my={2} />
                    </Box>
                </ScrollView>
            </Box>
        </Box>
    );

}