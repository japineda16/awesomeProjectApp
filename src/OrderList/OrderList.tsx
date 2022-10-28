import { Box, Divider, Heading, Text, Icon, ScrollView } from "native-base";
import { StyleSheet } from "react-native";

export default function Order({ navigation })  {
    return (
        <>
            <Box backgroundColor='blueGray.100' 
            flex={1}
            flexDirection='column' marginY='2.5'>
                <Box style={styles.body}>
                    <Text fontSize='2xl' marginBottom={3}>Listado de ventas</Text>
                    <Divider></Divider>
                    <ScrollView height='full'>
                        <Box padding={0.5}>
                            <Box marginY={5}>
                                <Text onPress={() => {
                                    navigation.navigate('Orden');
                                }} fontSize='xl' fontWeight='bold'>
                                    Orden #12345
                                </Text>
                                <Text>Cliente: Jose Pineda</Text>
                                <Text>Dirección: Naguanagua, Tazajal.</Text>
                            </Box>
                            <Divider></Divider>
                        </Box>
                        <Box padding={0.5}>
                            <Box marginY={5}>
                                <Text fontSize='xl' fontWeight='bold'>
                                    Orden #67089
                                </Text>
                                <Text>Cliente: Yorman Rodriguez</Text>
                                <Text>Dirección: Guacara.</Text>
                            </Box>
                            <Divider></Divider>
                        </Box>
                        <Box padding={0.5}>
                            <Box marginY={5}>
                                <Text fontSize='xl' fontWeight='bold'>
                                    Orden #12345
                                </Text>
                                <Text>Cliente: Carlitos</Text>
                                <Text>Dirección: Guacara.</Text>
                            </Box>
                            <Divider></Divider>
                        </Box>
                    </ScrollView>
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