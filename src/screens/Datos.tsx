import React, { useState } from 'react'
import { View, Text, TextInput, Platform, StyleSheet, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Datos = () => {

  const [ID, setID] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [marca, setMarca] = useState("");
  const [Problema, setProblema] = useState("");
  interface UserData {
    nombre: string;
    apellido: string;
    ID: string;
    email: string;
    telefono: string;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imagenes} source={require('../Resource/laptops.jpg')} />
      <Text style={styles.texto}> REGISTRO DE CLIENTE</Text>
      <TextInput style={styles.contenInput} placeholder='Identificación' value={ID} onChangeText={(value) => setID(value)}></TextInput>
      <TextInput style={styles.contenInput} placeholder='Nombre' value={nombre} onChangeText={(value) => setnombre(value)}></TextInput>
      <TextInput style={styles.contenInput} placeholder='Apellido' value={apellido} onChangeText={(value) => setapellido(value)}></TextInput>
      <TextInput style={styles.contenInput} placeholder='Telefono' keyboardType='phone-pad' value={Telefono} onChangeText={(value) => setTelefono(value)}></TextInput>
      <TextInput style={styles.contenInput} placeholder='Marca' value={marca} onChangeText={(value) => setMarca(value)}></TextInput>
      <TextInput style={styles.contenInput} placeholder='Problema del dispositivo' value={Problema} onChangeText={(value) => setProblema(value)}></TextInput>

    </View>
  )
}

export default Datos
//Codigo de CSS para darle diseño al formulario
const styles = StyleSheet.create(
  {
    texto: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
      marginBottom: 1,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
    }
    ,
    viewHear: {
      backgroundColor: '#0B26D3',
      color: '#FFFFFF',
    },
    container: {
      backgroundColor: '#C2D5C2',
      flex: 1,

    },
    imagenes: {
      width: "100%",
      height: 80,
      marginTop: 2
    },
    body: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    contenInput: {
      width: '90%',
      height: 50,
      borderColor: Colors.gray2,
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 10,
      marginBottom: 15,
      justifyContent: 'center',
    },
    btn: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Platform.OS === 'ios' ? Colors.naranaja : Colors.gray2,
      width: "90%",
      height: Platform.OS === "ios" ? 54 : 50,
      borderRadius: 10,
      marginHorizontal: 16,

    },
    separator: {
      height: 70,
      borderRadius: 10,
      width: "40%",


    },
    Textbtn: {
      color: Colors.black,
      fontSize: 20,
      fontWeight: "500",
    }
  }
)