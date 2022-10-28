import { Box, Text, Image, Heading, Divider, ScrollView, Icon } from "native-base";
import { StyleSheet } from "react-native";


export default function ClientList({ navigation }) {
    return (
        <>
        <Box flex='1' flexDirection='row'>
            <Box width='full'>
                <Heading 
                style={styles.heading}
                >
                    <Text fontSize='3xl' width='100%'>Lista de clientes</Text>
                </Heading>
                <Divider _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                <ScrollView backgroundColor='gray.50' marginTop='2'>
                    <Box backgroundColor='gray.100' width='full' padding='6'>
                        <Text fontSize='xl' onPress={() => {
                            navigation.navigate('Cliente');
                        }} bold>Jose Pineda</Text>
                        <Text fontSize='md'>Carabobo, valencia</Text>
                    </Box>
                    <Divider width='100%' marginX='auto' _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                    <Box backgroundColor='gray.50' width='full' padding='6'>
                        <Text fontSize='xl' bold>Yorman Rodriguez</Text>
                        <Text fontSize='md'>Carabobo, valencia</Text>
                    </Box>
                    <Divider width='100%' marginX='auto' _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                    <Box backgroundColor='gray.100' width='full' padding='6'>
                        <Text fontSize='xl' bold>Carlitos</Text>
                        <Text fontSize='md'>Carabobo, valencia</Text>
                    </Box>
                    <Divider width='100%' marginX='auto' _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                </ScrollView>
            </Box>
        </Box>
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