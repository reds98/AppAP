import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TextInput,Button } from 'react-native';
import Item from './Item';
            //:id/:type/:name/:price/:stock 
export default function AddItem() {
  return (
    <View style={styles.centered} >
      {/* <TextInput style={styles.input} placeholder="Buscar" /> */}
      <Text style={styles.titleMain}>Agregar Producto</Text>
      <Text style={styles.title}>ID</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Tipo</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Nombre</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>Precio</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title}>stock</Text>
      <TextInput style={styles.input}/>
      
    
      <View style={styles.buttonContainer} >
      <Button style={styles.button}  title="Agregar Producto " color="#216011"/>
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
