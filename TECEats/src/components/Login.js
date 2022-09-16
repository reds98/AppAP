import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,Button,ToastAndroid } from 'react-native';
import { login } from './services.js/mainService';
import Item from './Item';
import { getAllItems } from './services.js/mainService';

export default function Login({navigation}) {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")

  async function   Ingresar(email,password){
    const resultado=await login(email,password)
    console.log("Este es el resultado del login==>",resultado.status)
    if(resultado.status){
      const result=await getAllItems()
      console.log("RESULT==>",result)
      navigation.navigate('Home', {
        items:result.rows
      })
    }
  }
  return (
    <View style={styles.centered} >
      {/* <TextInput style={styles.input} placeholder="Buscar" /> */}
      <Text style={styles.title}>Correo Institucional</Text>
      <TextInput style={styles.input} defaultValue={email}  onChangeText={newText => setEmail(newText)}/>
      <Text style={styles.title}>Contraseña</Text>
      <TextInput style={styles.input} defaultValue={password}  onChangeText={newText => setPassword(newText)}/>
      <View style={styles.buttonContainer} >
      <Button onPress={()=>{ Ingresar(email,password)}}   title="Ingresar " color="#216011"/>
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
