import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TextInput,Button } from 'react-native';
import Item from './Item';
export default function Register() {
  return (
    <View style={styles.centered} >
      {/* <TextInput style={styles.input} placeholder="Buscar" /> */}
      <Text style={styles.title}>Numero de cedula</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Numero de Carnet</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Nombre</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Apellidos</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Fecha de Nacimiento</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Correo electronico</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Contraseña</Text>
      <TextInput style={styles.input}/>
    
      <View style={styles.buttonContainer} >
      <Button style={styles.button}  title="Registrarse " color="#216011"/>
      </View>
      
     
    </View>
  );

}
const styles = StyleSheet.create({
  input: {
    width: 300,
    alignSelf:"center",
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15, 
    fontSize: 16,
},
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#ffc2c2",
    paddingTop: 25
  },
 buttonContainer:{
    // flex: 1,
    padding: 15,
    margin: 10,
    
 },
  title: {
    fontSize: 18,
    marginVertical: 2,
    alignSelf:"center"
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    alignSelf:"center"
  },
});
