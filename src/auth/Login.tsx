import { StyleSheet } from 'react-native';
import { Text, Box, ScrollView, View, Input, Button } from 'native-base';
import { useState } from 'react';

export default function Login() {

    const [userData, setUserData] = useState({email: '', password: ''});

    const handleForm = (name: string, value: string) => {
        setUserData({...userData, [name]: value});
    }

    const onLogin = () => {
        console.log(userData);
    }

  return (
    <View flex='1' flexDirection='column' justifyContent='center'>
        <ScrollView>
            <Box marginTop='1/3' width='75%' marginLeft='12.5%'>
                <Text fontSize='3xl' textAlign='center'>Iniciar sesión</Text>
                <Text fontSize='xl' textAlign='center'>
                    Para ingresar al sistema y ver el listado de productos, por favor, 
                    antes rellene estos datos.
                </Text>
                <Input variant="rounded" marginTop='5' 
                onChangeText={(value) => handleForm('email', value)}
                size="xl" placeholder="Email" type='text' />
                <Input variant="rounded" marginTop='2' 
                onChangeText={(value) => handleForm('password', value)}
                size="xl" placeholder="Contraseña" type='password' />
                <Button marginTop='4' borderRadius='full'>
                    <Text color='white' fontSize='xl' onPress={() => {onLogin()}}>Iniciar sesión</Text>
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
