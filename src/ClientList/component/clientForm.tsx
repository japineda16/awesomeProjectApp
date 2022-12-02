import { Box, Button, CheckIcon, FormControl, Input, Select, Text } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";


export const ClientForm = ({onForm, isLoading}) => {

    const [formData, setData] = useState({name: '', email: '', phone: '', address: '', dni: '', dniType: ''});
    const [errors, setErrors] = useState({});

    const validate = () => {
        setErrors({});
        if (formData.name.length <= 0) {
          setErrors({ 
            name: 'El nombre es necesario.'
          });
          return false;
        } else if (formData.email.length <= 0) {
          setErrors({ 
            email: 'El correo es necesario.'
          });
          return false;
        } else if (formData.phone.length <= 0) {
            setErrors({ 
              phone: 'El numero de telefono es necesario.'
            });
            return false;
        } else if (formData.address.length <= 0) {
            setErrors({ 
              address: 'La dirección es necesario.'
            });
            return false;
          } else if (formData.dni.length <= 0) {
            setErrors({ 
              dni: 'El documento es necesario.'
            });
            return false;
          } else if (formData.dniType.length <= 0) {
            setErrors({ 
                dniType: 'El documento es necesario.'
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
                        Identificación
                    </FormControl.Label>
                    <Input placeholder="J-000000-0" 
                        value={formData.dni}
                        onChangeText={value => setData({ ...formData,
                            dni: value
                    })} />
                    { "dni" in errors ? <Text color='red.600' fontSize='sm'>{errors.dni}</Text> : null }
                </Box>
                <Box style={styles.inputs}>
                    <FormControl.Label _text={{ bold: true}}>
                        Identificación
                    </FormControl.Label>
                    <Select selectedValue={formData.dniType}
                    accessibilityLabel="Selecciona el tipo de documento" 
                    placeholder="Selecciona el tipo de documento"
                    onValueChange={itemValue => setData({...formData, dniType: itemValue})}>
                        <Select.Item label="Entidad privada J-" value="J" />
                        <Select.Item label="Persona natural V-" value="V" />
                        <Select.Item label="Extranjero E-" value="E" />
                        <Select.Item label="Entidad gubernamental" value="G" />
                    </Select>
                    { "dniType" in errors ? <Text color='red.600' fontSize='sm'>{errors.dniType}</Text> : null }
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
                <Button mt='1.5' isLoading={isLoading} onPress={onSubmit}>Crear cliente</Button>
            </FormControl>
    );
}

const styles = StyleSheet.create({
    inputs: {
        marginVertical: 10
    }
});
