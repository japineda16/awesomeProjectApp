import { Box, Divider, Heading, Text, Icon, ScrollView, Image } from "native-base";
import { StyleSheet } from "react-native";

export default function Order()  {
    return (
        <>
        <Box style={styles.body} backgroundColor='blueGray.100'>
            <Text style={styles.titleOrder} fontSize='2xl'>Orden 12345</Text>
            <Box backgroundColor='white'>
                <Box style={styles.bodyStructure}>
                    <Divider></Divider>
                    <ScrollView  height='full'>

                        <Box flex={2} flexDirection='row' height='32' my={1.5} backgroundColor='white'>
                            <Box marginX={3} marginY={2.5} width='1/3'>
                                <Image
                                width='full'
                                height='full'
                                source={{uri: 'https://s3.us-east-2.amazonaws.com/forpi.co/AA310300101-B3.jpg'}}
                                alt='prueba'></Image>
                            </Box>
                            <Box marginX={3} marginY={2.5} width='3/5'>
                                <Box marginY='auto'>
                                    <Text fontSize='lg' fontWeight='bold'>Harina Pan</Text>
                                    <Text fontSize='md'>Cantidad: 5</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Divider my={1.5}></Divider>

                        <Box flex={2} flexDirection='row' height='32' my={1.5} backgroundColor='white'>
                            <Box marginX={3} marginY={2.5} width='1/3'>
                                <Image
                                width='full'
                                height='full'
                                source={{uri: 'https://s3.us-east-2.amazonaws.com/forpi.co/AA310300101-B3.jpg'}}
                                alt='prueba'></Image>
                            </Box>
                            <Box marginX={3} marginY={2.5} width='3/5'>
                                <Box marginY='auto'>
                                    <Text fontSize='lg' fontWeight='bold'>Lorem Ipsum dolor</Text>
                                    <Text fontSize='md'>Cantidad: 5</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Divider my={1.5}></Divider>

                        <Box flex={2} flexDirection='row' height='32' my={1.5} backgroundColor='white'>
                            <Box marginX={3} marginY={2.5} width='1/3'>
                                <Image
                                width='full'
                                height='full'
                                source={{uri: 'https://s3.us-east-2.amazonaws.com/forpi.co/AA310300101-B3.jpg'}}
                                alt='prueba'></Image>
                            </Box>
                            <Box marginX={3} marginY={2.5} width='3/5'>
                                <Box marginY='auto'>
                                    <Text fontSize='lg' fontWeight='bold'>Lorem Ipsum dolor</Text>
                                    <Text fontSize='md'>Cantidad: 5</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Divider my={1.5}></Divider>

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