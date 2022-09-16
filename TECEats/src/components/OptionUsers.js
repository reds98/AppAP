import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,TextInput,Button } from 'react-native';
import Item from './Item';
import { getAllItems } from './services.js/mainService';
export default function OptionUsers({navigation}) {
  
  
  async function   IngresarCliente(){
      const result=await getAllItems()
      console.log("RESULT==>",result)
      navigation.navigate('HomeUser', {
        items:result.rows
      })

  }
  return (
    <View style={styles.centered} >
      {/* <TextInput style={styles.input} placeholder="Buscar" /> */}
      <Text style={styles.title}>Selecciona el usuario que es usted</Text>
      
      <View style={styles.buttonContainer} >
      <Button onPress={IngresarCliente} style={styles.button}  title="Cliente" color="#216011"/>
      </View>
      <View style={styles.buttonContainer} >
      <Button style={styles.button} onPress={() =>
        navigation.navigate('Login')
      } title="Administrador " color="#216011"/>
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
