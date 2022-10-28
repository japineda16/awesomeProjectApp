import { Box, Text, Image, Heading, Divider, ScrollView, Icon } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { StyleSheet } from "react-native";

export default function Product() {
    return (
        <>
        <Box flex='1' flexDirection='row'>
            <Box width='full'>
                <Divider mt='1' _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                <ScrollView backgroundColor='gray.50'>
                    <Box style={styles.bodyBox}>
                        <Text fontSize='2xl'>Harina Pan</Text>
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
                                <Text fontSize='md' color='green.700'>Venta 1.5$</Text>
                            </Box>
                        </Box>
                        <Box style={styles.boxesStyles} backgroundColor='blue.100'>
                            <Box marginY='auto'>
                                <Icon as={FontAwesome5} style={{width: '115%'}} size='3xl' color='blue.700' name='money-bill-alt' />
                                <Text fontSize='md' color='blue.800'>Costo 0.75$</Text>
                            </Box>
                        </Box>
                        <Box style={styles.boxesStyles} backgroundColor='orange.100'>
                            <Box marginY='auto'>
                                <Icon as={FontAwesome5} style={{width: '115%'}} size='3xl' color='orange.700' name='box' />
                                <Text fontSize='md' color='orange.800'>3 disponible(s)</Text>
                            </Box>
                        </Box>
                        <Box style={styles.boxesStyles} backgroundColor='yellow.100'>
                            <Box marginY='auto'>
                                <Icon as={FontAwesome5} style={{width: '115%'}} size='3xl' color='yellow.700' name='file-invoice-dollar' />
                                <Text fontSize='md' color='yellow.800'>Costo total 0.90$</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Divider width='95%' marginX='auto' my="2" _light={{bg: "muted.300"}} _dark={{bg: "muted.50"}} />
                    <Box style={styles.descriptionBody}>
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit sapien, porta mollis egestas vitae, varius sit amet nunc. Praesent sodales imperdiet nunc non dictum. Maecenas ac neque eget justo aliquam scelerisque. Duis sit amet finibus felis. Maecenas nisi metus, faucibus nec metus vitae, posuere consequat lorem. Suspendisse potenti. Morbi dui nulla, posuere sed est vel, malesuada pellentesque justo. Quisque bibendum, eros id condimentum sodales, elit nisl cursus ex, vitae finibus arcu lorem at sapien. Duis iaculis lorem leo, id hendrerit augue maximus id. Praesent eu augue viverra, commodo nisl eget, pellentesque ipsum. Integer mollis elit mauris, sed sodales est mollis bibendum. Cras dui erat, viverra sed pulvinar at, feugiat quis augue. Quisque non neque euismod, dapibus tortor in, suscipit elit. Mauris neque mi, interdum eget lectus eu, sollicitudin tincidunt risus. Sed dapibus non justo quis venenatis. Praesent blandit magna sed ex hendrerit fringilla.
                        {'\n'}{'\n'}
                        Pellentesque finibus tellus leo, vel varius tellus interdum id. Morbi sodales eros quis molestie lacinia. Morbi rutrum ultrices justo in vulputate. Vestibulum at tincidunt orci. Curabitur tempor congue sollicitudin. Vivamus feugiat ante semper urna interdum cursus. Curabitur commodo ut orci nec tincidunt. Proin vestibulum fringilla ultrices. Vivamus at elit ac dolor consectetur ultricies ac non tortor. Phasellus sed enim non nisi accumsan varius. Sed interdum odio a dictum pretium. Proin elementum porttitor augue, pellentesque bibendum nulla molestie nec.
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