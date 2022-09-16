import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Item() {
  return (
    <View style={styles.centered}>
         <Text style={styles.title}>Nombre: #</Text>
        <View>
        
        </View>
      <Text style={styles.title}>Item #</Text>
      {/* <Text style={styles.subtitle}>Using Flexbox</Text> */}
      <Button  title="Press me">Agregar</Button>
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
    backgroundColor: "#ffd2d2",
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
});
