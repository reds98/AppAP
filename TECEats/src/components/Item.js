import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Item({nombre,precio,buttonText}) {
  return (
    <View style={styles.centered}>
         <Text style={styles.title}>{nombre}</Text>
        <View>

        </View>
      <Text style={styles.title}> {precio}</Text>
      {/* <Text style={styles.subtitle}>Using Flexbox</Text> */}
      <Button style={styles.button}  title={buttonText} color="#216011"/>
    </View>
  );

}
const styles = StyleSheet.create({
  centered: {
    paddingTop:20,
    margin:10,
    flex: 0.2,
    flexDirection:'row',
    justifyContent: "space-around",
    alignItems: "space-between",
    backgroundColor: "#3cad1f",
  },
  title: {
    // fontSize: 18,
    marginVertical: 2,
    color: "#FFFFFF"
    
  },
  button:{
    backgroundColor:"#216011"
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
});
