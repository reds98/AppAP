import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TextInput } from 'react-native';
import Item from './Item';
export default function Home() {
  return (
    <ScrollView contentContainerStyle={{paddingVertical: 30}}>
      <TextInput style={styles.input} placeholder="Buscar" />
      <Text style={styles.title}>Busca los mejores Productos</Text>
      <Text style={styles.subtitle}>Agregalos a tu Carrito</Text>
      <Item buttonText={"Agregar"}/>
      <Item  buttonText={"Agregar"}/>
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
