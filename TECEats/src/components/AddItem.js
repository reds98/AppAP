import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TextInput,Button } from 'react-native';
import { createItem } from './services.js/mainService';
import Item from './Item';
import { useState } from 'react';
            //:id/:type/:name/:price/:stock 
export default function AddItem({navigation}) {
  const [tipo,setTipo]=useState("")
  const [nombre,setNombre]=useState("")
  const [precio,setPrecio]=useState("")
  const [stock,setStock]=useState("")
  async function agregarItem(){
    const resultado=await createItem(tipo,nombre,precio,stock)
    if(resultado.status){
      ToastAndroid.show("El producto se creo correctamente", ToastAndroid.SHORT);
      setTipo("")
      setNombre("")
      setPrecio("")
      setStock("")
      navigation.goBack()
    
    }
    console.log("RESULTDAO DE AGREGAR ITEM==>",resultado)
  }
  return (
    <View style={styles.centered} >
      {/* <TextInput style={styles.input} placeholder="Buscar" /> */}
      <Text style={styles.titleMain}>Agregar Producto</Text>
     
      <Text style={styles.title}>Tipo</Text>
      <TextInput style={styles.input}  defaultValue={tipo}  onChangeText={newText => setTipo(newText)}/>
      <Text style={styles.title}>Nombre</Text>
      <TextInput style={styles.input} defaultValue={nombre}  onChangeText={newText => setNombre(newText)}/>
      <Text style={styles.title} >Precio</Text>
      <TextInput style={styles.input} defaultValue={precio}  onChangeText={newText => setPrecio(newText)}/>
      <Text style={styles.title}>stock</Text>
      <TextInput style={styles.input} defaultValue={stock}  onChangeText={newText => setStock(newText)}/>
      
    
      <View style={styles.buttonContainer} >
      <Button  onPress={agregarItem} style={styles.button}  title="Agregar Producto " color="#216011"/>
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
 titleMain: {
    fontSize: 20,
    marginVertical: 2,
    alignSelf:"center",
    fontWeight: 'bold'
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
