import { Box, FormControl, Input, Modal, ScrollView, Text, useToast } from "native-base";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, Alert } from "react-native";
import { getQuery, postQuery } from "../../services/query/query.service";
import { ClientForm } from "./clientForm";

export const ModalClient = ({status, onClose, onSubmit}) => {
    const toast = useToast();
    const [position, setPosition] = useState('center');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
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

    const onForm = async (form: JSON) => {
        setLoading(true);
        const {data} = await postQuery('clients', form).catch((err) => {
            setLoading(false);
            Alert.alert('Error', 'Ha sucedido un error, por favor vuelva a intentarlo.');
        });
        toast.show({
            render: () => {
                return (
                <Box backgroundColor='success.500' px={4} py={3}>
                    <Text color='white'>Se ha agregado exitosamente el cliente.</Text>
                </Box>
                )

            }
        });
        setLoading(false);
        onSubmit(data);
    }

    return (
        <Modal isOpen={status} onClose={onClose}>
            <Modal.Content padding='5%' w='80%' {...styles[position]}>
            <Modal.CloseButton></Modal.CloseButton>
                <Modal.Header>Crear nuevo cliente</Modal.Header>
                <Modal.Body>
                    <ClientForm isLoading={isLoading} onForm={onForm}></ClientForm>
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
      center: {}
});