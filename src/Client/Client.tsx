import { Box, Divider, Text, Icon, ScrollView } from "native-base";
import { StyleSheet } from 'react-native';


export default function Client() {
    return (
        <>
            <Box flex='1' flexDirection='column' backgroundColor='blueGray.100'>
                <Box style={styles.heading} marginX='5'>
                    <Box>
                        <Text fontSize='2xl' textAlign='center' fontWeight='semibold'>Jose Pineda</Text>
                        <Text fontSize='xl' textAlign='center' fontWeight='light'>Naguanagua, Valencia 2015, Carabobo</Text>
                        <Text fontSize='xl' textAlign='center' fontWeight='light'>0414-1453704</Text>
                    </Box>
                </Box>
                <Box style={styles.body} paddingX='6'>
                    <ScrollView>
                        <Text fontSize='2xl' bold>Pedidos</Text>
                        <Divider width='100%' marginX='auto' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                            <Divider width='100%' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        </Box>
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                            <Divider width='100%' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        </Box>
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                            <Divider width='100%' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        </Box>
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                            <Divider width='100%' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        </Box>
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                            <Divider width='100%' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        </Box>
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                            <Divider width='100%' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        </Box>
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                            <Divider width='100%' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                        </Box>
                        <Box width='full' paddingX='1'>
                            <Text fontSize='xl' bold paddingTop='3'>Pedido #1234</Text>
                            <Text fontSize='md' paddingBottom='3'>Fecha: 25/09/2022</Text>
                        </Box>
                    </ScrollView>
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