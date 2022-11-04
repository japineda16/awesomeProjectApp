import { StyleSheet } from 'react-native';
import { Text, Box, ScrollView, View, Input, Button } from 'native-base';
import { useState } from 'react';
import { Alert } from "react-native";
import { postQuery, saveStorageItem } from '../services/query/query.service';

export default function Login({ navigation }) {

    const [userData, setUserData] = useState({email: '', password: '', invalid: false});
    const [isLoading, setLoading] = useState(false);

    const handleForm = (name: string, value: string) => {
        setUserData({...userData, [name]: value});
    }

    const onLogin = async () => {
        setLoading(true);
        if (userData.email !== "" || userData.email !== "") {
          postQuery('auth/login', userData).then(async (res) => {
            setLoading(false);
            if (res.status == 200) {
              saveStorageItem('accessToken', res.data.accessToken);
              saveStorageItem('refreshToken', res.data.refreshToken);
              navigation.navigate('Lista-de-productos');
            }
          }).catch((err) => {
            setLoading(false);
            if (err.response.status != 401) {
              Alert.alert('Error desconocido', 'Ha habido un problema desconocido, por favor vuelva a intentarlo.');
            }
            if (err.response.status == 401) {
              Alert.alert('Error de validacion', 'Correo y/o contraseña incorrectos.');
            }
          });
        }
        if (userData.email === "" || userData.email === "") {
          setLoading(false);
          console.log('No has llenado uno de estos datos');
          setUserData({...userData, invalid: false});
        }
    }

  return (
    <View flex='1' flexDirection='column' justifyContent='center'>
        <ScrollView>
            <Box borderRadius='xl' borderWidth='1' borderColor='gray.200' marginTop='1/3' width='85%' padding='5%' marginLeft='7.5%' backgroundColor='white'>
                <Text fontSize='3xl' textAlign='center'>Iniciar sesión</Text>
                <Text fontSize='xl' textAlign='center'>
                    Para ingresar a la aplicación y ver el listado de productos, por favor, 
                    inicie sesión.
                </Text>
                <Input variant="rounded" marginTop='5' 
                onChangeText={(value) => handleForm('email', value)}
                size="xl" placeholder="Email" type='text' />
                <Input variant="rounded" marginTop='2'
                onChangeText={(value) => handleForm('password', value)}
                size="xl" placeholder="Contraseña" type='password' />
                <Button 
                  onPress={() => {onLogin()}}
                  marginTop='4'
                  isLoading={isLoading}
                  borderRadius='full'>
                    <Text color='white' fontSize='xl'>Iniciar sesión</Text>
                </Button>
            </Box>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexGrow: 1
  }
});
