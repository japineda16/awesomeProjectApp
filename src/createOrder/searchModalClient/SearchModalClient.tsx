import { Box, Modal, Text, useToast } from "native-base";
import { useEffect, useState } from "react";
import { Keyboard, StyleSheet, Alert } from "react-native";
import { postQuery } from "../../services/query/query.service";

export const SearchModalClient = ({status, onClose}) => {
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

    return (
        <Modal isOpen={status} onClose={onClose}>
            <Modal.Content padding='5%' w='80%' {...styles[position]}>
            <Modal.CloseButton></Modal.CloseButton>
                <Modal.Header>Selecciona el cliente a facturar.</Modal.Header>
                <Modal.Body>
                    <Text>Holaa</Text>
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