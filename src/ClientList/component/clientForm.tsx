import { Box, Button, FormControl, Input, Text } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";


export const ClientForm = ({onForm}) => {

    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});

    const validate = () => {
        setErrors({});
        if (formData.name === undefined) {
          setErrors({ ...errors,
            name: 'El nombre es necesario.'
          });
          return false;
        } else if (formData.email === undefined) {
          setErrors({ ...errors,
            email: 'El correo es necesario.'
          });
          return false;
        } else if (formData.phone === undefined) {
            setErrors({ ...errors,
              phone: 'El numero de telefono es necesario.'
            });
            return false;
        } else if (formData.address === undefined) {
            setErrors({ ...errors,
              address: 'La dirección es necesario.'
            });
            return false;
          }
        return true;
      };

      const onSubmit = () => {
        if (validate()) {
            onForm(formData);
            setData({});
            setErrors({});
        } else {
            console.log(errors)
        }        
      };

    return (
            <FormControl isRequired>
                <Box style={styles.inputs}>
                    <FormControl.Label _text={{ bold: true}}>
                        Nombre del cliente
                    </FormControl.Label>
                    <Input placeholder="Jose" 
                        value={formData.name}
                        onChangeText={value => setData({ ...formData,
                            name: value
                    })} />
                    { "name" in errors ? <Text color='red.600' fontSize='sm'>{errors.name}</Text> : null }
                </Box>
                <Box style={styles.inputs}>
                    <FormControl.Label _text={{ bold: true}}>
                        Correo electronico del cliente
                    </FormControl.Label>
                    <Input placeholder="jose@pineda.website"
                    value={formData.email}
                        onChangeText={value => setData({ ...formData,
                            email: value
                    })} />
                    { "email" in errors ? <Text color='red.600' fontSize='sm'>{errors.email}</Text> : null }
                </Box>
                <Box style={styles.inputs}>
                    <FormControl.Label _text={{ bold: true}}>
                        Numero de telefono del cliente
                    </FormControl.Label>
                    <Input placeholder="04141453703" 
                    value={formData.phone}
                        onChangeText={value => setData({ ...formData,
                            phone: value
                    })} />
                    { "phone" in errors ? <Text color='red.600' fontSize='sm'>{errors.phone}</Text> : null }
                </Box>
                <Box style={styles.inputs}>
                    <FormControl.Label _text={{ bold: true}}>
                        Dirección del cliente
                    </FormControl.Label>
                    <Input placeholder="Valencia, Carabobo" 
                    value={formData.address}
                        onChangeText={value => setData({ ...formData,
                            address: value
                        })} />
                        { "address" in errors ? <Text color='red.600' fontSize='sm'>{errors.address}</Text> : null }
                </Box>
                <Button mt='1.5' onPress={onSubmit}>Crear cliente</Button>
            </FormControl>
    );
}

const styles = StyleSheet.create({
    inputs: {
        marginVertical: 10
    }
});
