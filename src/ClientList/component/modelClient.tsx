import { FormControl, Input, Modal, ScrollView, Text } from "native-base";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, Alert } from "react-native";
import { getQuery, postQuery } from "../../services/query/query.service";
import { ClientForm } from "./clientForm";

export const ModalClient = ({status, onClose}) => {

    const [position, setPosition] = useState('center');

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
        const {data} = await postQuery('clients', form).catch((err) => {
            console.log(err);
            Alert.alert('Error', 'Ha sucedido un error, por favor vuelva a intentarlo.');
        });
        console.log(data);
    }

    return (
        <Modal isOpen={status} onClose={onClose}>
            <Modal.Content padding='5%' w='80%' {...styles[position]}>
            <Modal.CloseButton></Modal.CloseButton>
                <Modal.Header>Crear nuevo cliente</Modal.Header>
                <Modal.Body>
                    <ClientForm isLoading={false} onForm={onForm}></ClientForm>
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