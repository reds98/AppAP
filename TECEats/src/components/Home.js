import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TextInput,Button } from 'react-native';
import { useState,useEffect } from 'react';
import Item from './Item';
import { getAllItems } from './services.js/mainService';
export default function Home({route, navigation }) {
  // const [items,setItems]=useState([])
  
  useEffect( ()=>{ 
    console.log("THIS ARE THE ITEMS==>",route.params.items)
  },[])
  return (
    <ScrollView contentContainerStyle={{paddingVertical: 30}}>
      {/* <TextInput style={styles.input} placeholder="Buscar" /> */}
      <Text style={styles.title}>Productos Disponibles</Text>
      {/* <Text style={styles.subtitle}>Agregalos a tu Carrito</Text> */}
    {route.params.items.map((item)=>{
      console.log("ITEM IS ==",Object.keys(item))
      return (<Item nombre={item["_name"]} precio ={item["_price"]} buttonText={"Editar"}/>)
    })}
    <Button onPress={()=>{  navigation.navigate('AddItem')}}  title="Agregar Producto " color="#216011"/>
    </ScrollView>
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

    paddingTop: 25
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
