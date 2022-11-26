import { Button, Modal, Text, Input, Box, Pressable, Divider } from "native-base";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, TouchableOpacity } from "react-native";
import { getQuery, postQuery } from "../../services/query/query.service";

export const SearchModalClient = ({status, onClose, onSelectedClient}) => {
    const [position, setPosition] = useState('center');
    const [isLoading, setLoading] = useState(false);
    const [filterClientList, setFilterClientList] = useState([]);
    const [clientName, setClientName] = useState('');

    const getClients = async () => {
        const {data} = await getQuery('clients?page=1').catch((err) => {
            Alert.alert('Error', 'Ha sucedido un error desconocido, vuelva a intentarlo.');
            console.log(err);
        });
        setFilterClientList(data[1]);
    }

    const filterAccounts = async (value: string) => {
        setClientName(value);
        const {data} = await postQuery('clients/search?page=1', {word: value}).catch((err) => {
            console.log(err);
            alert('Ups ha habido un error');
        });
        setFilterClientList(data);
    }

    const onSelectClient = (item: string) => {
        onSelectedClient(item);
    }

    useEffect(() => {
        const init =async () => {
            getClients();
        }
        init();
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setPosition('top');
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setPosition('center');
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <Modal isOpen={status} onClose={onClose}>
            <Modal.Content padding='5%' w='80%' maxH='1/2' {...styles[position]}>
            <Modal.CloseButton></Modal.CloseButton>
                <Modal.Header>Selecciona el cliente a facturar.</Modal.Header>
                <Modal.Body>
                    
                <Input
                  value={clientName}
                  onChangeText={(value) => filterAccounts(value)}
                  placeholder='Busca aquí algún cliente'
                />
                    {
                    filterClientList.map( (item, index) => {
                        return (
                            <Box key={item.id}>
                                <TouchableOpacity
                                    style={styles.TouchableOpacity}
                                    key={item.id}
                                    onPress={() => onSelectedClient(item.id)}>
                                    <Text
                                        >
                                        {item?.name || ''}
                                    </Text>
                                </TouchableOpacity>
                                <Divider />
                            </Box>
                        )
                    })
                    }
                <Button w='100%' backgroundColor='danger.400' marginY='3' onPress={onClose}>Cerrar</Button>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}

const styles = StyleSheet.create({
        top: {
            marginTop: '0',
            marginBottom: 'auto'
      },
      TouchableOpacity: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomColor: '#78716c'
      }
});